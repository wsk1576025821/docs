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
    "revision": "371750b3b31e4a09ad5847bbbf75b361"
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
    "url": "assets/js/10.1d6d0df9.js",
    "revision": "6bde8a8893004d7f2a9d5d111dfb15ac"
  },
  {
    "url": "assets/js/11.03548870.js",
    "revision": "6b359fbe8851c0fb277b4e74315eaf4d"
  },
  {
    "url": "assets/js/12.66479485.js",
    "revision": "4074ba7e03ac47155d7f6da1ed9a776e"
  },
  {
    "url": "assets/js/13.552c1b43.js",
    "revision": "f3f661209008cceceb34ef67a7240d1b"
  },
  {
    "url": "assets/js/14.2545825d.js",
    "revision": "5ea8f794f758bfbe57d1905b69427ae8"
  },
  {
    "url": "assets/js/15.2a08bfea.js",
    "revision": "80272a9693be6059095edf637246c259"
  },
  {
    "url": "assets/js/16.f11edc9c.js",
    "revision": "2b9aaae390e7a87e63f9e5d1236d0e87"
  },
  {
    "url": "assets/js/17.bee99943.js",
    "revision": "069515c8ff4918cdc49be10121ebf6d0"
  },
  {
    "url": "assets/js/18.b268993d.js",
    "revision": "ac07c2ba01064a1bf65d2c5228f2158b"
  },
  {
    "url": "assets/js/4.a4145433.js",
    "revision": "6c81796c72478f88ee5c607dcd05a7b5"
  },
  {
    "url": "assets/js/5.c8319a50.js",
    "revision": "f9783001366afedb9fc4e95b307c1379"
  },
  {
    "url": "assets/js/6.a91be2c2.js",
    "revision": "82ad96505df6f1c2a7d8e48877a2f83d"
  },
  {
    "url": "assets/js/7.e34a9b8e.js",
    "revision": "0a25a12649e2fdbefeb99ec41356ac24"
  },
  {
    "url": "assets/js/8.e298b187.js",
    "revision": "f803fb2c0faa720071ccd9014da470a6"
  },
  {
    "url": "assets/js/9.fbea18e4.js",
    "revision": "27b5148cfc8129cc90ea036dc6097df3"
  },
  {
    "url": "assets/js/app.c4b3ba25.js",
    "revision": "40792da572bf274de5cbdf900bcbdde8"
  },
  {
    "url": "assets/js/vendors~docsearch.21f21cd2.js",
    "revision": "eef0e2a94dc0a8e6971dabc305f2c1d2"
  },
  {
    "url": "assets/js/vendors~notification.5d550903.js",
    "revision": "d1dc1fec755fe364777c541bd66095cb"
  },
  {
    "url": "bitkeep-icon.svg",
    "revision": "69f22bf7ea307329c76f302d2c3b4928"
  },
  {
    "url": "faq/index.html",
    "revision": "7831b38630800de472e5c23a6d704e49"
  },
  {
    "url": "guide/apply-list-for-dapp.html",
    "revision": "e28c044e33999db67d4abd0faa3019a6"
  },
  {
    "url": "guide/connect-wallet-for-dapp.html",
    "revision": "4ddf9b04317193d21d203740faeadbec"
  },
  {
    "url": "guide/how-to-connect.html",
    "revision": "87b58019e95d266645462453d9b83a1c"
  },
  {
    "url": "guide/index.html",
    "revision": "ff444d5984b79cc4e8d690fd4fe02865"
  },
  {
    "url": "guide/resources.html",
    "revision": "517cdabe9fd536175033cb6428b418d5"
  },
  {
    "url": "guide/switch-network-for-dapp.html",
    "revision": "eef861fd5d9bfdad8caf1a08003fded6"
  },
  {
    "url": "guide/webview-function.html",
    "revision": "a9ddece100a1c6b828bbba854240ab29"
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
