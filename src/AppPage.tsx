import React, { useState } from 'react';
import { Wallet, ExternalLink, Menu, X } from 'lucide-react';
import ConnectWalletButton from './pontem_wallet/ConnectWalletButton';

interface AppPageProps {
  onBack: () => void;
}

type TabType = 'peel' | 'swap' | 'liquidity' | 'stake' | 'portfolio';

const AppPage: React.FC<AppPageProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<TabType>('peel');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getTabDisplayName = (tab: TabType) => {
    const names = {
      peel: 'PEEL',
      swap: 'Swap',
      liquidity: 'Liquidity Providing',
      stake: 'Stake',
      portfolio: 'Portfolio'
    };
    return names[tab];
  };

  const getMobileTabDisplayName = (tab: TabType) => {
    const names = {
      peel: 'PEEL',
      swap: 'Swap',
      liquidity: 'LP',
      stake: 'Stake',
      portfolio: 'Portfolio'
    };
    return names[tab];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 via-orange-400 to-yellow-200 overflow-x-hidden">
      {/* Readability overlay */}
      <div className="pointer-events-none fixed inset-0 bg-black/30" />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-2 md:space-x-6">
            <div className="flex items-center space-x-2">
              <img 
                src="/peelswap_logo.png" 
                alt="PeelSwap Logo" 
                className="w-8 h-8 md:w-10 md:h-10"
              />
              <span className="text-lg md:text-2xl font-bold bg-gradient-to-r from-orange-300 via-amber-200 to-yellow-100 bg-clip-text text-transparent">
                PeelSwap
              </span>
            </div>
            
            {/* Desktop Navigation - Show PEEL, Swap and More button */}
            <div className="hidden lg:flex items-center space-x-1">
              {(['peel', 'swap'] as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all duration-300 text-sm ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {getTabDisplayName(tab)}
                </button>
              ))}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="px-3 py-1 rounded-lg font-semibold text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm flex items-center space-x-1"
              >
                <span>More</span>
                {isMobileMenuOpen ? <X size={14} className="text-white" /> : <Menu size={14} className="text-white" />}
              </button>
            </div>
            
            {/* Tablet Navigation - Show fewer tabs */}
            <div className="hidden sm:flex lg:hidden items-center space-x-1">
              {(['peel', 'swap'] as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all duration-300 text-sm ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {getTabDisplayName(tab)}
                </button>
              ))}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="px-3 py-1 rounded-lg font-semibold text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm"
              >
                More
              </button>
            </div>
          </div>

          {/* Mobile Tab Selector */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center space-x-2 min-w-[120px] justify-between"
            >
              <span className="text-white font-medium text-sm truncate">
                {getMobileTabDisplayName(activeTab)}
              </span>
              {isMobileMenuOpen ? <X size={16} className="text-white flex-shrink-0" /> : <Menu size={16} className="text-white flex-shrink-0" />}
            </button>
          </div>

          {/* Wallet Connection */}
          <div className="flex items-center space-x-2 md:space-x-4 min-h-[40px] md:min-h-[48px]">
            <ConnectWalletButton />
          </div>
        </div>
        
        {/* Mobile Menu Dropdown - All tabs */}
        {isMobileMenuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-black/40 backdrop-blur-md border-b border-white/10">
            <div className="px-4 py-3 space-y-2">
              {(['peel', 'swap', 'liquidity', 'stake', 'portfolio'] as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {getTabDisplayName(tab)}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Desktop/Tablet Menu Dropdown - Only hidden tabs */}
        {isMobileMenuOpen && (
          <div className="hidden sm:block absolute top-full left-0 right-0 bg-black/40 backdrop-blur-md border-b border-white/10">
            <div className="px-4 py-3 space-y-2">
              {(['liquidity', 'stake', 'portfolio'] as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {getTabDisplayName(tab)}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16 md:pt-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {activeTab === 'peel' && (
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-8">PEEL Token</h1>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 max-w-2xl mx-auto mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">PEEL Token Information</h2>
                <p className="text-white/80 mb-6">
                  PEEL token unlocks advanced autotrading capabilities and gives you access to sophisticated trading strategies.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-300">1000 PEEL</div>
                    <div className="text-white/70">per 1 CEDRA</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-amber-300">Auto Trading</div>
                    <div className="text-white/70">AI-powered bots</div>
                  </div>
                </div>
              </div>
              
              {/* Wallet Demo Component */}
              <ConnectWalletButton />
            </div>
          )}


          {activeTab === 'swap' && (
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-8">Token Swap</h1>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold text-white mb-4">Swap Your Tokens</h2>
                <p className="text-white/80 mb-6">
                  Exchange tokens instantly with the best rates and minimal slippage.
                </p>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-lg font-semibold text-white mb-2">From</div>
                    <div className="text-white/70">Select token to swap from</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-lg font-semibold text-white mb-2">To</div>
                    <div className="text-white/70">Select token to swap to</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'liquidity' && (
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-8">Liquidity Pools</h1>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold text-white mb-4">Provide Liquidity</h2>
                <p className="text-white/80 mb-6">
                  Add liquidity to pools and earn trading fees from swaps.
                </p>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-lg font-semibold text-white mb-2">Add Liquidity</div>
                    <div className="text-white/70">Deposit tokens to earn fees</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-lg font-semibold text-white mb-2">Remove Liquidity</div>
                    <div className="text-white/70">Withdraw your tokens and rewards</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'stake' && (
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-8">Staking</h1>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold text-white mb-4">Stake Your Tokens</h2>
                <p className="text-white/80 mb-6">
                  Stake your tokens to earn rewards and support the network.
                </p>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-lg font-semibold text-white mb-2">Stake PEEL</div>
                    <div className="text-white/70">Earn rewards by staking PEEL tokens</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-lg font-semibold text-white mb-2">Unstake</div>
                    <div className="text-white/70">Withdraw your staked tokens</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'portfolio' && (
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-8">Portfolio</h1>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold text-white mb-4">Your Portfolio</h2>
                <p className="text-white/80 mb-6">
                  Track your tokens, liquidity positions, and staking rewards.
                </p>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-lg font-semibold text-white mb-2">Token Balances</div>
                    <div className="text-white/70">View all your token holdings</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-lg font-semibold text-white mb-2">Liquidity Positions</div>
                    <div className="text-white/70">Track your LP positions</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AppPage;
