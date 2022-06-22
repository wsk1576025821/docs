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
    "revision": "97a1f7b415508b67b6629b179fa9a2bd"
  },
  {
    "url": "assets/css/0.styles.86622e16.css",
    "revision": "6e3238ed881ec89d4776cfd201b307e3"
  },
  {
    "url": "assets/img/isBitKeep.df8d3c9b.png",
    "revision": "df8d3c9b667697e4068faebda7afd7ac"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.71e135f6.js",
    "revision": "8836673ef368f823ce982616b4a009d7"
  },
  {
    "url": "assets/js/11.21fca1fd.js",
    "revision": "20f08b77eab5b7506bf43d055f39f292"
  },
  {
    "url": "assets/js/12.66479485.js",
    "revision": "4074ba7e03ac47155d7f6da1ed9a776e"
  },
  {
    "url": "assets/js/13.75db255f.js",
    "revision": "9eb686fe5921386ec720463ac175e19b"
  },
  {
    "url": "assets/js/14.2545825d.js",
    "revision": "5ea8f794f758bfbe57d1905b69427ae8"
  },
  {
    "url": "assets/js/15.ade3ae69.js",
    "revision": "ace3525d8529d0d36cdf4c0985f8b1d2"
  },
  {
    "url": "assets/js/16.af13dcff.js",
    "revision": "061b4fbdc61ce965e8733635310af817"
  },
  {
    "url": "assets/js/17.b97e149e.js",
    "revision": "0c14c0a30e6684bd02afa87c233a7016"
  },
  {
    "url": "assets/js/4.96e2c22c.js",
    "revision": "27e24f6336d1e7f017f0be78460f6dc5"
  },
  {
    "url": "assets/js/5.e22f3466.js",
    "revision": "28f1d9f322624bbd2187784fb29957ec"
  },
  {
    "url": "assets/js/6.c6aa42e4.js",
    "revision": "92c67bd9f116d6ea2a10d97783c5238e"
  },
  {
    "url": "assets/js/7.afb3d0d0.js",
    "revision": "7698ca1f9ac8608ff1159a7a47434c01"
  },
  {
    "url": "assets/js/8.88698e1c.js",
    "revision": "f7307b8be27bb098b493f862ede1c9e3"
  },
  {
    "url": "assets/js/9.54faf6c7.js",
    "revision": "b1952d8ac26ae97caeb8a26ee29f86e4"
  },
  {
    "url": "assets/js/app.b7064ba9.js",
    "revision": "d1f1a5b1b7d491dedbc9ea7a54bbee84"
  },
  {
    "url": "assets/js/vendors~docsearch.033b3a51.js",
    "revision": "d5d8c4f53b3d49fac5d6126b5bf8a4ea"
  },
  {
    "url": "assets/js/vendors~notification.61107558.js",
    "revision": "5e4d55dac66c7c8fb270b4401cb7a00f"
  },
  {
    "url": "bitkeep-icon.svg",
    "revision": "69f22bf7ea307329c76f302d2c3b4928"
  },
  {
    "url": "faq/index.html",
    "revision": "45774c98dffe58e9012da9607c31e812"
  },
  {
    "url": "guide/apply-list-for-dapp.html",
    "revision": "757c368022cbb9f3d0a90246c99a729c"
  },
  {
    "url": "guide/connect-wallet-for-dapp.html",
    "revision": "ba734ccf11d90713ddbebe7ff5925543"
  },
  {
    "url": "guide/index.html",
    "revision": "a2e22535d44098424a3c220593346b41"
  },
  {
    "url": "guide/resources.html",
    "revision": "b39374dfdb9689268646a66c42e0b377"
  },
  {
    "url": "guide/switch-network-for-dapp.html",
    "revision": "111a05edbf6fa05404f3349f556fe584"
  },
  {
    "url": "guide/webview-function.html",
    "revision": "d170fe4e12a4c3c6045ab13f391b42e4"
  },
  {
    "url": "js/extend.js",
    "revision": "72be7e57c00f970964d73a7990440b8a"
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
