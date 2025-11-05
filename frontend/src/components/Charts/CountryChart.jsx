import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function CountryChart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8002/api/countries')
      .then(res => res.json())
      .then(countryData => {
        const chartData = Object.entries(countryData).map(([name, value]) => ({
          name: name.length > 15 ? name.substring(0, 15) + '...' : name,
          value
        }));
        setData(chartData);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching countries:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center">Loading countries...</div>;
  }

  return (
    <div className="bg-netflix-gray p-6 rounded-2xl shadow-lg">
      <h3 className="text-xl font-bold mb-4">Top Countries by Content</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis 
            dataKey="name" 
            stroke="#fff" 
            angle={-45}
            textAnchor="end"
            height={100}
          />
          <YAxis stroke="#fff" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#2F2F2F', 
              border: '1px solid #E50914',
              borderRadius: '8px'
            }}
          />
          <Bar dataKey="value" fill="#E50914" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CountryChart;