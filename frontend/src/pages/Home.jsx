import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Home() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch('https://netnova-dev.onrender.com/api/summary')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen w-screen bg-netflix-black overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-screen h-screen bg-gradient-to-br from-netflix-red via-red-700 to-black">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-netflix-red/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative w-full px-4 sm:px-6 text-center flex flex-col justify-center items-center h-full -mt-16">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-white/20 to-netflix-red/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold border border-white/20 shadow-lg">
              🚀 Enterprise Content Intelligence Platform
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              NetNova
            </span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-netflix-red to-red-400 bg-clip-text text-transparent">
              Content Intelligence
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-10 leading-relaxed max-w-4xl">
            Transform your content strategy with <span className="text-white font-semibold">AI-powered analytics</span>, 
            predictive insights, and data-driven decisions for streaming platforms and content creators.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
            <Link 
              to="/dashboard" 
              className="group bg-white text-netflix-red px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center min-w-[220px] border-2 border-transparent hover:border-gray-200"
            >
              Explore Analytics
            </Link>
            <Link 
              to="/predictions" 
              className="group bg-gradient-to-r from-netflix-red to-red-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center min-w-[220px]"
            >
              AI Predictions
            </Link>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-300 font-medium">
              Enterprise-grade ML models • 7,789+ Netflix titles analyzed • 75-85% prediction accuracy
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {stats && (
        <div className="w-screen py-20 bg-gradient-to-b from-netflix-gray to-netflix-black relative">
          <div className="w-full px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Platform Overview</h2>
              <div className="w-24 h-1 bg-netflix-red mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { value: stats.total_content?.toLocaleString(), label: 'Total Content Analyzed', icon: '📄' },
                { value: stats.total_movies?.toLocaleString(), label: 'Movies', icon: '🎬' },
                { value: stats.total_shows?.toLocaleString(), label: 'TV Shows', icon: '📺' },
                { value: '50+', label: 'Countries Analyzed', icon: '🌍' }
              ].map((stat, index) => (
                <div key={index} className="group bg-gradient-to-br from-netflix-gray to-black p-8 rounded-3xl text-center hover:from-netflix-red/10 hover:to-red-900/20 transition-all duration-500 transform hover:scale-105 border border-gray-800 hover:border-netflix-red/50">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">{stat.icon}</div>
                  <div className="text-5xl font-black text-netflix-red mb-3 group-hover:text-white transition-colors">{stat.value}</div>
                  <div className="text-gray-400 font-medium group-hover:text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      <div className="w-screen py-20 relative">
        <div className="w-full px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-xl text-gray-400">Discover powerful tools designed to revolutionize your content strategy</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/>
                  </svg>
                ),
                title: 'Advanced Analytics',
                description: 'Deep dive into content performance, genre trends, and market analysis with interactive visualizations.',
                gradient: 'from-blue-500 to-purple-600'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                ),
                title: 'AI Predictions',
                description: 'Machine learning models predict content success rates and provide strategic recommendations.',
                gradient: 'from-netflix-red to-red-600'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                  </svg>
                ),
                title: 'Global Insights',
                description: 'Analyze content performance across different countries and identify expansion opportunities.',
                gradient: 'from-green-500 to-teal-600'
              }
            ].map((feature, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-netflix-gray to-black p-10 rounded-3xl hover:from-netflix-red/5 hover:to-red-900/10 transition-all duration-500 transform hover:scale-105 border border-gray-800 hover:border-netflix-red/30">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:animate-pulse`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-netflix-red transition-colors">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform Capabilities */}
      <div className="w-screen py-20">
        <div className="w-full px-4 sm:px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Platform Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '📈', title: 'Real-time Analytics', desc: 'Live data processing with <200ms response times', link: '/dashboard' },
              { icon: '🚀', title: 'Market Intelligence', desc: 'Advanced market analysis and competitive insights', link: '/analytics' },
              { icon: '🧠', title: 'AI Predictions', desc: 'ML-powered content success predictions', link: '/predictions' },
              { icon: '🏢', title: 'Business Intelligence', desc: 'Strategic insights for $100M+ decisions', link: '/about' }
            ].map((item, index) => (
              <Link key={index} to={item.link} className="group bg-netflix-gray p-8 rounded-3xl hover:bg-netflix-red/10 transition-all duration-500 transform hover:scale-105 border border-gray-800 hover:border-netflix-red/30">
                <div className="text-5xl mb-4 group-hover:animate-bounce">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-netflix-red transition-colors">{item.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-screen py-24 bg-gradient-to-r from-netflix-red via-red-700 to-black relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative w-full px-4 sm:px-6 text-center">
          <h2 className="text-5xl font-black text-white mb-6">Ready to Transform Your Content Strategy?</h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Join thousands of content strategists using data-driven insights to make better decisions and drive streaming success.
          </p>
          <Link 
            to="/dashboard" 
            className="group inline-flex items-center bg-white text-netflix-red px-12 py-5 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-2xl"
          >
            <span>Start Analyzing Now</span>
            <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;