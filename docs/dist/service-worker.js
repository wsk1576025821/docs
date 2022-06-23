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
    "revision": "2b26e5c4ccc998a9b65d31c577adb7cd"
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
    "url": "assets/js/11.c8007817.js",
    "revision": "dc67cee39e6d0fc4ccc651e81f8bad94"
  },
  {
    "url": "assets/js/12.94f5cf1f.js",
    "revision": "1accadd35efd3f767c3504294451d549"
  },
  {
    "url": "assets/js/13.cdd10ff5.js",
    "revision": "08cf76761939efed18d2693811bb8405"
  },
  {
    "url": "assets/js/14.e4fe34f0.js",
    "revision": "453905dbc961d0013ebeb1eae1e0b8b4"
  },
  {
    "url": "assets/js/15.944f7a71.js",
    "revision": "6628652b4eae160cce4e94600fd13ea7"
  },
  {
    "url": "assets/js/16.368ecced.js",
    "revision": "56d98c8e7b9415827d23cf188af237c1"
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
    "url": "assets/js/app.e1c30e11.js",
    "revision": "da47d97ced8ec7e2361f6831131d4139"
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
    "revision": "ee65d4cd3c11a44f4d1481489f30ec3a"
  },
  {
    "url": "guide/apply-list-for-dapp.html",
    "revision": "e89cc89c757e2984ee561587635184b4"
  },
  {
    "url": "guide/connect-wallet-for-dapp.html",
    "revision": "1d2812432f297fde92d327ff3c9f157c"
  },
  {
    "url": "guide/index.html",
    "revision": "f034929adc97ffa6e6dbe71b0f1588da"
  },
  {
    "url": "guide/resources.html",
    "revision": "142ae14e73d60b228482ddc3c633212d"
  },
  {
    "url": "guide/switch-network-for-dapp.html",
    "revision": "a713fdfb3de2d28b49ee4ab94347afc1"
  },
  {
    "url": "guide/webview-function.html",
    "revision": "dab2c8f1162d453fa56a2ec1b0504183"
  },
  {
    "url": "js/extend.js",
    "revision": "a25ae269ada2ae0df9ccb8c171af97be"
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
