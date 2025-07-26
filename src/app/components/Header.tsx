import React from 'react';
import { ExternalLink, Github, Book } from 'lucide-react';

export function Header() {
  const links = [
    { href: 'https://docs.zetachain.com', label: 'Docs', icon: Book },
    { href: 'https://github.com/zeta-chain/example-contracts', label: 'Examples', icon: Github },
    { href: 'https://labs.zetachain.com/faucet', label: 'Faucet', icon: ExternalLink },
  ];

  return (
    <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">ZetaChain</h1>
              <p className="text-sm text-gray-400">Universal App Starter</p>
            </div>
          </div>
          
          <nav className="flex items-center space-x-6">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Icon size={16} />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}