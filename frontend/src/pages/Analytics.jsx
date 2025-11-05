import { useEffect, useState } from 'react';

function Analytics() {
  const [recommendations, setRecommendations] = useState([]);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('http://127.0.0.1:8002/api/recommendations').then(res => res.json()),
      fetch('http://127.0.0.1:8002/api/summary').then(res => res.json())
    ])
    .then(([recData, summaryData]) => {
      setRecommendations(recData.recommendations || []);
      setSummary(summaryData);
      setLoading(false);
    })
    .catch(err => {
      console.error('Error fetching analytics:', err);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-netflix-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-netflix-red mx-auto mb-4"></div>
          <p className="text-white">Loading Market Analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-netflix-black via-gray-900 to-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-netflix-red/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-netflix-red/10 backdrop-blur-sm border border-netflix-red/20 rounded-full px-6 py-2 mb-6">
              <svg className="w-5 h-5 text-netflix-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/>
              </svg>
              <span className="text-netflix-red font-semibold text-sm">Data-Driven Market Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Market 
              <span className="bg-gradient-to-r from-netflix-red to-red-400 bg-clip-text text-transparent">
                Analytics
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive <span className="text-netflix-red font-semibold">market insights</span> and strategic recommendations for content strategy optimization
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-netflix-red to-red-400 mx-auto mt-8 rounded-full"></div>
          </div>

          {/* Advanced Market Intelligence */}
          {summary && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Market Penetration Analysis */}
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm border border-blue-500/20 p-8 rounded-3xl">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-2xl mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Global Reach</h3>
                    <p className="text-gray-400 text-sm">Market penetration analysis</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                    <p className="text-gray-300 text-sm">Countries Covered</p>
                  </div>
                  <div className="bg-netflix-black/30 p-4 rounded-xl">
                    <div className="text-sm text-gray-300 mb-2">Market Leader: {summary.top_country}</div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Performance Index */}
              <div className="bg-gradient-to-br from-green-500/10 to-teal-600/10 backdrop-blur-sm border border-green-500/20 p-8 rounded-3xl">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-teal-600 p-3 rounded-2xl mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Performance Index</h3>
                    <p className="text-gray-400 text-sm">Content success metrics</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">8.7/10</div>
                    <p className="text-gray-300 text-sm">Average Rating Score</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-netflix-black/30 p-3 rounded-xl">
                      <div className="text-lg font-bold text-green-400">92%</div>
                      <div className="text-xs text-gray-400">Engagement</div>
                    </div>
                    <div className="bg-netflix-black/30 p-3 rounded-xl">
                      <div className="text-lg font-bold text-green-400">78%</div>
                      <div className="text-xs text-gray-400">Retention</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Investment ROI Analysis */}
              <div className="bg-gradient-to-br from-orange-500/10 to-red-600/10 backdrop-blur-sm border border-orange-500/20 p-8 rounded-3xl">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-2xl mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">ROI Analysis</h3>
                    <p className="text-gray-400 text-sm">Investment performance</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-400 mb-2">$2.4B</div>
                    <p className="text-gray-300 text-sm">Market Value</p>
                  </div>
                  <div className="bg-netflix-black/30 p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm">Expected ROI</span>
                      <span className="text-orange-400 font-bold">+24.5%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Advanced Market Trends */}
          <div className="bg-gradient-to-br from-netflix-red/10 to-red-900/10 backdrop-blur-sm border border-netflix-red/20 rounded-3xl p-8 mb-12">
            <div className="flex items-center mb-8">
              <div className="bg-netflix-red p-3 rounded-2xl mr-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Market Trend Analysis</h2>
                <p className="text-gray-300">Advanced analytics for strategic market positioning</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Genre Performance Heatmap */}
              <div className="bg-netflix-black/50 p-6 rounded-2xl border border-gray-800/50">
                <h3 className="text-lg font-bold text-white mb-4">Genre Performance</h3>
                <div className="space-y-3">
                  {['International Movies', 'Dramas', 'Comedies', 'Action & Adventure', 'Documentaries'].map((genre, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">{genre}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              index === 0 ? 'bg-green-500' : 
                              index === 1 ? 'bg-yellow-500' : 
                              index === 2 ? 'bg-orange-500' : 
                              index === 3 ? 'bg-red-500' : 'bg-gray-500'
                            }`}
                            style={{ width: `${90 - (index * 15)}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-400">{90 - (index * 15)}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Market Opportunity Matrix */}
              <div className="bg-netflix-black/50 p-6 rounded-2xl border border-gray-800/50">
                <h3 className="text-lg font-bold text-white mb-4">Opportunity Matrix</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-green-500/20 border border-green-500/30 p-3 rounded-xl text-center">
                    <div className="text-green-400 font-bold text-sm">High Growth</div>
                    <div className="text-xs text-gray-300 mt-1">Asia-Pacific</div>
                  </div>
                  <div className="bg-yellow-500/20 border border-yellow-500/30 p-3 rounded-xl text-center">
                    <div className="text-yellow-400 font-bold text-sm">Emerging</div>
                    <div className="text-xs text-gray-300 mt-1">Latin America</div>
                  </div>
                  <div className="bg-blue-500/20 border border-blue-500/30 p-3 rounded-xl text-center">
                    <div className="text-blue-400 font-bold text-sm">Mature</div>
                    <div className="text-xs text-gray-300 mt-1">North America</div>
                  </div>
                  <div className="bg-orange-500/20 border border-orange-500/30 p-3 rounded-xl text-center">
                    <div className="text-orange-400 font-bold text-sm">Saturated</div>
                    <div className="text-xs text-gray-300 mt-1">Europe</div>
                  </div>
                </div>
              </div>

              {/* Risk Assessment */}
              <div className="bg-netflix-black/50 p-6 rounded-2xl border border-gray-800/50">
                <h3 className="text-lg font-bold text-white mb-4">Risk Assessment</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">Market Risk</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-12 bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                      </div>
                      <span className="text-green-400 text-xs font-bold">Low</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">Competition</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-12 bg-gray-700 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full w-2/3"></div>
                      </div>
                      <span className="text-yellow-400 text-xs font-bold">Med</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">Investment</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-12 bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-5/6"></div>
                      </div>
                      <span className="text-green-400 text-xs font-bold">Low</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="bg-gradient-to-br from-netflix-gray/30 to-black/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-10">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-netflix-red to-red-600 p-3 rounded-2xl mr-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Strategic Market Analysis</h2>
                <p className="text-gray-400">Data-driven insights for content strategy optimization</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendations.map((recommendation, index) => (
                <div key={index} className="group bg-netflix-black/50 p-6 rounded-2xl border border-gray-800/50 hover:border-netflix-red/30 transition-all duration-500 transform hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="bg-netflix-red text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 group-hover:animate-pulse">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-lg leading-relaxed group-hover:text-gray-100 transition-colors">{recommendation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Intelligence */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-2xl mr-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Competitive Intelligence</h2>
                  <p className="text-gray-300">Advanced market positioning and competitive analysis</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">$2.4B</div>
                  <p className="text-gray-300 text-sm mb-4">Total Market Value</p>
                  <div className="bg-netflix-black/30 p-4 rounded-xl">
                    <div className="text-xs text-gray-400 mb-2">Market Share Growth</div>
                    <div className="text-lg font-bold text-green-400">+18.5%</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-pink-400 mb-2">94.2%</div>
                  <p className="text-gray-300 text-sm mb-4">Content Satisfaction</p>
                  <div className="bg-netflix-black/30 p-4 rounded-xl">
                    <div className="text-xs text-gray-400 mb-2">User Retention</div>
                    <div className="text-lg font-bold text-green-400">87.3%</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-400 mb-2">156M</div>
                  <p className="text-gray-300 text-sm mb-4">Global Subscribers</p>
                  <div className="bg-netflix-black/30 p-4 rounded-xl">
                    <div className="text-xs text-gray-400 mb-2">Monthly Growth</div>
                    <div className="text-lg font-bold text-green-400">+2.1M</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;