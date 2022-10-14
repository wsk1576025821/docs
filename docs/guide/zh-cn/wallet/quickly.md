# 快速上手 BitKeep 钱包

## EVM

:::tip 提示
前提条件：你已经用连接到MetaMask的相同协议连接到Chrome扩展钱包（包括MetaMask）。
:::

**连接到BitKeep钱包的最简单方法是什么？**

检查提供者是否是`window.bitkeep.ethereum`，如果不是，请用BitKeep独家提供者`window.bitkeep.ethereum`替换。

例如:

```JS
function getProvider() {
  const provider = window.bitkeep && window.bitkeep.ethereum;
  if (!provider) {
    return window.open('https://bitkeep.com/en/download?type=2');
  }
  return provider;
}
```

**注意**

一旦检测到地址和网络被改变，别忘了删除监听器。

例如:

```JS
//Bitkeep used
const BitKeepProvider = window.bitkeep && window.bitkeep.ethereum;

await BitKeepProvider.request({ method: 'eth_requestAccounts' });

BitKeepProvider.removeAllListeners();
BitKeepProvider.on('accountsChanged', async (accounts) => {
   console.log("accounts changed")
});
BitKeepProvider.on('chainChanged', async (chainId) => {
   console.log("chainId changed")
});

//MetaMask used
const MetaMaskProvider = window.ethereum;
//BitKeepProvider.removeAllListeners();
MetaMaskProvider.request({ method: 'eth_requestAccounts' });
MetaMaskProvider.removeAllListeners();
MetaMaskProvider.on('accountsChanged', async (accounts) => {
  console.log("accounts changed")
});
MetaMaskProvider.on('chainChanged', async (chainId) => {
  console.log("chainId changed")
});
```

## Solana

:::tip 提示
前提条件：你已经用连接到MathWallet的相同协议连接到Chrome扩展钱包。
:::

**连接到BitKeep钱包的最简单方法是什么？**

检查提供者是否是`window.bitkeep.solana`，如果不是，请用BitKeep独家提供者`window.bitkeep.solana`替换。

例如:

```JS
function getProvider() {
  const provider = window.bitkeep && window.bitkeep.solana;
  if (!provider) {
    window.open('https://bitkeep.com/en/download?type=2');
    throw  `Please guide users to download from our official website`
  }
  return provider;
}
```

## Aptos

:::tip 提示
前提条件：你已经连接到Chrome扩展的钱包，与petra的协议相同。
:::

**连接到BitKeep钱包的最简单方法是什么？**

检查提供者是否是`window.bitkeep.aptos`，如果不是，请用BitKeep独家提供者`window.bitkeep.aptos`替换。

例如:

```JS
function getAptosWallet() {
  const provider = window.bitkeep && window.bitkeep.aptos;
  if (!provider) {
    window.open('https://bitkeep.com/download?type=2');
    throw 'Please go to  https://bitkeep.com/download?type=2  to download!!';
  }
  return provider;
}
```

## 其他

如果开发者没有使用上述标准连接到其他Chrome扩展钱包，请参考其他主网API的访问机制或第三方npm包连接到BitKeep Chrome扩展钱包。

### API

- [EVM](/guide/wallet/ethereum.html)
- [Solana](/guide/wallet/solana.html)
- [Tron](/guide/wallet/tron.html)
- [Aptos](/guide/wallet/aptos.html)

### 支持的第三方 NPM 包

**EVM**

- [web3js](https://www.npmjs.com/package/web3)
- [ethers](https://www.npmjs.com/package/ethers)
- [bitkeep-web3modal](https://www.npmjs.com/package/bitkeep-web3modal)

**Solana**

- [solana-web3.js](https://solana-labs.github.io/solana-web3.js/)
- [@solana/wallet-adapter-react](https://www.npmjs.com/package/@solana/wallet-adapter-react)
