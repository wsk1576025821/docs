# How To Connect
这适用BitKeep现在支持区块链,包括 EVM(Ethereum、BSC、Arbitrum、Polygon、Fantom...), TRON, Solana, Terra Arweave, IOST等
[Logo](https://github.com/bitkeepwallet/download) 
[Simple demo](https://github.com/bitkeepwallet/download/tree/example)

# 开源代码集成
如何您使用的是开源代码，需要我们支持push开源代码，欢迎联系我们[Contact us](https://bitkeep.com/about#Contact_us)。


# 集成
为了便于特别检测,全局对象挂在了isBitKeep
<!-- ![Open Bitkeep app browser and scan](../images/connect/isBitkeep.png)(:width='300px' height="300px") -->
<img src='../images/connect/isBitkeep.png' width='300px'/>

如果未安装 BitKeep，我们建议您将用户重定向到[我们的网站](https://bitkeep.com/download?type=2 )。




## EVM
#### 简介 
我们提供了[Simple  demo](https://github.com/bitkeepwallet/download/tree/example/example/eth/dapp)，也可以参考[MetaMask Documents](https://docs.metamask.io/guide/ethereum-provider.html)方式我们也是支持的。

你也可以使用第三方库配合```ethereum```使用, [web3js](https://www.npmjs.com/package/web3) [ethers](https://www.npmjs.com/package/ethers)等。



#### 是否安装
``` js
    const isBitkeepInstalled = window.ethereum && window.ethereum.isBitkeep
```

#### Provider 
``` js
    window.ethereum 
```

#### eth_requestAccounts 请求授权连接 
``` js

    const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
    const account = accounts[0];

    //if used web3
    const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
    const web3 = new Web3(ethereum)
    const [address] = await web3.eth.getAccounts(); // address
    const chainId = await web3.eth.getChainId();  // chainId  

```
#### connected
```js
    window.ethereum.connected
```
#### Event事件监听
集成了[eventemitter3](https://www.npmjs.com/package/eventemitter3) 通讯机制
```js
    ethereum.removeAllListeners(); 
    ethereum.on("accountsChanged", ([address]) => {
         alert("address changed")
    });
    ethereum.on("chainChanged", async (chainId) => {
          alert("chainid changed")
    });
```

#### sendTransaction 转账 
```js
    const transactionParameters = {
        nonce: '0x00', // ignored by Bitkeep
        gasPrice: '0x09184e72a000', // customizable by user during Bitkeep confirmation.
        gas: '0x2710', // customizable by user during Bitkeep confirmation.
        to: '0x0000000000000000000000000000000000000000', // Required except during contract publications.
        from: ethereum.selectedAddress, // must match user's active address.
        value: '0x00', // Only required to send ether to the recipient from the initiating external account.
        data:
            '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
        chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by Bitkeep.
    };

    // txHash is a hex string
    // As with any RPC call, it may throw an error
    const txHash = await ethereum.request({
    method: 'eth_sendTransaction',
    params: [transactionParameters],
    });

    // if used web3 
    const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
    const web3 = new Web3(ethereum);  
    const result = await web3.eth.sendTransaction({
            from: ethereum.selectedAddress,
            to:"0x0000000000000000000000000000000000000000",
            value: web3.utils.toWei("1", "ether"),
    });

```
#### 第三方库连接
[web3modal](https://github.com/Web3Modal/web3modal)
```js
   import Web3Modal, { connectors } from "web3modal"
   this.web3Modal = new Web3Modal({
        network:'mainnet' ,
        cacheProvider: true,
        providerOptions: {
            "custom-injected": {
                display: {
                logo: "https://cdn.bitkeep.vip/u_b_69b66a00-a046-11ec-a3eb-f758fa002ae8.png",
                name: "BitKeep",
                description: "Connect with the provider in your Browser",
                },
                package: connectors.injected,
                connector: async (ProviderPackage: any, options: any) => {
                const provider = new ProviderPackage(options)
                return provider
            }
        },
    }
    });
```


## Tron
我们提供了[Simple  demo](https://github.com/bitkeepwallet/download/tree/example/example/tron/dapp), 同时也兼容了[tronlink dapp](https://developers.tron.network/docs/dapp-integrate-with-tronlink-introduction)的方式


### 是否安装
``` js
    const isBitkeepInstalled = window.tronLink &&  window.isBitkeep
```

#### eth_requestAccounts 请求授权连接 
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

#### sendTransaction 转账 
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
我们提供了[Simple  demo](https://github.com/bitkeepwallet/download/tree/example/example/solana/dapp) 同时也可以参考 [solana-web3](https://solana-labs.github.io/solana-web3.js/)


####是否安装
``` js
    const isBitkeepInstalled = window.solana && window.isBitkeep
```

#### Provider 
``` js
    window.solana
```

#### connect 请求连接 
``` js 
    try{
        await window.solana.connect();
        const publicKey = await window.solana.getAccount()
        window.solana.publicKey.toString()  // Once the web application is connected to Bitkeep, 
    }catch{
        alert("connected error")
    }

```
#### connected
```js
    window.solana.connected
    const publicKey = await window.solana.getAccount() 
    window.solana.publicKey.toString() // Once the web application is connected to Bitkeep
```

#### Event事件监听
集成了[eventemitter3](https://www.npmjs.com/package/eventemitter3) 通讯机制
```js
    window.solana.on("connect", () => console.log("connected!"))  
```

#### sendTransaction 
可以参考以下demo实现
[simple demo](https://github.com/bitkeepwallet/download/blob/example/example/solana/dapp/index.html) 
[web3 demo](https://github.com/solana-labs/solana/tree/master/web3.js/examples) 
[Token demo](https://github.com/solana-labs/solana-program-library/tree/master/token/js/examples)


## Terra
更新中...




## WalletConnect 
#### EVM(WebApp) 
我们同样支持[WalletConnect](https://docs.walletconnect.com/quick-start/dapps/client) 方式连接，具体请参考walletConnect文档。 同样我们提供了简单[simple demo](https://github.com/bitkeepwallet/download/tree/example/example/walletConnect)

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

#### EVM(Native App SDK)

请参考[WalletConnect](https://docs.walletconnect.com/quick-start)按照对应的环境接入











