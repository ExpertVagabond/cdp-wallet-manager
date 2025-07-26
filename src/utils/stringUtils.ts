export function formatNetworkId(networkId: string): string {
  const formatted = networkId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  // Special formatting for ZetaChain networks
  if (networkId.includes('zetachain')) {
    return formatted.replace('Zetachain', 'ZetaChain');
  }
  
  return formatted;
}