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
    "revision": "d5e519f6668858048c27f31d9e4356ad"
  },
  {
    "url": "assets/css/0.styles.00514bcc.css",
    "revision": "f6e142f5c9defa76d1b7b37a62aad7b0"
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
    "url": "assets/js/10.3418eb80.js",
    "revision": "22fd9aa81ad2bc1360a067132feb522a"
  },
  {
    "url": "assets/js/11.57f2aa3a.js",
    "revision": "d410e998fa89645e7a58f6546ffb92b2"
  },
  {
    "url": "assets/js/12.08ec8f9c.js",
    "revision": "732a5a92387968dd8589f018deefd20f"
  },
  {
    "url": "assets/js/13.70982490.js",
    "revision": "7bf7d9180ddefa5ad837d11f5575c4a7"
  },
  {
    "url": "assets/js/14.f512a365.js",
    "revision": "b2069c5be9cd1c260d49bdbfccfe1a35"
  },
  {
    "url": "assets/js/15.944f7a71.js",
    "revision": "6628652b4eae160cce4e94600fd13ea7"
  },
  {
    "url": "assets/js/16.afb5a405.js",
    "revision": "e86cc32957d53f20bad9a05015b4f500"
  },
  {
    "url": "assets/js/17.b97e149e.js",
    "revision": "0c14c0a30e6684bd02afa87c233a7016"
  },
  {
    "url": "assets/js/4.4d572459.js",
    "revision": "4d4632992a718f18579ad4473e6e1848"
  },
  {
    "url": "assets/js/5.af004f53.js",
    "revision": "c65536ec5f9e3fbb54c4d6f90741de9f"
  },
  {
    "url": "assets/js/6.a3105a45.js",
    "revision": "f4036eb351e9f3ba788073e7cef5fbe6"
  },
  {
    "url": "assets/js/7.ec9c50d2.js",
    "revision": "9c55396d8309245bd7378e132800e03a"
  },
  {
    "url": "assets/js/8.0343d89b.js",
    "revision": "2aa63f4aa00ed05ca87907961ef399db"
  },
  {
    "url": "assets/js/9.f9e294d4.js",
    "revision": "ab597faea522223e46bed0f250d9e310"
  },
  {
    "url": "assets/js/app.99c4b1a6.js",
    "revision": "a58afce1f5997943d394ccce2dbc2864"
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
    "revision": "705e0dedd5815ebbfec2b274d5e79dfe"
  },
  {
    "url": "guide/apply-list-for-dapp.html",
    "revision": "44d8b7a995e423ef243d0d7dfc4f10a3"
  },
  {
    "url": "guide/connect-wallet-for-dapp.html",
    "revision": "a664e30cd2fb4ed3b550197ab1121476"
  },
  {
    "url": "guide/index.html",
    "revision": "7659508cdd48d07788251fc4a53cdae3"
  },
  {
    "url": "guide/resources.html",
    "revision": "24add87e7a284ca8a47d0e90a880eca5"
  },
  {
    "url": "guide/switch-network-for-dapp.html",
    "revision": "bd7881e9ab39a086aad8c8d928f08cfe"
  },
  {
    "url": "guide/webview-function.html",
    "revision": "a6187c421cac642c5fb6f57ddf061212"
  },
  {
    "url": "js/extend.js",
    "revision": "02587dbb8ea4ea3b294e604ffa352f4b"
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
