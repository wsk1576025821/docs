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
    "revision": "7d950472075f2d247bfc3c3a572275bb"
  },
  {
    "url": "assets/css/0.styles.80ef512f.css",
    "revision": "f745909901da1355b2d9fb116500df2f"
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
    "url": "assets/js/10.528894d2.js",
    "revision": "7691183d2008f272398df0b822b3d15b"
  },
  {
    "url": "assets/js/11.4981fe8c.js",
    "revision": "f66591233a71dc94463d8388a3b7c0da"
  },
  {
    "url": "assets/js/12.18e91d2e.js",
    "revision": "fb24ae469016c8c2757b0e0e649fd9df"
  },
  {
    "url": "assets/js/13.4ce5b9d1.js",
    "revision": "7b880162f4c1995179c1c1d23f3b91c2"
  },
  {
    "url": "assets/js/14.ac402c15.js",
    "revision": "f38f23513b848cfe9b9c5134545c28b6"
  },
  {
    "url": "assets/js/15.307290e7.js",
    "revision": "0c783af3e5b5887b1dff20b98010125f"
  },
  {
    "url": "assets/js/16.9c93f77f.js",
    "revision": "79da83108d5961ef81a82cedb2671460"
  },
  {
    "url": "assets/js/17.132f9e37.js",
    "revision": "fff7eb04988cdc0f3757a0f0bdf8af6d"
  },
  {
    "url": "assets/js/4.4c7409da.js",
    "revision": "0cc7ca2e522148f6d6e8cf636bf1d211"
  },
  {
    "url": "assets/js/5.7b40d205.js",
    "revision": "d837e4b5cc8e336ab968694f7dba87c3"
  },
  {
    "url": "assets/js/6.a16430af.js",
    "revision": "27daaf321277f1c62b0cd5644217e2b6"
  },
  {
    "url": "assets/js/7.bf1fef29.js",
    "revision": "abe0b477f84b78ca2afeebc0b8c0a7eb"
  },
  {
    "url": "assets/js/8.91c97479.js",
    "revision": "bb9882466bfc0c9cd32fd08de8b3cbaf"
  },
  {
    "url": "assets/js/9.6925e0d4.js",
    "revision": "696984cfc2d423872248c7a829fa26b2"
  },
  {
    "url": "assets/js/app.84c24261.js",
    "revision": "982d714ad6abaf8a0c5f75c9972adab6"
  },
  {
    "url": "assets/js/vendors~docsearch.fdd8a010.js",
    "revision": "581a5b4c541e9463dc178f120623529d"
  },
  {
    "url": "assets/js/vendors~notification.e64ff089.js",
    "revision": "60f80241bc1086602f2721767abc0a52"
  },
  {
    "url": "bitkeep-icon.svg",
    "revision": "69f22bf7ea307329c76f302d2c3b4928"
  },
  {
    "url": "faq/index.html",
    "revision": "0dace2c2230430bb963b2ef2c62acf4f"
  },
  {
    "url": "guide/apply-list-for-dapp.html",
    "revision": "0b49165844b1bde3cf5da8a631e0ac0d"
  },
  {
    "url": "guide/connect-wallet-for-dapp.html",
    "revision": "8ca9ec3b274d9af88c9ffc3072fccfd4"
  },
  {
    "url": "guide/index.html",
    "revision": "0759ae8bdb357d906f4d6c3e7e66b3f8"
  },
  {
    "url": "guide/resources.html",
    "revision": "7dd48a49090891898153ad6fef56a8c4"
  },
  {
    "url": "guide/switch-network-for-dapp.html",
    "revision": "774b7c68f41dd96251398ffc67a3c7e3"
  },
  {
    "url": "guide/webview-function.html",
    "revision": "da42b9b4a009027a6e467de9b0f09da1"
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
