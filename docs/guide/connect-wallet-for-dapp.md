
# 介绍
欢迎来到MetaMask的开发者文档。Bitkeep是一个开创性的工具，可以在Web3上实现用户交互和体验。它目前可作为浏览器扩展程序以及Android和iOS设备上的移动应用程序使用。本文档的目的是说明如何使用BitKeep构建dapp。

# 为什么选择BitKeep
BitKeep支持 以太坊规范EVM(Ethereum、BSC、Arbitrum、Polygon、Fantom...), TRON, Solana, Terra Arweave, Terra, IOST等 多种钱包规范. 不需要下载多个钱包.
# 扩展和应用内浏览器 js注入
安装了 [BitKeep扩展](https://bitkeep.com/download?type=2) 的chrome浏览器或者在 [BitKeep App](https://bitkeep.com/download?type=0) 应用内Dapp浏览器中打开web页面默认会注入全局对象 ```window.bitkeep```, 可以使用 ```window.bitkeep```和 [BitKeep App](https://bitkeep.com/download?type=0) 或 [BitKeep扩展](https://bitkeep.com/download?type=2) 来进行交互

<img src='../images/connect/isBitKeep.jpg' width='400px'/>

# 当前流行钱包的规范全局对象 bitkeep 都支持
| 通用    | BitKeep规范 |  支持版本 |   支持链  
|----  |----| ----| ----|
| window.ethereum   | window.bitkeep.ethereum |  | EVM(Ethereum、BSC、Arbitrum、Polygon、Fantom...等) |
| window.solana window.phantom   | window.bitkeep.solana |   |  Solana |
| window.tronLink   | 暂无 |   |   Tron |
| window.visionWeb  | window.bitkeep.visionWeb |   |   Vsision |
| window.IWalletJS  | window.bitkeep.IWalletJS |   |  Iost  |
| window.arweaveWallet  | window.bitkeep.arweave |   |  Arweave  |




# 相关属性表
   [EVM以太坊规范](/EVM "Bitkeep EVM")。

# 其他功能
# Change log







# Connect Wallet
This applies to bitkeep, which now supports blockchains, including EVM(Ethereum、BSC、Arbitrum、Polygon、Fantom...), TRON, Solana, Terra Arweave, IOST ...

# Integrate
In order to facilitate special detection, the global object is attached with the ```isBitKeep``` attribute.

<!-- ![Open Bitkeep app browser and scan](../images/connect/isBitKeep.png)(:width='300px' height="300px") -->
<img src='../images/connect/isBitKeep.jpg' width='400px'/>

If BitKeep is not installed, we recommend that you redirect users to [our website](https://bitkeep.com/download?type=2 )。




## EVM 
Ethereum, Binance Smart Chain, Avalanche-C, Fantom, Polygon, Arbitrum...  
[chainlist](https://chainlist.org/) 

The test network is not supported for the time being. If there is no mainnet you are looking for, please [Contact us](https://bitkeep.com/about#Contact_us)。 to add it.

- #### Introduction 
    We provide a [Simple  demo](https://github.com/bitkeepwallet/download/tree/example/example/eth/dapp). You can also refer to [MetaMask Dapp](https://docs.metamask.io/guide/create-dapp.html#project-setup)[MetaMask Dapp demo](https://github.com/BboyAkers/simple-dapp-tutorial). We also support it.

    You can also use third-party libraries in conjunction with ```window.bitkeep.ethereum```,  [web3js](https://www.npmjs.com/package/web3)  [ethers](https://www.npmjs.com/package/ethers)... 

    ```window.bitkeep.ethereum``` implementation and ```window.ethereum``` is the same. If you use a third-party library, just use ```window.bitkeep.ethereum``` replaced ```window.ethereum``` can be used to distinguish between BitKeep wallet and other wallets



#### isInstalled
``` js
    const isBitKeepInstalled = window.isBitKeep && window.bitkeep.ethereum
```



#### Provider 
You can use `window.bitkeep.ethereum`.

``` js
   function  getProvider(){
        const provider = window.bitkeep && window.bitkeep.ethereum
        if(!provider){
            return window.open('https://bitkeep.com/download?type=0&theme=light') 
        }
        return  provider
    }
```

#### eth_requestAccounts(request authorization to connect) 
``` js
     //if used injected
    const Provider = getProvider()

    const accounts = await Provider.request({ method: 'eth_requestAccounts'});
    const account = accounts[0];


    //if used web3
    const accounts = await Provider.request({ method: 'eth_requestAccounts'});
    const web3 = new Web3(Provider)
    const [address] = await web3.eth.getAccounts(); // address
    const chainId = await web3.eth.getChainId();  // chainId  

```
#### connected
```js
    const Provider = getProvider()
    Provider.connected
```
#### Event  listeners
used [eventemitter3](https://www.npmjs.com/package/eventemitter3)
```js
    const Provider = getProvider()
    Provider.removeAllListeners(); 
    Provider.on("accountsChanged", ([address]) => {
         alert("address changed")
    });
    Provider.on("chainChanged", async (chainId) => {
          alert("chainid changed")
    });
```
#### sign
https://github.com/MetaMask/eth-sig-util
#### sendTransaction(Transfer) 
```js
    const Provider = getProvider()
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
    const accounts = await Provider.request({ method: 'eth_requestAccounts'});
    const web3 = new Web3(Provider);  
    const result = await web3.eth.sendTransaction({
            from: Provider.selectedAddress,
            to:"0x0000000000000000000000000000000000000000",
            value: web3.utils.toWei("1", "ether"),
    });

```
#### Using open source libraries
if you have problems with third-party libraries that cannot be solved, you can c [Contact us](https://bitkeep.com/about#Contact_us).


## Tron
We provide [Simple  demo](https://github.com/bitkeepwallet/download/tree/example/example/tron/dapp) and are compatible with [tronlink dapp](https://developers.tron.network/docs/dapp-integrate-with-tronlink-introduction).



### isInstalled
``` js
    const isBitKeepInstalled = window.tronLink &&  window.isBitKeep
```

#### eth_requestAccounts(request authorization to connect) 
```js
    try{
        await tronLink.request({ method: "tron_requestAccounts" });
        const address = tronWeb.defaultAddress.base58;  
        const balance = await tronWeb.trx.getBalance(address);
    }catch{

    }
```

#### connected
```js
    window.tronWeb.ready
```

#### sendTransaction(Transfer)
```js

    var tronweb = window.tronWeb
    var tx = await tronweb.transactionBuilder.sendTrx('TW8u1VSwbXY7o7H9kC8HmCNTiSXvD69Uiw', 1000000, tronWeb.defaultAddress.base58)
    var signedTx = await tronweb.trx.sign(tx)
    var broastTx = await tronweb.trx.sendRawTransaction(signedTx)
    console.log(broastTx)
    console.log(broastTx.txid)

    //Token
    let decimal = 18
    let Contract = await tronWeb.contract().at("TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7") //WIN
    const decimalCall = Contract.decimals || Contract.DECIMALS;
    if (decimalCall) {
        decimal = await decimalCall().call()
    }
    let broastTx = await Contract.transfer(
        "TW8u1VSwbXY7o7H9kC8HmCNTiSXvD69Uiw", 
        // "0xde0b6b3a7640000"
        tronWeb.toHex(2 * Math.pow(10, decimal))
    ).send(
        // {
        //     feeLimit: 10000000
        // }
    )
    console.log(broastTx)
```


## solana
We provide a [Simple  demo](https://github.com/bitkeepwallet/download/tree/example/example/solana/dapp), and you can also refer to [solana-web3](https://solana-labs.github.io/solana-web3.js/)



#### IsInstalled
``` js
    const isBitKeepInstalled = window.isBitKeep && window.bitkeep.solana
```

#### Provider 

``` js
   function  getProvider(){
        const provider = window.bitkeep && window.bitkeep.solana
        if(!provider){
            return window.open('https://bitkeep.com/download?type=0&theme=light') 
        }
        return  provider
    }
```

#### connect(request authorization to connect)
``` js 
    try{
        await  window.bitkeep.solana.connect();
        const publicKey = await  window.bitkeep.solana.getAccount()
        window.bitkeep.solana.publicKey.toString()  // Once the web application is connected to Bitkeep, 
    }catch{
        alert("connected error")
    }

```
#### connected
```js
     window.bitkeep.solana.connected
    const publicKey = await  window.bitkeep.solana.getAccount() 
     window.bitkeep.solana.publicKey.toString() // Once the web application is connected to Bitkeep
```
#### signMessage
```js
    //string
    window.bitkeep.solana.signMessage("020006106e655af38ff7324bbf1d4e16b06084763269b9")

    // uint8Array
    const message = `You can use uint8array to verify`;
    const encodedMessage = new TextEncoder().encode(message);
    const signedMessage = await window.bitkeep.solana.signMessage(encodedMessage);
    const nacl = require("tweetnacl")
    const { PublicKey } = require('@solana/web3.js');
    // nacl.sign.detached.verify(encodedMessage, signedMessage, publicKey)
    nacl.sign.detached.verify(encodedMessage, signedMessage, new PublicKey(address).toBytes())
    
```    
#### Event listeners
used [eventemitter3](https://www.npmjs.com/package/eventemitter3)
```js
     window.bitkeep.solana.on("connect", () => console.log("connected!"))  
```

#### sendTransaction 
You can refer to the following demo :
[simple demo](https://github.com/bitkeepwallet/download/blob/example/example/solana/dapp/index.html) 
[web3 demo](https://github.com/solana-labs/solana/tree/master/web3.js/examples) 
[Token demo](https://github.com/solana-labs/solana-program-library/tree/master/token/js/examples)


## Terra
You can refer to the following [simple demo](https://github.com/terra-money/wallet-provider/tree/main/templates) 

## WalletConnect Protocol (QR code)
- #### EVM(WebApp) 
We also support [WalletConnect](https://docs.walletconnect.com/quick-start/dapps/client). Please refer to walletconnect documentation for details. Similarly, we provide a [simple demo](https://github.com/bitkeepwallet/download/tree/example/example/walletConnect)

    npm install --save @walletconnect/client @walletconnect/qrcode-modal
```js
    import WalletConnect from "@walletconnect/client";
    import QRCodeModal from "@walletconnect/qrcode-modal";

    // Create a connector
    const connector = new WalletConnect({
        bridge: "https://bridge.walletconnect.org", // Required
        qrcodeModal: QRCodeModal,
    });

    // Check if connection is already established
    if (!connector.connected) {
        // create new session
        connector.createSession();
    }

    // Subscribe to connection events
    connector.on("connect", (error, payload) => {
        if (error) {
            throw error;
        }

        // Get provided accounts and chainId
        const { accounts, chainId } = payload.params[0];
    });

    connector.on("session_update", (error, payload) => {
        if (error) {
            throw error;
        }

        // Get updated accounts and chainId
        const { accounts, chainId } = payload.params[0];
     });

    connector.on("disconnect", (error, payload) => {
        if (error) {
            throw error;
        }

    // Delete connector
    });
```

- #### EVM(Native App SDK)
Please refer to the  [WalletConnect Doc](https://docs.walletconnect.com/quick-start)  and follow to find the docking documentation of your current program



## Used  Open source library
If you use open source code and need us to support push open source code, please [Contact us](https://bitkeep.com/about#Contact_us)。

## Resources
[Logo icon](https://github.com/bitkeepwallet/download/blob/main/logo-png/BitKeep_logo_circle.png) 
[Logo-180 icon](https://github.com/bitkeepwallet/download/blob/main/logo-png/small-circle-logo180.png) 
[Simple demo](https://github.com/bitkeepwallet/download/tree/example)

## FAQ
 - Multi wallet coverage problem
   
    <img src='../images/connect/m-wallet.jpg' width='260px'/>

    Use ```window.bitkeep.ethereum```  As a provider.
    Use ```window.bitkeep.solana```  As a provider. It will exist together with other wallets.
    ```
      bitkeep:  window.bitkeep.ethereum 
      other: window.ethereum 

      bitkeep:  window.bitkeep.solana 
      other: window.solana  

    ```














