import { useEffect, useState } from "react";

function SummaryCards() {
  const [summary, setSummary] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8002/api/summary")
      .then(res => res.json())
      .then(data => {
        setSummary(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching summary:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="bg-netflix-gray p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-gray-400 text-sm uppercase tracking-wide">Total Movies</h3>
        <p className="text-3xl font-bold text-white mt-2">{summary.total_movies?.toLocaleString()}</p>
      </div>
      <div className="bg-netflix-gray p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-gray-400 text-sm uppercase tracking-wide">Total TV Shows</h3>
        <p className="text-3xl font-bold text-white mt-2">{summary.total_shows?.toLocaleString()}</p>
      </div>
      <div className="bg-netflix-gray p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-gray-400 text-sm uppercase tracking-wide">Total Content</h3>
        <p className="text-3xl font-bold text-white mt-2">{summary.total_content?.toLocaleString()}</p>
      </div>
      <div className="bg-netflix-gray p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-gray-400 text-sm uppercase tracking-wide">Top Country</h3>
        <p className="text-3xl font-bold text-netflix-red mt-2">{summary.top_country}</p>
      </div>
    </div>
  );
}

export default SummaryCards;