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
    "revision": "c2bb68b2d8060b2811f0509301a54b59"
  },
  {
    "url": "assets/css/0.styles.00514bcc.css",
    "revision": "f6e142f5c9defa76d1b7b37a62aad7b0"
  },
  {
    "url": "assets/img/isBitKeep.578a705b.png",
    "revision": "578a705b3cec52f927a70951d8107b72"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.184c7ef0.js",
    "revision": "987f6cae727c8760addcc14c3cfd17b1"
  },
  {
    "url": "assets/js/11.03548870.js",
    "revision": "6b359fbe8851c0fb277b4e74315eaf4d"
  },
  {
    "url": "assets/js/12.f277fe65.js",
    "revision": "9d70c419282429db7190c6a4b48b2be0"
  },
  {
    "url": "assets/js/13.012088ae.js",
    "revision": "9c5cb013b98eaa1980a6c2107d7df282"
  },
  {
    "url": "assets/js/14.2545825d.js",
    "revision": "5ea8f794f758bfbe57d1905b69427ae8"
  },
  {
    "url": "assets/js/15.4a011673.js",
    "revision": "e70318a65830b9ab1beb995d535649da"
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
    "url": "assets/js/9.a9af465a.js",
    "revision": "1ac2166b5959e50c2e88b659a76bea06"
  },
  {
    "url": "assets/js/app.760bca50.js",
    "revision": "8300b728b5b7aae7e468296f1ceb10a6"
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
    "revision": "bbaad8cfdba1b550b4a445a81a53929d"
  },
  {
    "url": "guide/apply-list-for-dapp.html",
    "revision": "8fe90068312a7ada22084ee717506758"
  },
  {
    "url": "guide/connect-wallet-for-dapp.html",
    "revision": "e5768313c51a612e3a0560f94a57f465"
  },
  {
    "url": "guide/how-to-connect.html",
    "revision": "7ee65262b30054d3aea51fabcb490c0f"
  },
  {
    "url": "guide/index.html",
    "revision": "7336910534f00799a64fdfc64a94b3a5"
  },
  {
    "url": "guide/resources.html",
    "revision": "6b63d1fc1d2033cf9ba95a5470c3369d"
  },
  {
    "url": "guide/switch-network-for-dapp.html",
    "revision": "492cfd176847ac0d6a3acc004b74652b"
  },
  {
    "url": "guide/webview-function.html",
    "revision": "2a0781de6e7e0e950a075db36defe322"
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
