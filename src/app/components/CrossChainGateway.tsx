import React, { useState } from 'react';
import { ArrowRightLeft, Coins, MessageSquare, Zap } from 'lucide-react';

interface CrossChainGatewayProps {
  isConnected: boolean;
}

const chains = [
  { id: 'ethereum', name: 'Ethereum', color: 'bg-blue-500' },
  { id: 'bsc', name: 'BSC', color: 'bg-yellow-500' },
  { id: 'polygon', name: 'Polygon', color: 'bg-purple-500' },
  { id: 'zetachain', name: 'ZetaChain', color: 'bg-teal-500' },
];

export function CrossChainGateway({ isConnected }: CrossChainGatewayProps) {
  const [fromChain, setFromChain] = useState('ethereum');
  const [toChain, setToChain] = useState('zetachain');
  const [transferType, setTransferType] = useState('token');
  const [amount, setAmount] = useState('1.0');
  const [message, setMessage] = useState('Hello from Ethereum!');
  const [isLoading, setIsLoading] = useState(false);

  const handleTransfer = async () => {
    if (!isConnected) return;
    
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Cross-Chain Gateway</h3>
        <p className="text-gray-400">Transfer tokens and messages across blockchains seamlessly</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <div className="flex items-center space-x-3 mb-6">
            <ArrowRightLeft className="text-purple-400" size={24} />
            <h4 className="text-xl font-semibold text-white">Transfer Setup</h4>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">Transfer Type</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setTransferType('token')}
                  className={`flex items-center justify-center space-x-2 p-3 rounded-lg border transition-all duration-200 ${
                    transferType === 'token'
                      ? 'bg-purple-600/30 border-purple-500 text-white'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <Coins size={16} />
                  <span>Token</span>
                </button>
                <button
                  onClick={() => setTransferType('message')}
                  className={`flex items-center justify-center space-x-2 p-3 rounded-lg border transition-all duration-200 ${
                    transferType === 'message'
                      ? 'bg-purple-600/30 border-purple-500 text-white'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <MessageSquare size={16} />
                  <span>Message</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">From Chain</label>
                <select
                  value={fromChain}
                  onChange={(e) => setFromChain(e.target.value)}
                  className="w-full px-3 py-2 bg-black/30 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {chains.map((chain) => (
                    <option key={chain.id} value={chain.id}>{chain.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">To Chain</label>
                <select
                  value={toChain}
                  onChange={(e) => setToChain(e.target.value)}
                  className="w-full px-3 py-2 bg-black/30 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {chains.map((chain) => (
                    <option key={chain.id} value={chain.id}>{chain.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {transferType === 'token' ? (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Amount (ETH)</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="0.0"
                  step="0.001"
                />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  rows={3}
                  placeholder="Enter your cross-chain message..."
                />
              </div>
            )}

            <button
              onClick={handleTransfer}
              disabled={!isConnected || isLoading}
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Zap size={16} />
                  <span>Initiate Transfer</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <div className="flex items-center space-x-3 mb-6">
            <Zap className="text-teal-400" size={24} />
            <h4 className="text-xl font-semibold text-white">Transfer Flow</h4>
          </div>

          <div className="space-y-4">
            {[
              { step: 1, title: 'Lock Assets', status: 'completed', desc: 'Assets locked on source chain' },
              { step: 2, title: 'ZetaChain Validation', status: isLoading ? 'active' : 'pending', desc: 'Cross-chain message validation' },
              { step: 3, title: 'Destination Mint', status: 'pending', desc: 'Assets minted on target chain' },
              { step: 4, title: 'Confirmation', status: 'pending', desc: 'Transaction confirmed' },
            ].map((item) => (
              <div key={item.step} className="flex items-start space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  item.status === 'completed' 
                    ? 'bg-green-500 text-white' 
                    : item.status === 'active'
                    ? 'bg-blue-500 text-white animate-pulse'
                    : 'bg-gray-600 text-gray-300'
                }`}>
                  {item.step}
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-white">{item.title}</h5>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {!isConnected && (
            <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
              <p className="text-sm text-yellow-400 text-center">
                Connect your wallet to start cross-chain transfers
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}