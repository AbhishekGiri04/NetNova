import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const COLORS = ['#E50914', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE'];

function GenreChart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8002/api/genres')
      .then(res => res.json())
      .then(genreData => {
        const chartData = Object.entries(genreData).map(([name, value]) => ({
          name,
          value
        }));
        setData(chartData);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching genres:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center">Loading genres...</div>;
  }

  return (
    <div className="bg-netflix-gray p-6 rounded-2xl shadow-lg">
      <h3 className="text-xl font-bold mb-4">Genre Distribution</h3>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GenreChart;