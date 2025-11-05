import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/analytics', label: 'Market Analytics' },
    { path: '/predictions', label: 'Predictor' },
    { path: '/recommendations', label: 'Strategy' },
    { path: '/about', label: 'About' },
    { path: '/help', label: 'Help' }
  ];

  return (
    <nav className="bg-gradient-to-r from-netflix-black via-gray-900 to-netflix-black shadow-2xl sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20 py-4">
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456" 
              alt="Netflix" 
              className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-netflix-red to-red-400 bg-clip-text text-transparent">
              NETNOVA
            </span>
          </Link>
          
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                  location.pathname === item.path
                    ? 'bg-netflix-red text-white shadow-lg shadow-netflix-red/30'
                    : 'text-gray-300 hover:text-white hover:bg-netflix-red/10 border border-transparent hover:border-netflix-red/30'
                } group`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;