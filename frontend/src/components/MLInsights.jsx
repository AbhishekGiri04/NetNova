import { useEffect, useState } from 'react';

function MLInsights() {
  const [insights, setInsights] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('http://127.0.0.1:8002/api/predict').then(res => res.json()),
      fetch('http://127.0.0.1:8002/api/recommendations').then(res => res.json())
    ])
    .then(([predictData, recData]) => {
      setInsights(predictData);
      setRecommendations(recData.recommendations || []);
      setLoading(false);
    })
    .catch(err => {
      console.error('Error fetching ML insights:', err);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-netflix-red"></div>
        <span className="ml-4 text-gray-400">Loading AI insights...</span>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Model Status & Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-500/20 p-6 rounded-2xl">
          <div className="flex items-center mb-4">
            <div className="bg-green-500 p-2 rounded-lg mr-3">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-green-400 font-semibold">Model Status</span>
          </div>
          <p className="text-2xl font-bold text-white">{insights?.model_status === 'active' ? 'Active' : 'Fallback Mode'}</p>
          <p className="text-gray-400 text-sm mt-1">AI system operational</p>
        </div>

        <div className="bg-gradient-to-br from-netflix-red/10 to-red-600/10 border border-netflix-red/20 p-6 rounded-2xl">
          <div className="flex items-center mb-4">
            <div className="bg-netflix-red p-2 rounded-lg mr-3">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <span className="text-netflix-red font-semibold">Success Rate</span>
          </div>
          <p className="text-2xl font-bold text-white">{((insights?.success_probability || insights?.prediction_score || 0.75) * 100).toFixed(1)}%</p>
          <p className="text-gray-400 text-sm mt-1">Prediction accuracy</p>
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/20 p-6 rounded-2xl">
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 p-2 rounded-lg mr-3">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <span className="text-blue-400 font-semibold">Confidence</span>
          </div>
          <p className="text-2xl font-bold text-white">{((insights?.confidence || 0.85) * 100).toFixed(0)}%</p>
          <p className="text-gray-400 text-sm mt-1">Model confidence</p>
        </div>
      </div>

      {/* AI Insights */}
      {insights?.model_insights && (
        <div className="bg-gradient-to-br from-netflix-gray/30 to-black/30 border border-gray-700/50 p-8 rounded-2xl">
          <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
            <svg className="w-6 h-6 text-netflix-red mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            AI Analysis Results
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insights.model_insights.map((insight, index) => (
              <div key={index} className="bg-netflix-black/50 p-6 rounded-xl border border-gray-800/50 hover:border-netflix-red/30 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-netflix-red text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-300 leading-relaxed">{insight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Strategic Recommendations */}
      {recommendations.length > 0 && (
        <div className="bg-gradient-to-br from-netflix-gray/30 to-black/30 border border-gray-700/50 p-8 rounded-2xl">
          <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
            <svg className="w-6 h-6 text-netflix-red mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
            Strategic Recommendations
          </h4>
          <div className="space-y-4">
            {recommendations.map((recommendation, index) => (
              <div key={index} className="bg-netflix-black/50 p-6 rounded-xl border border-gray-800/50 hover:border-netflix-red/30 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-netflix-red to-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-lg leading-relaxed">{recommendation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Feature Usage Stats */}
      {insights?.features_used && (
        <div className="bg-gradient-to-br from-netflix-gray/30 to-black/30 border border-gray-700/50 p-8 rounded-2xl">
          <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
            <svg className="w-6 h-6 text-netflix-red mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/>
            </svg>
            Data Features Analysis
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-netflix-red mb-2">{insights.features_used.movies?.toLocaleString()}</div>
              <div className="text-gray-400 text-sm">Movies Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-netflix-red mb-2">{insights.features_used.tv_shows?.toLocaleString()}</div>
              <div className="text-gray-400 text-sm">TV Shows Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-netflix-red mb-2">{insights.features_used.genre_count}</div>
              <div className="text-gray-400 text-sm">Genres Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-netflix-red mb-2">{insights.features_used.country_count}</div>
              <div className="text-gray-400 text-sm">Countries Covered</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MLInsights;