# ZetaChain Universal App Starter

The ZetaChain Universal App Starter is a comprehensive web application that showcases the capabilities of building universal applications that work across all blockchains using ZetaChain. This project serves as a powerful demonstration of how developers can leverage ZetaChain's omnichain infrastructure to build truly universal blockchain applications.

To learn more about ZetaChain, check out the [developer docs](https://docs.zetachain.com).

## Key Features:

1. **Universal Wallet Management**: Create, view, and manage wallets that work across all connected blockchains.

2. **Cross-Chain Address Handling**: Generate and manage addresses that can interact with multiple blockchain networks seamlessly.

3. **Omnichain Balance Tracking**: Real-time balance display across all connected chains and cryptocurrencies.

4. **Multi-Chain Faucet Integration**: Access to testnet faucets across multiple blockchain networks for development and testing.

5. **Universal Transfer Functionality**: Cross-chain transfers and messaging capabilities powered by ZetaChain.

6. **Cross-Chain Contract Interaction**: Deploy and interact with universal smart contracts that work across all blockchains.

7. **Omnichain Network Support**: Native support for all major blockchain networks through ZetaChain's universal infrastructure.

8. **Modern Universal UI**: A sleek, responsive interface designed for the multi-chain future.

9. **ZetaChain Integration**: Full integration with ZetaChain's omnichain protocols and developer tools.

This project is ideal for developers looking to build universal applications that work across all blockchains. It provides a solid foundation for creating truly omnichain applications using ZetaChain's infrastructure.

By exploring and using the ZetaChain Universal App Starter, developers can gain hands-on experience with:
- Cross-chain smart contract development
- Universal wallet integration
- Omnichain messaging and transfers
- Multi-chain dApp architecture
- ZetaChain protocol integration

Whether you're building a DeFi platform, a cross-chain NFT marketplace, or any other universal blockchain application, this starter provides the foundation for your omnichain development journey.

***The application does not have built-in authentication. Ensure that you add an authentication layer before deploying it to production.***

## Getting Started
### Get your ZetaChain API keys
Go to https://portal.cdp.coinbase.com/ and create an API key for blockchain interactions, or set up your ZetaChain node connection.

### Create an encryption key

This encryption key is used to secure your private keys stored in the database. You can generate one using the following command:

```bash
openssl rand -hex 32
```

### Setup your environment variables

Create a `.env` file in the root of the project with the following:

```bash
CDP_API_KEY_NAME="your-api-key-name"
CDP_API_KEY_SECRET="your-api-key-secret"
ENCRYPTION_KEY="your-encryption-key"
POSTGRES_URL="postgresql://admin:password@localhost:5432/seeds"
NEXT_PUBLIC_CDP_PROJECT_ID="your-cdp-project-id"
ZETACHAIN_NETWORK="testnet" # or "mainnet"
ZETACHAIN_RPC_URL="your-zetachain-rpc-url"
```

### Run the Postgres DB

```bash
npm run db:up
```

If you don't see database logs, double check Postgres is installed:

```bash
docker run --name test-postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=seeds -e POSTGRES_USER=admin -p 5432:5432 postgres:14
```

Set up the Prisma schema in the DB

```bash
npm install
npm run db:setup
```

### Run the app

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start building your universal app by modifying the components and adding your cross-chain logic.

## ZetaChain Features

### Cross-Chain Messaging
Send messages and data between any connected blockchain networks.

### Universal Smart Contracts
Deploy contracts that can interact with multiple blockchains simultaneously.

### Omnichain Tokens
Create and manage tokens that exist across all supported networks.

### Multi-Chain Faucets
Access testnet tokens from multiple blockchain networks for development.

## Learn More

To learn more about ZetaChain and universal app development:

- [ZetaChain Documentation](https://docs.zetachain.com) - comprehensive guides and API reference
- [ZetaChain Examples](https://github.com/zeta-chain/example-contracts) - example universal contracts
- [ZetaChain Discord](https://discord.gg/zetachain) - community support and discussions

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fzetachain%2Funiversal-app-starter&env=CDP_API_KEY_NAME,CDP_API_KEY_SECRET,NEXT_PUBLIC_CDP_PROJECT_ID,ENCRYPTION_KEY,ZETACHAIN_NETWORK&envDescription=Set%20up%20your%20ZetaChain%20universal%20app%20environment)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Contributing

We welcome contributions to the ZetaChain Universal App Starter! Please see our contributing guidelines and join our community on Discord.