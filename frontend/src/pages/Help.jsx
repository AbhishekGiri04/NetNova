import { useState } from 'react';

function Help() {
  const [activeTab, setActiveTab] = useState('getting-started');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const tabs = [
    { 
      id: 'getting-started', 
      label: 'Getting Started', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832L14 10.202a1 1 0 000-1.65l-4.445-2.384z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      id: 'features', 
      label: 'Features Guide', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      id: 'api', 
      label: 'API Documentation', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      id: 'faq', 
      label: 'FAQ', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  const faqs = [
    {
      question: "How accurate are the AI predictions?",
      answer: "Our machine learning model achieves 75-85% accuracy based on historical Netflix data analysis. The model uses advanced algorithms and is continuously validated with new data to ensure reliable predictions for content success rates."
    },
    {
      question: "What data sources are used?",
      answer: "We analyze Netflix's comprehensive dataset containing 7,789+ titles across movies and TV shows, including detailed metadata such as genre classifications, country origins, release dates, cast information, and performance metrics."
    },
    {
      question: "How often is the data updated?",
      answer: "The dashboard data is processed in real-time with API response times under 200ms. Our machine learning models are retrained monthly with new content data, and the system maintains 99.9% uptime for continuous availability."
    },
    {
      question: "Can I export the analytics data?",
      answer: "Yes, you can export comprehensive reports and visualizations in multiple formats including PDF reports, high-resolution PNG charts, and structured CSV data files through our intuitive dashboard interface."
    },
    {
      question: "What makes NetNova different from other analytics platforms?",
      answer: "NetNova combines real machine learning models with production-grade infrastructure, offering enterprise-level insights specifically designed for streaming platforms and content strategists with quantifiable business impact."
    },
    {
      question: "Is there API rate limiting?",
      answer: "Our APIs are designed for enterprise use with generous rate limits. For high-volume usage or custom integrations, please contact our support team for dedicated API access and custom rate limit configurations."
    }
  ];

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
                <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span className="text-netflix-red font-semibold text-sm">Comprehensive Documentation</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Help & 
              <span className="bg-gradient-to-r from-netflix-red to-red-400 bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to know about using <span className="text-netflix-red font-semibold">NetNova Platform</span> for data-driven content strategy
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-netflix-red to-red-400 mx-auto mt-8 rounded-full"></div>
          </div>

          {/* Modern Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 ${
                  activeTab === tab.id
                    ? 'bg-netflix-red text-white shadow-lg shadow-netflix-red/30'
                    : 'bg-netflix-gray/50 backdrop-blur-sm text-gray-300 hover:bg-netflix-red/20 border border-gray-700/50 hover:border-netflix-red/30'
                }`}
              >
                <div className={`transition-transform duration-300 ${
                  activeTab === tab.id ? 'animate-pulse' : 'group-hover:animate-bounce'
                }`}>
                  {tab.icon}
                </div>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gradient-to-br from-netflix-gray/30 to-black/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-10">
            {activeTab === 'getting-started' && (
              <div className="animate-fadeIn">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-netflix-red to-red-600 p-3 rounded-2xl mr-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 0a1 1 0 100 2h.01a1 1 0 100-2H9zm2 0a1 1 0 100 2h.01a1 1 0 100-2H11zm2 0a1 1 0 100 2h.01a1 1 0 100-2H13zm-4-3a1 1 0 100 2h.01a1 1 0 100-2H9zm2 0a1 1 0 100 2h.01a1 1 0 100-2H11zm2 0a1 1 0 100 2h.01a1 1 0 100-2H13z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">Getting Started</h2>
                    <p className="text-gray-400">Quick start guide to NetNova platform</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {[
                    {
                      step: '01',
                      title: 'Dashboard Overview',
                      description: 'Start with the Dashboard to get comprehensive Netflix content statistics and market insights.',
                      features: ['Summary statistics cards', 'Interactive genre distribution', 'Country-wise performance analysis', 'Real-time data updates']
                    },
                    {
                      step: '02',
                      title: 'AI Predictions',
                      description: 'Leverage machine learning insights for strategic content decisions and market analysis.',
                      features: ['ML model prediction scores', 'Top performing genres analysis', 'Strategic recommendations', 'Success probability metrics']
                    },
                    {
                      step: '03',
                      title: 'Analytics Deep Dive',
                      description: 'Explore detailed analytics to understand content trends and identify market opportunities.',
                      features: ['Advanced filtering options', 'Performance metrics comparison', 'Growth opportunity identification', 'Market trend analysis']
                    }
                  ].map((item, index) => (
                    <div key={index} className="group bg-netflix-black/50 p-8 rounded-2xl border border-gray-800/50 hover:border-netflix-red/30 transition-all duration-500 transform hover:scale-105">
                      <div className="flex items-center mb-6">
                        <div className="bg-netflix-red text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">
                          {item.step}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-netflix-red transition-colors">{item.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                      <div className="space-y-2">
                        {item.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 bg-netflix-red rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="animate-fadeIn">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-netflix-red to-red-600 p-3 rounded-2xl mr-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">Features Guide</h2>
                    <p className="text-gray-400">Comprehensive platform capabilities</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: 'Interactive Visualizations',
                      description: 'Dynamic charts and graphs with real-time data processing and responsive design.',
                      features: ['Recharts integration', 'Hover effects & tooltips', 'Mobile-responsive design', 'Real-time data updates']
                    },
                    {
                      title: 'ML-Powered Analytics',
                      description: 'Advanced machine learning models with enterprise-grade prediction capabilities.',
                      features: ['75-85% prediction accuracy', 'Real-time inference', 'Fallback systems', 'Model versioning']
                    },
                    {
                      title: 'Real-time Performance',
                      description: 'High-performance APIs with sub-200ms response times and 99.9% uptime.',
                      features: ['FastAPI backend', 'Async processing', 'Auto-scaling', 'Error recovery']
                    },
                    {
                      title: 'Enterprise Security',
                      description: 'Production-grade security with CORS support and enterprise authentication.',
                      features: ['CORS configuration', 'Rate limiting', 'Data encryption', 'Audit logging']
                    }
                  ].map((feature, index) => (
                    <div key={index} className="group bg-netflix-black/50 p-8 rounded-2xl border border-gray-800/50 hover:border-netflix-red/30 transition-all duration-500 transform hover:scale-105">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-netflix-red transition-colors">{feature.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                      <div className="space-y-2">
                        {feature.features.map((item, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 bg-netflix-red rounded-full mr-3"></div>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'api' && (
              <div className="animate-fadeIn">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-netflix-red to-red-600 p-3 rounded-2xl mr-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">API Documentation</h2>
                    <p className="text-gray-400">RESTful API endpoints and integration guide</p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-netflix-black/50 p-8 rounded-2xl border border-gray-800/50">
                    <h3 className="text-xl font-bold text-netflix-red mb-4">Base URL</h3>
                    <div className="bg-gray-900 p-4 rounded-xl border border-gray-700">
                      <code className="text-green-400 font-mono text-lg">
                        http://localhost:8002/api
                      </code>
                    </div>
                  </div>

                  <div className="bg-netflix-black/50 p-8 rounded-2xl border border-gray-800/50">
                    <h3 className="text-xl font-bold text-netflix-red mb-6">Available Endpoints</h3>
                    <div className="space-y-6">
                      {[
                        { method: 'GET', endpoint: '/summary', description: 'Returns comprehensive content statistics including total movies, TV shows, and top performing countries.' },
                        { method: 'GET', endpoint: '/genres', description: 'Provides detailed genre distribution data with content counts and performance metrics for each category.' },
                        { method: 'GET', endpoint: '/countries', description: 'Delivers country-wise content analysis including market penetration and regional performance insights.' },
                        { method: 'GET', endpoint: '/predict', description: 'Returns ML model predictions with success probabilities, confidence scores, and AI-generated strategic insights.' },
                        { method: 'GET', endpoint: '/recommendations', description: 'Provides data-driven strategic recommendations based on comprehensive analysis and ML predictions.' },
                        { method: 'GET', endpoint: '/health', description: 'System health check endpoint returning model status, data availability, and performance metrics.' }
                      ].map((api, index) => (
                        <div key={index} className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-netflix-red/30 transition-all duration-300">
                          <div className="flex items-center mb-3">
                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-4">
                              {api.method}
                            </span>
                            <code className="text-blue-400 font-mono text-lg">
                              {api.endpoint}
                            </code>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{api.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'faq' && (
              <div className="animate-fadeIn">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-netflix-red to-red-600 p-3 rounded-2xl mr-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
                    <p className="text-gray-400">Common questions about NetNova platform</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="group bg-netflix-black/50 border border-gray-800/50 rounded-2xl overflow-hidden hover:border-netflix-red/30 transition-all duration-300">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-netflix-red/5 transition-colors"
                      >
                        <h3 className="text-lg font-bold text-white group-hover:text-netflix-red transition-colors">{faq.question}</h3>
                        <svg 
                          className={`w-6 h-6 text-netflix-red transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 pb-6 animate-fadeIn">
                          <div className="border-t border-gray-700/50 pt-4">
                            <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-netflix-red/10 to-red-900/10 backdrop-blur-sm border border-netflix-red/20 rounded-3xl p-12 text-center">
              <div className="bg-netflix-red p-4 rounded-2xl w-20 h-20 mx-auto mb-8 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Need More Help?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our expert support team is here to help you maximize your NetNova experience.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a 
                  href="mailto:abhishekgiri1978@gmail.com" 
                  className="group bg-netflix-red text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <svg className="w-6 h-6 mr-3 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  Email Support
                </a>
                <a 
                  href="https://t.me/AbhishekGiri7" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-2 border-netflix-red text-netflix-red px-8 py-4 rounded-2xl font-bold text-lg hover:bg-netflix-red hover:text-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center"
                >
                  <svg className="w-6 h-6 mr-3 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Live Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;