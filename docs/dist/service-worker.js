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
    "revision": "d059bf9f41e8827688ec478a82a0c18c"
  },
  {
    "url": "assets/css/0.styles.00514bcc.css",
    "revision": "f6e142f5c9defa76d1b7b37a62aad7b0"
  },
  {
    "url": "assets/img/isBitkeep.578a705b.png",
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
    "url": "assets/js/12.626b7601.js",
    "revision": "120d3460867f2d115dbd47d680a05a1c"
  },
  {
    "url": "assets/js/13.1251d660.js",
    "revision": "f543a060998f194e3323d71e1a12ab64"
  },
  {
    "url": "assets/js/14.f3bae605.js",
    "revision": "a32e719d8ad5aedeb600e3d889ce9424"
  },
  {
    "url": "assets/js/15.701f56cc.js",
    "revision": "313d3af52b2fa7f9300b4d8cf3c4fe56"
  },
  {
    "url": "assets/js/16.f11edc9c.js",
    "revision": "2b9aaae390e7a87e63f9e5d1236d0e87"
  },
  {
    "url": "assets/js/17.7b179169.js",
    "revision": "0f615075f4d4a4b8bd196d20a34c0085"
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
    "url": "assets/js/9.d5650888.js",
    "revision": "20cd9ef5e65c541f03ba5f974fa5e918"
  },
  {
    "url": "assets/js/app.de91aec0.js",
    "revision": "a2e84b671579d855438440d3b3c57d3b"
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
    "revision": "aad01d295ea47f2bf123fb33e311f3be"
  },
  {
    "url": "guide/apply-list-for-dapp.html",
    "revision": "6c4cb21a8bf1ef48e1a7cec89f1875ad"
  },
  {
    "url": "guide/connect-wallet-for-dapp.html",
    "revision": "3e99c10015d3ec13213c92a7949fdf81"
  },
  {
    "url": "guide/how-to-connect.html",
    "revision": "69db05ef599e21d65a9c1cc1ccd3397d"
  },
  {
    "url": "guide/index.html",
    "revision": "b1aa1d386e533feafc88af05456fbb8c"
  },
  {
    "url": "guide/resources.html",
    "revision": "67b3bfb787f02636e21e9c3446f77ffc"
  },
  {
    "url": "guide/switch-network-for-dapp.html",
    "revision": "8e6040a5f8956d6496534867a23497b0"
  },
  {
    "url": "guide/webview-function.html",
    "revision": "4a00cab1cfa75a801bd1d33e63c6213d"
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
