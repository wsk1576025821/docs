/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0dfe395f5ce4442cdda31a3fc6d3c832"
  },
  {
    "url": "assets/css/0.styles.9801d373.css",
    "revision": "b57c8ba00cdbebb8c0be975eacdf780f"
  },
  {
    "url": "assets/img/bitkeepinfo.004c6d9b.jpg",
    "revision": "004c6d9b9e51c15bdb4bebe70529410b"
  },
  {
    "url": "assets/img/isBitKeep.9f272e10.jpg",
    "revision": "9f272e10cff1c3e496feb5c27ef7a360"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f240b555.js",
    "revision": "2b889a36f7f78d102b05d42bf6d182f2"
  },
  {
    "url": "assets/js/11.176b4a2b.js",
    "revision": "c3272c91adcacb38ae4bdbfbd6f3537a"
  },
  {
    "url": "assets/js/12.1038dcb6.js",
    "revision": "01830f731cc9a49995df6f4b54c818be"
  },
  {
    "url": "assets/js/13.ee30a496.js",
    "revision": "d8b2c82ea0a53388be15178eb26ca55a"
  },
  {
    "url": "assets/js/14.78161879.js",
    "revision": "64c1b214448b3a45be17d9b2a2cbddae"
  },
  {
    "url": "assets/js/15.83eec2f0.js",
    "revision": "5f7c50a8f70f2fa9136cb915cf977007"
  },
  {
    "url": "assets/js/16.1fa3278f.js",
    "revision": "b6d537b2446e7ea024f6f27a903c41af"
  },
  {
    "url": "assets/js/17.32b1c1ec.js",
    "revision": "903c34c33899c76f2f8d9356850575f3"
  },
  {
    "url": "assets/js/18.ca8f5718.js",
    "revision": "53d06713a25ccc94aa1f8ade27bade46"
  },
  {
    "url": "assets/js/19.e5d05242.js",
    "revision": "821c791d874711e52e191ad1094b197e"
  },
  {
    "url": "assets/js/20.3dd8aefb.js",
    "revision": "f4bf33167d0e8cf75362a114eca5116c"
  },
  {
    "url": "assets/js/21.a076a39b.js",
    "revision": "2cab0f3b638ba5fc792306c067d0ab6e"
  },
  {
    "url": "assets/js/22.7045038d.js",
    "revision": "9cedd59952afc739be0c3f32ce112231"
  },
  {
    "url": "assets/js/23.570d001f.js",
    "revision": "e35c27a172601551ef510b00d1313a54"
  },
  {
    "url": "assets/js/24.e1c52f99.js",
    "revision": "e38354103dca242cfa9c3c82918fc8af"
  },
  {
    "url": "assets/js/25.60a16c69.js",
    "revision": "823ea572ba64745a9ce5a65aa2d544cb"
  },
  {
    "url": "assets/js/26.e27888b0.js",
    "revision": "6a29f551f86443b45e0c7770aa92334b"
  },
  {
    "url": "assets/js/27.da54d499.js",
    "revision": "e393bc8e74462af3a08f1c9343ec932b"
  },
  {
    "url": "assets/js/28.c83c8425.js",
    "revision": "7d6698b8da757b4924386834346df5ec"
  },
  {
    "url": "assets/js/29.53d6e738.js",
    "revision": "f978a7d2a33a89b92fa1697647d94420"
  },
  {
    "url": "assets/js/30.10288477.js",
    "revision": "b4df395de9e53f8c69f5e5e04a6297fd"
  },
  {
    "url": "assets/js/4.83f9d4d7.js",
    "revision": "aed7db1c8dfe257899c9e0ed715814a6"
  },
  {
    "url": "assets/js/5.45025c3e.js",
    "revision": "f5686c5735c3d3ced22309892d192aff"
  },
  {
    "url": "assets/js/6.2c13df09.js",
    "revision": "170b716580ce4f806bcfbb75c670ccec"
  },
  {
    "url": "assets/js/7.33cfd54b.js",
    "revision": "54768bc343dced660df26106aa61f8dd"
  },
  {
    "url": "assets/js/8.07369d6c.js",
    "revision": "b8f83982f71709628ceb27f29c893cfd"
  },
  {
    "url": "assets/js/9.f5040c53.js",
    "revision": "7550075fdc714bb29f6a0bb07aa0b9e0"
  },
  {
    "url": "assets/js/app.6330c8a9.js",
    "revision": "279cfd2739f231bbc96eb8eac26f457c"
  },
  {
    "url": "assets/js/vendors~docsearch.8f557a18.js",
    "revision": "ef662aaa91359e958c134d8a0632def3"
  },
  {
    "url": "assets/js/vendors~notification.a9240e72.js",
    "revision": "a00e737ea5726454c5ed7af06d2c84d4"
  },
  {
    "url": "bitkeep-icon.svg",
    "revision": "69f22bf7ea307329c76f302d2c3b4928"
  },
  {
    "url": "faq/index.html",
    "revision": "196c541e06516a317df12b4bbd978db5"
  },
  {
    "url": "guide/apply-list-for-dapp.html",
    "revision": "88ac25f010e6b71d6f315e0f96d59144"
  },
  {
    "url": "guide/connect-wallet-for-dapp.html",
    "revision": "e0f5a0c04e7e06bea82efbd89018800a"
  },
  {
    "url": "guide/faq.html",
    "revision": "e0891214880e23ebc47da22be9d72899"
  },
  {
    "url": "guide/index.html",
    "revision": "cdd67bf44aadfade4f3e73a708813071"
  },
  {
    "url": "guide/resources.html",
    "revision": "06537b9438431a462678e3037d91fc32"
  },
  {
    "url": "guide/switch-network-for-dapp.html",
    "revision": "1c7619b0c69d557bed7ed715b23de7c1"
  },
  {
    "url": "guide/wallet/aptos.html",
    "revision": "de94f664770f2e7e2003436ec864b9b1"
  },
  {
    "url": "guide/wallet/aptos/connect.html",
    "revision": "2c4387de24d12ecb3b5f3da43aff5d44"
  },
  {
    "url": "guide/wallet/aptos/readmd.html",
    "revision": "e3566ef49f3c36a14b37f3b0f573b9b8"
  },
  {
    "url": "guide/wallet/bitkeep.html",
    "revision": "1b5e5d2d4c97ede574056b552aa30920"
  },
  {
    "url": "guide/wallet/ethereum.html",
    "revision": "32273e328f49b54c5533d611837da94c"
  },
  {
    "url": "guide/wallet/introduction.html",
    "revision": "f8cb2c60de1ec9939cb2a9bc237ddd1a"
  },
  {
    "url": "guide/wallet/library.html",
    "revision": "e10bbd78f57d29f21b161d65fa4aed22"
  },
  {
    "url": "guide/wallet/quickly.html",
    "revision": "fe912006f1b36bc8cb7f34228932e20a"
  },
  {
    "url": "guide/wallet/solana.html",
    "revision": "f01873bfb30f52d97b84d31d477b22a2"
  },
  {
    "url": "guide/wallet/Terra.html",
    "revision": "b204e34c453e6cc3b7150a8a87e019a5"
  },
  {
    "url": "guide/wallet/tron.html",
    "revision": "ecdf490d8e45bc57fc5aae46cadd241f"
  },
  {
    "url": "guide/wallet/walletconnet.html",
    "revision": "0c73e1da624ec6286993e8e76615ffed"
  },
  {
    "url": "guide/webview-function.html",
    "revision": "b5581a4bcfceebe5ccc142104e550145"
  },
  {
    "url": "js/extend.js",
    "revision": "1f57bcbf609c0579ef2cf711395ff15c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
