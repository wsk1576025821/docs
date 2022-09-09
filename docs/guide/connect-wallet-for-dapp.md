# Connect Wallet 

Welcome to the developer documentation for BitKeep Wallet. The purpose of this document is to explain how to build a DApp using the BitKeep Wallent.

You can find the latest version of BitKeep Wallet on our  [official website](https://bitkeep.com)
 
 - [IOS Download](https://bitkeep.com/download?type=1&theme=dark)
 - [Android Download](https://bitkeep.com/download?type=0&theme=dark)
 - [Chrome Extension](https://bitkeep.com/download?type=2&theme=dark)
# Integrate

Once the BitKeep is installed and running (make sure to backup your Secret Recovery Phrase), you should find that the new browser tab ```window.bitkeep``` has an available object in the developer console. This is how your website interacts with BikKeep Wallet.

In order to facilitate special detection, the global object is attached with the `isBitKeep` attribute.

<img src='../images/connect/isBitKeep.jpg' width='400px'/>


## EVM
#### Introduction
You can refer a third-party base about Web3.0 login to support TokenPocket Extension quickly, such as: [bitkeep-web3modal](https://github.com/bitkeepwallet/bitkeep-web3modal)[Publishing] , [wagmi-demo](https://github.com/bitkeepwallet/download/tree/example/example/eth/wagmi-bitkeep-react)[Publishing]


```js

  //npm install bitkeep-web3modal
  import web3modal from "bitkeep-web3modal"
   const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions:{
        bitkeep: {  
          package: true
        },
        walletconnect: {
          display: {
            logo: "data:image/gif;base64,INSERT_BASE64_STRING",
            name: "Mobile",
            description: "Scan qrcode with your mobile wallet"
          },
          package: WalletConnectProvider,
          options: {
            infuraId: "INFURA_ID" // required
          }
        }
    } // required
  });
```
We provide a [Simple demo](https://github.com/bitkeepwallet/download/blob/example/example/eth/dapp/index.html).  You can also use third-party libraries in conjunction with `window.bitkeep.ethereum`, [web3js](https://www.npmjs.com/package/web3) [ethers](https://www.npmjs.com/package/ethers)... 

Quickly support bitkeep Wallet  If the Other wallet is already available.

  - MetaMask 

    If the MetaMask Wallet  is already available.  You can replace `window.ethereum` with  `window.bitkeep.ethereum` as a provider.    

#### Detect if BitKeep is installed, an application should check for an additional isBitKeep flag 
To verify if the browser is running Bitkeep, copy and paste the code snippet below in the developer console of your web browser:

```js
const isBitKeepInstalled = window.isBitKeep && window.bitkeep.ethereum;
```

#### Provider

```js
function getProvider() {
  const provider = window.bitkeep && window.bitkeep.ethereum;
  if (!provider) {
    return window.open('https://bitkeep.com/download?type=0&theme=light');
  }
  return provider;
}
```

#### eth_requestAccounts(request authorization to connect)

```js
//if used injected
  const Provider = getProvider();

  const accounts = await Provider.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];  

  //if used web3
  import Web3 from "web3"
  const accounts = await Provider.request({ method: 'eth_requestAccounts' });
  const web3 = new Web3(Provider);
  const [address] = await web3.eth.getAccounts(); // address
  const chainId = await web3.eth.getChainId(); // chainId
```

#### Event listeners

used [eventemitter3](https://www.npmjs.com/package/eventemitter3)

```js
  const Provider = getProvider();
  Provider.removeAllListeners();
  Provider.on('accountsChanged', ([address]) => {
    alert('address changed');
  });
  Provider.on('chainChanged', async (chainId) => {
    alert('chainid changed');
  });
```

#### sign

https://github.com/MetaMask/eth-sig-util

#### sendTransaction(Transfer)

```js
  const Provider = getProvider();
  const transactionParameters = {
    nonce: '0x00', // ignored by Bitkeep
    gasPrice: '0x09184e72a000', // customizable by user during Bitkeep confirmation.
    gas: '0x2710', // customizable by user during Bitkeep confirmation.
    to: '0x0000000000000000000000000000000000000000', // Required except during contract publications.
    from: Provider.selectedAddress, // must match user's active address.
    value: '0x00', // Only required to send ether to the recipient from the initiating external account.
    data:
      '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
    chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by Bitkeep.
  };

  // txHash is a hex string
  // As with any RPC call, it may throw an error
  const txHash = await Provider.request({
    method: 'eth_sendTransaction',
    params: [transactionParameters],
  });

  // if used web3
  const accounts = await Provider.request({ method: 'eth_requestAccounts' });
  const web3 = new Web3(Provider);
  const result = await web3.eth.sendTransaction({
    from: Provider.selectedAddress,
    to: '0x0000000000000000000000000000000000000000',
    value: web3.utils.toWei('1', 'ether'),
  });
```

#### Using open source libraries

if you have problems with third-party libraries that cannot be solved, you can c [Contact us](https://bitkeep.com/about#Contact_us).

## Tron

We provide [Simple demo](https://github.com/bitkeepwallet/download/tree/example/example/tron/dapp) and are compatible with [tronlink dapp](https://developers.tron.network/docs/dapp-integrate-with-tronlink-introduction).

### isInstalled

```js
const isBitKeepInstalled = window.tronLink && window.isBitKeep;
```

#### eth_requestAccounts(request authorization to connect)

```js
  try {
    await tronLink.request({ method: 'tron_requestAccounts' });
    const address = tronWeb.defaultAddress.base58;
    const balance = await tronWeb.trx.getBalance(address);
  } catch {}
```

#### connected

```js
window.tronWeb.ready;
```

#### sendTransaction(Transfer)

```js
  var tronweb = window.tronWeb;
  var tx = await tronweb.transactionBuilder.sendTrx(
    'TW8u1VSwbXY7o7H9kC8HmCNTiSXvD69Uiw',
    1000000,
    tronWeb.defaultAddress.base58
  );
  var signedTx = await tronweb.trx.sign(tx);
  var broastTx = await tronweb.trx.sendRawTransaction(signedTx);
  console.log(broastTx);
  console.log(broastTx.txid);

  //Token
  let decimal = 18;
  let Contract = await tronWeb
    .contract()
    .at('TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7'); //WIN
  const decimalCall = Contract.decimals || Contract.DECIMALS;
  if (decimalCall) {
    decimal = await decimalCall().call();
  }
  let broastTx = await Contract.transfer(
    'TW8u1VSwbXY7o7H9kC8HmCNTiSXvD69Uiw',
    // "0xde0b6b3a7640000"
    tronWeb.toHex(2 * Math.pow(10, decimal))
  )
    .send
    // {
    //     feeLimit: 10000000
    // }
    ();
  console.log(broastTx);
```

## solana

We provide a [Simple demo](https://github.com/bitkeepwallet/download/tree/example/example/solana/dapp), and you can also refer to [solana-web3](https://solana-labs.github.io/solana-web3.js/)

Quickly support bitkeep Wallet  If the Other wallet is already available.

- MathWallet

  If the MathWallet Wallet  is already available.  You can replace `window.solana` with  `window.bitkeep.solana` as a provider. 

#### IsInstalled

```js
const isBitKeepInstalled = window.isBitKeep && window.bitkeep.solana;
```

#### Provider

```js
function getProvider() {
  const provider = window.bitkeep && window.bitkeep.solana;
  if (!provider) {
    return window.open('https://bitkeep.com/download?type=0&theme=light');
  }
  return provider;
}
```

#### connect(request authorization to connect)

```js
try {
  await window.bitkeep.solana.connect();
  const publicKey = await window.bitkeep.solana.getAccount();
  window.bitkeep.solana.publicKey.toString(); // Once the web application is connected to Bitkeep,
} catch {
  alert('connected error');
}
```

#### connected

```js
window.bitkeep.solana.connected;
const publicKey = await window.bitkeep.solana.getAccount();
window.bitkeep.solana.publicKey.toString(); // Once the web application is connected to Bitkeep
```

#### signMessage

```js
  //string
  window.bitkeep.solana.signMessage(
    '020006106e655af38ff7324bbf1d4e16b06084763269b9'
  );

  // uint8Array
  const message = `You can use uint8array to verify`;
  const encodedMessage = new TextEncoder().encode(message);
  const signedMessage = await window.bitkeep.solana.signMessage(encodedMessage);
  const nacl = require('tweetnacl');
  const { PublicKey } = require('@solana/web3.js');
  // nacl.sign.detached.verify(encodedMessage, signedMessage, publicKey)
  nacl.sign.detached.verify(
    encodedMessage,
    signedMessage,
    new PublicKey(address).toBytes()
  );
```

#### Event listeners

used [eventemitter3](https://www.npmjs.com/package/eventemitter3)

```js
window.bitkeep.solana.on('connect', () => console.log('connected!'));
```

#### sendTransaction

You can refer to the following demo :
[simple demo](https://github.com/bitkeepwallet/download/blob/example/example/solana/dapp/index.html)
[web3 demo](https://github.com/solana-labs/solana/tree/master/web3.js/examples)
[Token demo](https://github.com/solana-labs/solana-program-library/tree/master/token/js/examples)


## Terra

You can refer to the following [simple demo](https://github.com/terra-money/wallet-provider/tree/main/templates)

## WalletConnect
#### EVM(WebApp)

WalletConnect is an open protocol for connecting wallets and DApps (Web3 applications), which uses a bridge server to establish a remote connection between two applications and/or devices, scan a QR code to establish a connection and start communication. BitKeep Wallet App  now supports WalletConnect。

For more detailed document, please refer to the [https://docs.walletconnect.com](https://docs.walletconnect.com)

  - [react-app.walletconnect.com/)](https://react-app.walletconnect.com/)
  - [Web3 Provider](https://docs.walletconnect.com/quick-start/dapps/web3-provider) 
  - [Standalone Client](https://docs.walletconnect.com/quick-start/dapps/client)
  - [example](https://github.com/WalletConnect/web-examples) 
 

we provide a [simple demo](https://github.com/bitkeepwallet/download/tree/example/example/walletConnect)
  

    npm install --save @walletconnect/client @walletconnect/qrcode-modal

```js
  import WalletConnect from '@walletconnect/client';
  import QRCodeModal from '@walletconnect/qrcode-modal';

  // Create a connector
  const connector = new WalletConnect({
    bridge: 'https://bridge.walletconnect.org', // Required
    qrcodeModal: QRCodeModal,
  });

  // Check if connection is already established
  if (!connector.connected) {
    // create new session
    connector.createSession();
  }

  // Subscribe to connection events
  connector.on('connect', (error, payload) => {
    if (error) {
      throw error;
    }

    // Get provided accounts and chainId
    const { accounts, chainId } = payload.params[0];
  });

  connector.on('session_update', (error, payload) => {
    if (error) {
      throw error;
    }

    // Get updated accounts and chainId
    const { accounts, chainId } = payload.params[0];
  });

  connector.on('disconnect', (error, payload) => {
    if (error) {
      throw error;
    }

    // Delete connector
  });
```

#### EVM(Native App SDK)

Please refer to the [WalletConnect Doc](https://docs.walletconnect.com/quick-start) and follow to find the docking documentation of your current program

## Bitkeep(Chrome extension swap)

> <font color='#fdd000'>Only BitKeep Chrome extension is supported for the time being</font>

> <font color='#fdd000'>If you send an unsupported mainnet, an error will be prompted</font>

- #### window.bitkeep.navigateTo

  invoke swap，  Support Mainnet can refer to [support mainnet](/swapchainList.json).

  ```javascript
  window.bitkeep.navigateTo('swap', {
      chain: "eth"
      fromCoin: {
          chain: 'eth',
          chainName: 'Ethereum',
          contract: '0xdac17f958d2ee523a2206206994597c13d831ec7',
          icon: 'https://cdn.bitkeep.vip/coins/u/usdt_eth.png',
          symbol: 'USDT',
      },
      toCoin: {
          chain: 'eth',
          chainName: 'Ethereum',
          icon: 'https://cdn.bitkeep.vip/u_b_bae388c0-9afd-11ec-aac8-bf8a172584ab.png',
          symbol: 'ETH',
      },
  });

  ```

  #### params

  | key      | type   | require | default                         | description                                                     |
  | -------- | ------ | ------- | ------------------------------- | --------------------------------------------------------------- |
  | fromCoin | object | false   | Current Mainnet Token           | Token to be swap. Refer to the following table for details      |
  | toCoin   | object | false   | Current Mainnet Token usdt/usdc | Token to be converted. Refer to the following table for details |

  | fromCoin/toCoin | type   | require | value                                                                | description                                                           |
  | --------------- | ------ | ------- | -------------------------------------------------------------------- | --------------------------------------------------------------------- | --- | --- |
  | chain           | string | true    | eth                                                                  | "eth" =="Ethereum" Mainnet name [reference json](/swapchainList.json) |
  | chainName       | string | false   | Ethereum                                                             | Mainnet name                                                                                                        |
  | contract        | string | false   | contract address                                                     |  token  contract address    |  
  | icon            | string | true    | http://cdn.bitkeep.vip/u_b_81d12c10-146e-11ec-9c06-1d0c5ac6bcb6.jpeg | token icon                                                            |
  | symbol          | string | true    | usdt                                                                 | token name                                                            |

## Used Open source library

If you use open source code and need us to support push open source code, please [Contact us](https://bitkeep.com/about#Contact_us)。

https://github.com/bitkeepwallet/web3-react

## FAQ

1. Multi wallet coverage problem


   <img src='../images/connect/m-wallet.jpg' width='260px'/>

  Quickly support bitkeep Wallet  If the Other wallet is already available.
  
  - MetaMask 

    If the MetaMask Wallet  is already available.  You can replace `window.ethereum` with  `window.bitkeep.ethereum` As a provider.    
    
  - MathWallet

    If the MathWallet Wallet  is already available.  You can replace `window.solana` with  `window.bitkeep.solana` As a provider.   
    

2. The test network is not supported for the time being.

   If there is no mainnet you are looking for, please [Contact us](https://bitkeep.com/about#Contact_us)。 to add it.

