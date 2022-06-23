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
    "revision": "26fb980552ef9eb37ecfc0a75f6e6689"
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
    "url": "assets/js/11.38bd54b5.js",
    "revision": "9e381b28d13262c10490b4baf40c573d"
  },
  {
    "url": "assets/js/12.08ec8f9c.js",
    "revision": "732a5a92387968dd8589f018deefd20f"
  },
  {
    "url": "assets/js/13.904fb88c.js",
    "revision": "48396629723f7f808f3ed1d24c68740a"
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
    "url": "assets/js/9.9d77cd42.js",
    "revision": "d8068662bae59dc2cd5ec901d697f8dd"
  },
  {
    "url": "assets/js/app.56544c56.js",
    "revision": "f0056b68fa54babb6eed69cd915a64e9"
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
    "revision": "e7d138bf9a3d7108a9cd89ca50b693c7"
  },
  {
    "url": "guide/apply-list-for-dapp.html",
    "revision": "d20fade4405f76b48cee2a83c85e87b8"
  },
  {
    "url": "guide/connect-wallet-for-dapp.html",
    "revision": "860f61e54815425d7ad7d59d620b96e7"
  },
  {
    "url": "guide/index.html",
    "revision": "4e351d538256a717305750ed34cbe8ad"
  },
  {
    "url": "guide/resources.html",
    "revision": "7f2ce0a2cb60c62cbfb9c9254b15fbea"
  },
  {
    "url": "guide/switch-network-for-dapp.html",
    "revision": "29ddb4e4c4e29571aeaf2b43d7ea770e"
  },
  {
    "url": "guide/webview-function.html",
    "revision": "4a9b7f5a31e71d61afa2fa37901e1a27"
  },
  {
    "url": "js/extend.js",
    "revision": "6ed4d2441a39b13b27eadc42ca941dd7"
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
