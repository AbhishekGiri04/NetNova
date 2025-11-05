#!/bin/bash

# NetNova - Netflix Content Intelligence Platform
# Professional startup script

set -e
cd "$(dirname "$0")"

echo "NetNova - Netflix Content Intelligence Platform"
echo "==============================================="

# Dependency checks
command -v python3 >/dev/null 2>&1 || { echo "ERROR: Python3 required"; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "ERROR: Node.js/npm required"; exit 1; }

# Install dependencies
if [ ! -d "frontend/node_modules" ]; then
    echo "Installing frontend dependencies..."
    (cd frontend && npm install --silent)
fi

echo "Installing backend dependencies..."
(cd backend && pip install -q -r requirements.txt)

# Clean existing processes
echo "Cleaning up existing processes..."
lsof -ti:8002 2>/dev/null | xargs kill -9 2>/dev/null || true
lsof -ti:2500 2>/dev/null | xargs kill -9 2>/dev/null || true
sleep 1

# Start backend
echo "Starting backend server..."
(cd backend && python3 app.py) &
BACKEND_PID=$!

# Wait for backend to start
echo "Waiting for backend to initialize..."
sleep 3

# Start frontend
echo "Starting frontend server..."
(cd frontend && npm run dev) &
FRONTEND_PID=$!

# Wait for frontend to start
echo "Waiting for frontend to initialize..."
sleep 5

echo ""
echo "Servers started successfully:"
echo "  Backend:  http://localhost:8002"
echo "  Frontend: http://localhost:2500"
echo ""
echo "Opening browser..."
sleep 2
# Auto open Chrome
if command -v google-chrome >/dev/null 2>&1; then
    google-chrome http://localhost:2500 2>/dev/null &
elif command -v chrome >/dev/null 2>&1; then
    chrome http://localhost:2500 2>/dev/null &
else
    open http://localhost:2500 2>/dev/null || echo "Please open http://localhost:2500 manually"
fi
echo ""
echo "Press Ctrl+C to stop all servers"

# Cleanup handler
cleanup() {
    echo ""
    echo "Stopping servers..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null || true
    lsof -ti:8002 2>/dev/null | xargs kill -9 2>/dev/null || true
    lsof -ti:2500 2>/dev/null | xargs kill -9 2>/dev/null || true
    echo "Servers stopped"
    exit 0
}

trap cleanup SIGINT SIGTERM
wait