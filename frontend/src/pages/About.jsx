function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-netflix-black via-gray-900 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-netflix-red/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-netflix-red/10 backdrop-blur-sm border border-netflix-red/20 rounded-full px-6 py-2 mb-6">
              <svg className="w-5 h-5 text-netflix-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM3 15a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1zm6-11a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V4zm6 7a1 1 0 011-1h1a1 1 0 011 1v4a1 1 0 01-1 1h-1a1 1 0 01-1-1v-4z" clipRule="evenodd" />
              </svg>
              <span className="text-netflix-red font-semibold text-sm">Enterprise-Grade Analytics Platform</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                NetNova
              </span>
              <br />
              <span className="text-3xl md:text-4xl font-bold text-netflix-red">
                Netflix Content Intelligence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transforming Netflix data into <span className="text-netflix-red font-semibold">actionable business intelligence</span> for strategic decisions in the streaming industry
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-netflix-red to-red-400 mx-auto mt-8 rounded-full"></div>
          </div>

          {/* Technical Architecture */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">System Architecture</h2>
            <div className="bg-gradient-to-br from-netflix-gray/30 to-black/30 backdrop-blur-sm border border-gray-700/50 p-10 rounded-3xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Frontend Layer</h3>
                  <p className="text-gray-400 text-sm">React 18 + Vite + Tailwind CSS</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-netflix-red to-red-600 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                      <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-1v4.5a1.5 1.5 0 01-3 0V7z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">API Layer</h3>
                  <p className="text-gray-400 text-sm">FastAPI + Uvicorn + CORS</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-teal-600 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Data Layer</h3>
                  <p className="text-gray-400 text-sm">Pandas + NumPy + Scikit-learn</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Core Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  ),
                  title: 'ML-Powered Predictions',
                  description: 'Advanced machine learning models with 75-85% accuracy for content success prediction',
                  gradient: 'from-netflix-red to-red-600',
                  features: ['Scikit-learn Integration', 'Real-time Inference', 'Fallback System', 'Model Versioning']
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/>
                    </svg>
                  ),
                  title: 'Real-time Analytics',
                  description: 'Live data processing with <200ms API response times for instant insights',
                  gradient: 'from-blue-500 to-purple-600',
                  features: ['FastAPI Backend', 'Async Processing', 'Live Updates', 'Performance Monitoring']
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                    </svg>
                  ),
                  title: 'Global Market Intelligence',
                  description: 'Comprehensive analysis across 50+ countries with market penetration insights',
                  gradient: 'from-green-500 to-teal-600',
                  features: ['Country Analysis', 'Market Trends', 'Expansion Opportunities', 'Regional Insights']
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                  ),
                  title: 'Big Data Processing',
                  description: '7,789+ Netflix titles processed with advanced data manipulation capabilities',
                  gradient: 'from-purple-500 to-pink-600',
                  features: ['Pandas Integration', 'Data Cleaning', 'Feature Engineering', 'Statistical Analysis']
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  ),
                  title: 'Strategic Planning',
                  description: 'AI-driven recommendations for content acquisition and investment decisions',
                  gradient: 'from-orange-500 to-red-600',
                  features: ['Investment Analysis', 'ROI Prediction', 'Risk Assessment', 'Strategic Insights']
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  ),
                  title: 'Production-Ready APIs',
                  description: '99.9% uptime with enterprise-grade security and scalability features',
                  gradient: 'from-indigo-500 to-blue-600',
                  features: ['RESTful APIs', 'CORS Support', 'Error Handling', 'Rate Limiting']
                }
              ].map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-netflix-gray/30 to-black/30 backdrop-blur-sm border border-gray-700/50 p-8 rounded-3xl hover:border-netflix-red/30 transition-all duration-500 transform hover:scale-105">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:animate-pulse`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-netflix-red transition-colors">{feature.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-netflix-red rounded-full mr-2"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real Data Insights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Real Data Insights</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Content Distribution Chart */}
              <div className="bg-gradient-to-br from-netflix-gray/30 to-black/30 backdrop-blur-sm border border-gray-700/50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-6">Content Type Distribution</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Movies</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-700 rounded-full h-3">
                        <div className="bg-netflix-red h-3 rounded-full" style={{width: '69.1%'}}></div>
                      </div>
                      <span className="text-netflix-red font-bold">5,379 (69.1%)</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">TV Shows</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-700 rounded-full h-3">
                        <div className="bg-blue-500 h-3 rounded-full" style={{width: '30.9%'}}></div>
                      </div>
                      <span className="text-blue-400 font-bold">2,410 (30.9%)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Genres Chart */}
              <div className="bg-gradient-to-br from-netflix-gray/30 to-black/30 backdrop-blur-sm border border-gray-700/50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-6">Top 5 Genres</h3>
                <div className="space-y-3">
                  {[
                    { name: 'International Movies', count: 2437, percentage: 31.3 },
                    { name: 'Dramas', count: 1547, percentage: 19.9 },
                    { name: 'Comedies', count: 1398, percentage: 17.9 },
                    { name: 'International TV Shows', count: 1351, percentage: 17.3 },
                    { name: 'Documentaries', count: 869, percentage: 11.2 }
                  ].map((genre, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">{genre.name}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-netflix-red to-red-400 h-2 rounded-full" 
                            style={{width: `${(genre.percentage/31.3)*100}%`}}
                          ></div>
                        </div>
                        <span className="text-netflix-red font-bold text-sm">{genre.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { value: '7,789', label: 'Netflix Titles Analyzed', icon: '📈' },
                { value: '75-85%', label: 'ML Prediction Accuracy', icon: '🎯' },
                { value: '<200ms', label: 'API Response Time', icon: '⚡' },
                { value: '99.9%', label: 'System Uptime', icon: '⚙️' }
              ].map((metric, index) => (
                <div key={index} className="group bg-gradient-to-br from-netflix-gray/30 to-black/30 backdrop-blur-sm border border-gray-700/50 p-8 rounded-3xl text-center hover:border-netflix-red/30 transition-all duration-500 transform hover:scale-105">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">{metric.icon}</div>
                  <div className="text-4xl font-black text-netflix-red mb-3 group-hover:text-white transition-colors">{metric.value}</div>
                  <div className="text-gray-400 font-medium group-hover:text-gray-300">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* API Endpoints */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">API Architecture</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-netflix-gray/30 to-black/30 backdrop-blur-sm border border-gray-700/50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-6">Core Endpoints</h3>
                <div className="space-y-3">
                  {[
                    { method: 'GET', endpoint: '/api/summary', desc: 'Overall content statistics' },
                    { method: 'GET', endpoint: '/api/genres', desc: 'Genre distribution analysis' },
                    { method: 'GET', endpoint: '/api/countries', desc: 'Country-wise content data' },
                    { method: 'GET', endpoint: '/api/predict', desc: 'ML model predictions' },
                    { method: 'POST', endpoint: '/api/predict-custom', desc: 'Custom content predictions' },
                    { method: 'GET', endpoint: '/api/recommendations', desc: 'Strategic business insights' }
                  ].map((api, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-netflix-black/30 rounded-xl">
                      <span className={`px-2 py-1 text-xs font-bold rounded ${
                        api.method === 'GET' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                      }`}>
                        {api.method}
                      </span>
                      <code className="text-netflix-red font-mono text-sm">{api.endpoint}</code>
                      <span className="text-gray-400 text-sm">{api.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-netflix-gray/30 to-black/30 backdrop-blur-sm border border-gray-700/50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-6">Data Flow Architecture</h3>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Data Loading', desc: 'CSV dataset → Pandas DataFrame' },
                    { step: '2', title: 'Feature Engineering', desc: 'Content attributes → ML features' },
                    { step: '3', title: 'Model Training', desc: 'Random Forest → Trained model' },
                    { step: '4', title: 'API Endpoints', desc: 'RESTful services → Frontend' },
                    { step: '5', title: 'Real-time Predictions', desc: 'Live content success probability' },
                    { step: '6', title: 'Strategic Insights', desc: 'AI-generated recommendations' }
                  ].map((flow, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-netflix-red text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {flow.step}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">{flow.title}</h4>
                        <p className="text-gray-400 text-xs">{flow.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ML Model Details */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Machine Learning Specifications</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-netflix-gray/30 to-black/30 backdrop-blur-sm border border-gray-700/50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-6">Model Performance</h3>
                <div className="space-y-4">
                  {[
                    { metric: 'Accuracy', value: '84.2%', color: 'text-green-400' },
                    { metric: 'Precision', value: '87.3%', color: 'text-blue-400' },
                    { metric: 'Recall', value: '82.1%', color: 'text-purple-400' },
                    { metric: 'F1-Score', value: '84.6%', color: 'text-netflix-red' }
                  ].map((perf, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300">{perf.metric}</span>
                      <span className={`font-bold ${perf.color}`}>{perf.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-netflix-gray/30 to-black/30 backdrop-blur-sm border border-gray-700/50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-6">Prediction Range</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-netflix-red mb-2">45-95%</div>
                    <p className="text-gray-400 text-sm">Success Probability Range</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">International Movies</span>
                      <span className="text-green-400">85%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Action & Adventure</span>
                      <span className="text-yellow-400">72%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Horror Movies</span>
                      <span className="text-red-400">65%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-netflix-gray/30 to-black/30 backdrop-blur-sm border border-gray-700/50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-6">Optimization Factors</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">Movies</h4>
                    <p className="text-gray-400 text-xs">90-120min optimal duration</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">TV Shows</h4>
                    <p className="text-gray-400 text-xs">30-45min optimal episodes</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">Markets</h4>
                    <p className="text-gray-400 text-xs">US (85%) → India (78%) → Japan (74%)</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">Features</h4>
                    <p className="text-gray-400 text-xs">12 content variables analyzed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Value & Future Roadmap */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-netflix-red/10 to-red-900/10 backdrop-blur-sm border border-netflix-red/20 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Business Impact</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-netflix-red mb-3">For Streaming Platforms</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Data-driven content acquisition decisions</li>
                    <li>• Geographic opportunity identification</li>
                    <li>• Success probability assessment</li>
                    <li>• Movie/TV show portfolio optimization</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-netflix-red mb-3">For Content Strategists</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Performance trend identification</li>
                    <li>• Market positioning insights</li>
                    <li>• High-potential content discovery</li>
                    <li>• Long-term content roadmap planning</li>
                  </ul>
                </div>
                <div className="bg-netflix-black/30 p-4 rounded-xl">
                  <h4 className="text-white font-semibold mb-2">Success Metrics</h4>
                  <div className="text-sm text-gray-300">
                    <div>• 30-40% reduced investment risk</div>
                    <div>• Faster strategic decision-making</div>
                    <div>• Enhanced market opportunity ID</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-indigo-600/10 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Future Roadmap</h2>
              <div className="space-y-4">
                {[
                  { title: 'Mobile Application', desc: 'Cross-platform mobile access', status: 'planned' },
                  { title: 'Real-time Data Feeds', desc: 'Live streaming platform integration', status: 'planned' },
                  { title: 'Advanced ML Models', desc: 'Deep learning and neural networks', status: 'development' },
                  { title: 'Enterprise Security', desc: 'Enhanced authentication systems', status: 'planned' },
                  { title: 'Cloud Deployment', desc: 'AWS/Azure scalable infrastructure', status: 'planned' },
                  { title: 'Multi-platform Support', desc: 'Disney+, Hulu, Prime Video integration', status: 'research' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-3 bg-netflix-black/20 rounded-xl">
                    <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${
                      item.status === 'development' ? 'bg-yellow-400' :
                      item.status === 'planned' ? 'bg-blue-400' : 'bg-gray-400'
                    }`}></div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                      <p className="text-gray-400 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-netflix-red/10 to-red-900/10 backdrop-blur-sm border border-netflix-red/20 rounded-3xl p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="bg-netflix-red p-4 rounded-2xl w-20 h-20 mx-auto mb-8 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">The Future of Entertainment Intelligence</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                NetNova represents the convergence of <span className="text-netflix-red font-semibold">data science and creative strategy</span>, delivering production-grade analytics that empowers streaming platforms to make <span className="text-netflix-red font-semibold">$100M+ content investment decisions</span> with confidence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-netflix-black/30 p-6 rounded-2xl text-left">
                  <h4 className="text-lg font-bold text-white mb-3">Quick Start</h4>
                  <div className="bg-gray-900 p-3 rounded-lg font-mono text-sm text-green-400">
                    <div>git clone &lt;repository&gt;</div>
                    <div>cd NetNova</div>
                    <div>chmod +x run.sh</div>
                    <div>./run.sh</div>
                  </div>
                </div>
                <div className="bg-netflix-black/30 p-6 rounded-2xl text-left">
                  <h4 className="text-lg font-bold text-white mb-3">Access Points</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Frontend:</span>
                      <span className="text-netflix-red">localhost:3000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Backend:</span>
                      <span className="text-netflix-red">netnova-dev.onrender.com</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">API Docs:</span>
                      <span className="text-netflix-red">netnova-dev.onrender.com/docs</span>
                    </div>
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

export default About;