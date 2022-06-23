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
    "revision": "6c6b3309dacc0524a6de524d89d5177a"
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
    "url": "assets/js/13.a900ab6e.js",
    "revision": "08cb263c28254e66b29b6e60bfee1fc8"
  },
  {
    "url": "assets/js/14.0ad17711.js",
    "revision": "03f1534dfbffb8d0933afb5830adfaac"
  },
  {
    "url": "assets/js/15.944f7a71.js",
    "revision": "6628652b4eae160cce4e94600fd13ea7"
  },
  {
    "url": "assets/js/16.29648b23.js",
    "revision": "d4eaca6a1172c15be42a74a393ecfb48"
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
    "url": "assets/js/9.7401a1d8.js",
    "revision": "97978b967ac216fd02126db61d1f0fd8"
  },
  {
    "url": "assets/js/app.61a56d7c.js",
    "revision": "0da198db02b4f106933c0d6f3fca39ae"
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
    "revision": "b45027f8297f17eb5094c96000bff71c"
  },
  {
    "url": "guide/apply-list-for-dapp.html",
    "revision": "04e10c82838955bbb59a938c98656b6a"
  },
  {
    "url": "guide/connect-wallet-for-dapp.html",
    "revision": "4f42cfcd6a308ac914f143d78342708a"
  },
  {
    "url": "guide/index.html",
    "revision": "9486ea0cd5c4f5365907d90df60eb3bb"
  },
  {
    "url": "guide/resources.html",
    "revision": "3346533b39aa19fe94f0cb81db63b8c1"
  },
  {
    "url": "guide/switch-network-for-dapp.html",
    "revision": "5b287537606ea1578bc92aed26972136"
  },
  {
    "url": "guide/webview-function.html",
    "revision": "d38d52c840f9e5e0922502c786bf8602"
  },
  {
    "url": "js/extend.js",
    "revision": "73e65209ec8f6a97c2445436f85ba3b4"
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
