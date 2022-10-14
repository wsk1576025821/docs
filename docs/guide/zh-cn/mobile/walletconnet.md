# WalletConnect

## EVM(WebApp)

WalletConnect是一个连接钱包和DApps（Web3应用程序）的开放协议，它使用一个桥梁服务器在两个应用程序和/或设备之间建立远程连接，扫描QR码建立连接并开始通信。BitKeep钱包应用程序现在支持WalletConnect。

更详细的文件，请参考[https://docs.walletconnect.com](https://docs.walletconnect.com)

- [react-app.walletconnect.com/)](https://react-app.walletconnect.com/)
- [Web3 Provider](https://docs.walletconnect.com/quick-start/dapps/web3-provider)
- [Standalone Client](https://docs.walletconnect.com/quick-start/dapps/client)
- [example](https://github.com/WalletConnect/web-examples)

我们提供一个[简单演示](https://github.com/bitkeepwallet/download/tree/example/example/walletConnect)

```bash
npm install --save @walletconnect/client @walletconnect/qrcode-modal
```

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

## EVM(原生 App SDK)

请参考[WalletConnect 文档](https://docs.walletconnect.com/quick-start)，找到你当前程序的对接文件。
