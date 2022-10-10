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
    "revision": "e8497150015012fa627071f44b9f236e"
  },
  {
    "url": "assets/css/0.styles.7ac5815e.css",
    "revision": "34f1c622e0c1d38f7c7382a0a4fea970"
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
    "url": "assets/js/10.82f9e081.js",
    "revision": "f000db1d25a943e4bc8ce12cf9723c7a"
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
    "url": "assets/js/14.d582b9cb.js",
    "revision": "8aea8b561d9c918e605147079f45df38"
  },
  {
    "url": "assets/js/15.83eec2f0.js",
    "revision": "5f7c50a8f70f2fa9136cb915cf977007"
  },
  {
    "url": "assets/js/16.9549cc88.js",
    "revision": "3796319c6995e2aae158998b5f86ab9b"
  },
  {
    "url": "assets/js/17.da3f39d6.js",
    "revision": "509d8fbcb76d617568b1e189ce222718"
  },
  {
    "url": "assets/js/18.01fc167c.js",
    "revision": "e461f36d04ca494d680d7d781ae13ad0"
  },
  {
    "url": "assets/js/19.28fbde09.js",
    "revision": "5a765e62c26aa95df713df21b9444eba"
  },
  {
    "url": "assets/js/20.f179416c.js",
    "revision": "e12ea261646d95a837469f2c0fbd76ad"
  },
  {
    "url": "assets/js/21.f1b6d277.js",
    "revision": "4dd642df115730b5d2a60cb85d8a04d2"
  },
  {
    "url": "assets/js/22.67f81ccb.js",
    "revision": "8bd8ca191631d902b3ff2596cce45602"
  },
  {
    "url": "assets/js/23.5fbb8bd9.js",
    "revision": "5329942baed09a4aa0307d911f228c32"
  },
  {
    "url": "assets/js/24.393b1d36.js",
    "revision": "0095bafe2a50068b1bd168e65806f4a2"
  },
  {
    "url": "assets/js/25.91ec6391.js",
    "revision": "16cf15d9257e83f3d066ea4954e43226"
  },
  {
    "url": "assets/js/26.16e202ed.js",
    "revision": "0b37a88c42b6a59d69fd326715be8165"
  },
  {
    "url": "assets/js/27.084bb9b8.js",
    "revision": "bf4b60152dcb5158b0be0b5a838eeda0"
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
    "url": "assets/js/6.72cd82b3.js",
    "revision": "e5bafd523bea29379c352aead5c3982c"
  },
  {
    "url": "assets/js/7.ac731ae1.js",
    "revision": "527e90c78f6b50d3b2e6a483a13d07ee"
  },
  {
    "url": "assets/js/8.6d73c700.js",
    "revision": "e4c51cb59378030ccc8cd6300fed0f97"
  },
  {
    "url": "assets/js/9.f5040c53.js",
    "revision": "7550075fdc714bb29f6a0bb07aa0b9e0"
  },
  {
    "url": "assets/js/app.3e437736.js",
    "revision": "8e0e092bc216379d7b9f3b56a81b9944"
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
    "revision": "9054a1ebcd9273b67f1980e38db0c9d8"
  },
  {
    "url": "guide/apply-list-for-dapp.html",
    "revision": "0a68da192358881de9638aa0a92c2acb"
  },
  {
    "url": "guide/connect-wallet-for-dapp.html",
    "revision": "ac96cf4c594a4650f202b711360e7aa3"
  },
  {
    "url": "guide/faq.html",
    "revision": "027d6fca723a0cee7125c9b043769e2a"
  },
  {
    "url": "guide/index.html",
    "revision": "62e9bd4eabc8e40275a71355fb8f26b5"
  },
  {
    "url": "guide/resources.html",
    "revision": "b89f710ce3c1b6691fda68e3b4805a12"
  },
  {
    "url": "guide/switch-network-for-dapp.html",
    "revision": "db802f765a4241419671da7a9fb51281"
  },
  {
    "url": "guide/wallet/bitkeep.html",
    "revision": "91ff138eef289efa93a6da187f14ac0d"
  },
  {
    "url": "guide/wallet/ethereum.html",
    "revision": "464fc03ca3d0857896e624aa958de298"
  },
  {
    "url": "guide/wallet/introduction.html",
    "revision": "db107ef2e275932494e3fad810286f3b"
  },
  {
    "url": "guide/wallet/library.html",
    "revision": "7fdee545a58f6d7f2a2ad299999f0713"
  },
  {
    "url": "guide/wallet/quickly.html",
    "revision": "1da36aad4eb5ab38ec8dac025469a5f9"
  },
  {
    "url": "guide/wallet/solana.html",
    "revision": "8a5cb897ba6516d3821472320550c32b"
  },
  {
    "url": "guide/wallet/Terra.html",
    "revision": "9bdaecf25088364a3bcdf7294d2da0db"
  },
  {
    "url": "guide/wallet/tron.html",
    "revision": "499d1e9c7aa05dd971c7f82421e47789"
  },
  {
    "url": "guide/wallet/walletconnet.html",
    "revision": "6a6dd551319a301959aa5694150e08c2"
  },
  {
    "url": "guide/webview-function.html",
    "revision": "35fc5a3344bcd5a5b3b369ba6e92a998"
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
