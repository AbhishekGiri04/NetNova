import SummaryCards from '../components/SummaryCards';
import GenreChart from '../components/Charts/GenreChart';
import CountryChart from '../components/Charts/CountryChart';
import MLInsights from '../components/MLInsights';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-netflix-black via-gray-900 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-netflix-red/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative p-6">
        <div className="max-w-7xl mx-auto">
          {/* Modern Header */}
          <header className="mb-12 text-center">
            <div className="inline-flex items-center bg-netflix-red/10 backdrop-blur-sm border border-netflix-red/20 rounded-full px-6 py-2 mb-6">
              <svg className="w-5 h-5 text-netflix-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-netflix-red font-semibold text-sm">Live Analytics Dashboard</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              Netflix Content 
              <span className="bg-gradient-to-r from-netflix-red to-red-400 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore Netflix's content trends and analytics with real-time data visualization
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-netflix-red to-red-400 mx-auto mt-6 rounded-full"></div>
          </header>

          {/* Enhanced Summary Cards */}
          <div className="mb-12">
            <SummaryCards />
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-netflix-gray/50 to-black/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 hover:border-netflix-red/30 transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-2xl mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Genre Distribution</h3>
                  <p className="text-gray-400">Content breakdown by genre categories</p>
                </div>
              </div>
              <GenreChart />
            </div>

            <div className="bg-gradient-to-br from-netflix-gray/50 to-black/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 hover:border-netflix-red/30 transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-green-500 to-teal-600 p-3 rounded-2xl mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Global Distribution</h3>
                  <p className="text-gray-400">Top countries by content volume</p>
                </div>
              </div>
              <CountryChart />
            </div>
          </div>

          {/* Enhanced ML Insights */}
          <div className="bg-gradient-to-br from-netflix-red/10 to-red-900/10 backdrop-blur-sm border border-netflix-red/20 rounded-3xl p-8">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-netflix-red to-red-600 p-4 rounded-2xl mr-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">AI Analysis Results</h2>
                <p className="text-gray-400 text-lg">Machine learning analysis and predictive recommendations</p>
              </div>
            </div>
            <MLInsights />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;