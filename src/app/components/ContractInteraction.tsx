import React, { useState } from 'react';
import { Code, Send, Eye, Zap } from 'lucide-react';

interface ContractInteractionProps {
  isConnected: boolean;
}

export function ContractInteraction({ isConnected }: ContractInteractionProps) {
  const [message, setMessage] = useState('Hello, ZetaChain!');
  const [isLoading, setIsLoading] = useState(false);
  const [lastTx, setLastTx] = useState<string | null>(null);

  const handleSetMessage = async () => {
    if (!isConnected) return;
    
    setIsLoading(true);
    
    // Simulate transaction
    setTimeout(() => {
      const mockTx = '0x' + Math.random().toString(16).substr(2, 64);
      setLastTx(mockTx);
      setIsLoading(false);
    }, 3000);
  };

  const contractInfo = {
    name: 'Hello Universal Contract',
    address: '0x1234...5678',
    network: 'ZetaChain Testnet',
    version: '1.0.0'
  };

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <div className="flex items-center space-x-3 mb-4">
            <Code className="text-purple-400" size={24} />
            <h3 className="text-xl font-semibold text-white">Contract Details</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Name:</span>
              <span className="text-white font-mono">{contractInfo.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Address:</span>
              <span className="text-white font-mono">{contractInfo.address}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Network:</span>
              <span className="text-white">{contractInfo.network}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Version:</span>
              <span className="text-white">{contractInfo.version}</span>
            </div>
          </div>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <div className="flex items-center space-x-3 mb-4">
            <Zap className="text-teal-400" size={24} />
            <h3 className="text-xl font-semibold text-white">Quick Stats</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">12</div>
              <div className="text-sm text-gray-400">Total Calls</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400">3</div>
              <div className="text-sm text-gray-400">Chains</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">0.001</div>
              <div className="text-sm text-gray-400">Avg Gas (ETH)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">99%</div>
              <div className="text-sm text-gray-400">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <div className="flex items-center space-x-3 mb-6">
          <Send className="text-orange-400" size={24} />
          <h3 className="text-xl font-semibold text-white">Interact with Contract</h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Set Message
            </label>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your message..."
            />
          </div>

          <button
            onClick={handleSetMessage}
            disabled={!isConnected || isLoading}
            className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                <span>Sending Transaction...</span>
              </>
            ) : (
              <>
                <Send size={16} />
                <span>Set Message</span>
              </>
            )}
          </button>

          {!isConnected && (
            <p className="text-sm text-yellow-400 text-center">
              Please connect your wallet to interact with the contract
            </p>
          )}
        </div>
      </div>

      {lastTx && (
        <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-3">
            <Eye className="text-green-400" size={20} />
            <h4 className="text-lg font-medium text-green-300">Transaction Successful!</h4>
          </div>
          <p className="text-sm text-gray-300 mb-2">Transaction Hash:</p>
          <p className="font-mono text-sm text-green-400 break-all">{lastTx}</p>
        </div>
      )}
    </div>
  );
}