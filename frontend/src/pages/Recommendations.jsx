import { useEffect, useState } from 'react';

function Recommendations() {
  const [recommendations, setRecommendations] = useState([]);
  const [predictions, setPredictions] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('http://127.0.0.1:8002/api/recommendations').then(res => res.json()),
      fetch('http://127.0.0.1:8002/api/predict').then(res => res.json())
    ])
    .then(([recData, predData]) => {
      setRecommendations(recData.recommendations || []);
      setPredictions(predData);
      setLoading(false);
    })
    .catch(err => {
      console.error('Error fetching data:', err);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-netflix-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-netflix-red mx-auto mb-4"></div>
          <p className="text-white">Loading Strategic Insights...</p>
        </div>
      </div>
    );
  }

  const strategyCategories = [
    { 
      title: 'Content Acquisition', 
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
        </svg>
      ), 
      color: 'from-blue-500 to-purple-600' 
    },
    { 
      title: 'Market Expansion', 
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd"/>
        </svg>
      ), 
      color: 'from-green-500 to-teal-600' 
    },
    { 
      title: 'Risk Assessment', 
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      ), 
      color: 'from-orange-500 to-red-600' 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-netflix-black via-gray-900 to-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-netflix-red/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-netflix-red/10 backdrop-blur-sm border border-netflix-red/20 rounded-full px-6 py-2 mb-6">
              <svg className="w-5 h-5 text-netflix-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
              </svg>
              <span className="text-netflix-red font-semibold text-sm">AI-Powered Strategic Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Strategic 
              <span className="bg-gradient-to-r from-netflix-red to-red-400 bg-clip-text text-transparent">
                Recommendations
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Data-driven insights and <span className="text-netflix-red font-semibold">actionable strategies</span> for content investment and market expansion
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-netflix-red to-red-400 mx-auto mt-8 rounded-full"></div>
          </div>

          {/* Key Metrics Overview */}
          {predictions && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {strategyCategories.map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-netflix-gray/50 to-black/50 backdrop-blur-sm border border-gray-800/50 p-8 rounded-3xl">
                  <div className={`bg-gradient-to-r ${category.color} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <div className="text-4xl font-bold text-netflix-red mb-2">
                    {index === 0 ? `${(predictions.success_probability * 100 || 77).toFixed(0)}%` :
                     index === 1 ? `${predictions.top_genres?.length || 5}+` :
                     'Medium'}
                  </div>
                  <p className="text-gray-400 text-sm">
                    {index === 0 ? 'Success Probability' :
                     index === 1 ? 'Market Opportunities' :
                     'Investment Risk Level'}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Strategic Recommendations */}
          <div className="bg-gradient-to-br from-netflix-red/10 to-red-900/10 backdrop-blur-sm border border-netflix-red/20 rounded-3xl p-8 mb-12">
            <div className="flex items-center mb-8">
              <div className="bg-netflix-red p-3 rounded-2xl mr-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">AI-Generated Strategic Insights</h2>
                <p className="text-gray-300">Machine learning powered recommendations for business growth</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {recommendations.map((recommendation, index) => {
                const priority = index < 2 ? 'High' : index < 4 ? 'Medium' : 'Low';
                const priorityColor = priority === 'High' ? 'text-red-400' : priority === 'Medium' ? 'text-yellow-400' : 'text-green-400';
                
                return (
                  <div key={index} className="bg-netflix-black/50 p-6 rounded-2xl border border-gray-800/50 hover:border-netflix-red/30 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="bg-netflix-red text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gray-800 ${priorityColor}`}>
                            {priority} Priority
                          </span>
                        </div>
                        <p className="text-white text-sm leading-relaxed">{recommendation}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Items */}
          <div className="bg-gradient-to-br from-purple-500/10 to-indigo-600/10 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-3 rounded-2xl mr-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Next Steps & Action Plan</h2>
                <p className="text-gray-300">Immediate actions to implement these strategic recommendations</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-netflix-black/50 p-6 rounded-2xl border border-gray-800/50">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <span className="bg-green-500 w-3 h-3 rounded-full mr-3"></span>
                  Immediate Actions (0-30 days)
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Analyze top-performing genre combinations</li>
                  <li>• Review current content portfolio balance</li>
                  <li>• Identify high-potential market segments</li>
                </ul>
              </div>
              
              <div className="bg-netflix-black/50 p-6 rounded-2xl border border-gray-800/50">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <span className="bg-yellow-500 w-3 h-3 rounded-full mr-3"></span>
                  Strategic Planning (30-90 days)
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Develop content acquisition strategy</li>
                  <li>• Plan market expansion initiatives</li>
                  <li>• Establish performance monitoring systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommendations;