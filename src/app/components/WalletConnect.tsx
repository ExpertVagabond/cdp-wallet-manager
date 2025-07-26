import React, { useState } from 'react';
import { Wallet, Check, Loader } from 'lucide-react';

interface WalletConnectProps {
  isConnected: boolean;
  onConnect: (connected: boolean) => void;
}

export function WalletConnect({ isConnected, onConnect }: WalletConnectProps) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [address, setAddress] = useState('');

  const handleConnect = async () => {
    if (isConnected) {
      onConnect(false);
      setAddress('');
      return;
    }

    setIsConnecting(true);
    
    // Simulate wallet connection
    setTimeout(() => {
      const mockAddress = '0x' + Math.random().toString(16).substr(2, 40);
      setAddress(mockAddress);
      onConnect(true);
      setIsConnecting(false);
    }, 2000);
  };

  return (
    <div className="flex justify-center">
      <div className="bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <div className="flex items-center justify-center space-x-4">
          <div className={`w-3 h-3 rounded-full transition-colors duration-200 ${
            isConnected ? 'bg-green-400' : 'bg-gray-500'
          }`}></div>
          
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">Wallet Status</p>
            {isConnected ? (
              <p className="text-white font-mono text-sm">
                {address.slice(0, 6)}...{address.slice(-4)}
              </p>
            ) : (
              <p className="text-gray-300">Not Connected</p>
            )}
          </div>
          
          <button
            onClick={handleConnect}
            disabled={isConnecting}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              isConnected
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isConnecting ? (
              <>
                <Loader className="animate-spin" size={16} />
                <span>Connecting...</span>
              </>
            ) : isConnected ? (
              <>
                <Check size={16} />
                <span>Disconnect</span>
              </>
            ) : (
              <>
                <Wallet size={16} />
                <span>Connect Wallet</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}