import React, { useState } from 'react';
import { Droplets, Gift, ExternalLink } from 'lucide-react';

interface FaucetProps {
  isConnected: boolean;
}

const testnetTokens = [
  { symbol: 'ETH', name: 'Ethereum Testnet ETH', amount: '0.1', network: 'Sepolia' },
  { symbol: 'ZETA', name: 'ZetaChain Testnet ZETA', amount: '10', network: 'Athens Testnet' },
  { symbol: 'BNB', name: 'BSC Testnet BNB', amount: '0.1', network: 'BSC Testnet' },
  { symbol: 'MATIC', name: 'Polygon Testnet MATIC', amount: '0.5', network: 'Mumbai' },
];

export function Faucet({ isConnected }: FaucetProps) {
  const [claimingToken, setClaimingToken] = useState<string | null>(null);
  const [claimedTokens, setClaimedTokens] = useState<string[]>([]);

  const handleClaim = async (tokenSymbol: string) => {
    if (!isConnected) return;
    
    setClaimingToken(tokenSymbol);
    
    setTimeout(() => {
      setClaimedTokens(prev => [...prev, tokenSymbol]);
      setClaimingToken(null);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Testnet Faucet</h3>
        <p className="text-gray-400">Get free testnet tokens for development and testing</p>
      </div>

      <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white text-xs font-bold">!</span>
          </div>
          <div>
            <h4 className="font-medium text-blue-300 mb-1">Important Notice</h4>
            <p className="text-sm text-blue-200">
              Testnet tokens have no real value and are only for development purposes. 
              You can claim tokens once every 24 hours per network.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {testnetTokens.map((token) => {
          const isClaiming = claimingToken === token.symbol;
          const isClaimed = claimedTokens.includes(token.symbol);
          
          return (
            <div key={token.symbol} className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{token.symbol}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{token.name}</h4>
                    <p className="text-sm text-gray-400">{token.network}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-white">{token.amount}</div>
                  <div className="text-sm text-gray-400">{token.symbol}</div>
                </div>
              </div>
              
              <button
                onClick={() => handleClaim(token.symbol)}
                disabled={!isConnected || isClaiming || isClaimed}
                className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isClaimed
                    ? 'bg-green-600/30 border border-green-500/50 text-green-300'
                    : 'bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isClaiming ? (
                  <>
                    <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>Claiming...</span>
                  </>
                ) : isClaimed ? (
                  <>
                    <Gift size={16} />
                    <span>Claimed!</span>
                  </>
                ) : (
                  <>
                    <Droplets size={16} />
                    <span>Claim {token.symbol}</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <div className="flex items-center space-x-3 mb-4">
          <ExternalLink className="text-orange-400" size={24} />
          <h4 className="text-xl font-semibold text-white">Additional Resources</h4>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://labs.zetachain.com/faucet"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-200"
          >
            <div>
              <h5 className="font-medium text-white">ZetaChain Labs Faucet</h5>
              <p className="text-sm text-gray-400">Official ZetaChain testnet faucet</p>
            </div>
            <ExternalLink size={16} className="text-gray-400" />
          </a>
          
          <a
            href="https://docs.zetachain.com/developers/testnet"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-200"
          >
            <div>
              <h5 className="font-medium text-white">Testnet Documentation</h5>
              <p className="text-sm text-gray-400">Learn about ZetaChain testnets</p>
            </div>
            <ExternalLink size={16} className="text-gray-400" />
          </a>
        </div>
      </div>

      {!isConnected && (
        <div className="text-center">
          <p className="text-yellow-400">
            Please connect your wallet to claim testnet tokens
          </p>
        </div>
      )}
    </div>
  );
}