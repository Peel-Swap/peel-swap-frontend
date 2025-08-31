import { Github, Twitter, ExternalLink, Zap, Bot } from 'lucide-react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center font-bold text-lg">
              P
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              PeelSwap
            </span>
          </div>
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
            <span>Open App</span>
            <ExternalLink size={16} />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight mb-8">
            PeelSwap is a robust DEX
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Experience unparalleled reliability and cutting-edge innovation in decentralized trading on the Cedra blockchain
          </p>
          <div className="flex justify-center space-x-4">
            <div className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">
              Secure
            </div>
            <div className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">
              Fast
            </div>
            <div className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">
              Reliable
            </div>
          </div>
        </div>
      </section>

      {/* PEEL Token Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent leading-tight mb-8">
            Powered by PEEL token
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            PEEL token unlocks advanced autotrading capabilities, giving you access to sophisticated trading strategies and automated portfolio management
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Bot size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Smart Autotrading</h3>
              <p className="text-gray-400">Access AI-powered trading bots that execute strategies 24/7 with PEEL token</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-pink-400/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-pink-400 mb-4">Instant Execution</h3>
              <p className="text-gray-400">Lightning-fast trade execution with minimal slippage and maximum efficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-600 bg-clip-text text-transparent leading-tight mb-8">
            Our Partnerships
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-16">
            PeelSwap is built on cutting-edge technology and powered by industry-leading partners
          </p>
          
          {/* Auto-moving carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-16 items-center">
              {/* First set of logos */}
              <a
                href="https://cedra.network/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 group"
              >
                <div className="w-48 h-24 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                  <span className="text-2xl font-bold text-cyan-400">Cedra Network</span>
                </div>
              </a>
              
              <a
                href="https://aimpact.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 group"
              >
                <div className="w-48 h-24 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-purple-400/50 transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                  <span className="text-2xl font-bold text-purple-400">AImpact</span>
                </div>
              </a>

              {/* Duplicate set for seamless loop */}
              <a
                href="https://cedra.network/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 group"
              >
                <div className="w-48 h-24 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                  <span className="text-2xl font-bold text-cyan-400">Cedra Network</span>
                </div>
              </a>
              
              <a
                href="https://aimpact.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 group"
              >
                <div className="w-48 h-24 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-purple-400/50 transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                  <span className="text-2xl font-bold text-purple-400">AImpact</span>
                </div>
              </a>

              {/* Third set for extra smoothness */}
              <a
                href="https://cedra.network/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 group"
              >
                <div className="w-48 h-24 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                  <span className="text-2xl font-bold text-cyan-400">Cedra Network</span>
                </div>
              </a>
              
              <a
                href="https://aimpact.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 group"
              >
                <div className="w-48 h-24 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-purple-400/50 transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                  <span className="text-2xl font-bold text-purple-400">AImpact</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent leading-tight mb-8">
            Get Started Today
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Join thousands of traders already using PeelSwap for seamless, secure, and efficient decentralized trading
          </p>
          
          <div className="mb-12">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-12 py-4 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-3 mx-auto">
              <span>Open App</span>
              <ExternalLink size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">10K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">$50M+</div>
              <div className="text-gray-400">Volume Traded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/20 backdrop-blur-md border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center font-bold">
              P
            </div>
            <span className="text-lg font-semibold">PeelSwap</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/Peel-Swap"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://x.com/PeelSwap"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
