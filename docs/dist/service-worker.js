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
    "revision": "fd3e0c34ec0301bc4e06651dc43505d3"
  },
  {
    "url": "assets/css/0.styles.e2d409ab.css",
    "revision": "aa680d44cc49bbf4a965066e88037dde"
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
    "url": "assets/img/m-wallet.a16784c1.jpg",
    "revision": "a16784c1d31be66991a823e1fadf7460"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/walletconnect.b266ad99.jpg",
    "revision": "b266ad998f6bc898235e34639f11e950"
  },
  {
    "url": "assets/js/10.6453e5d7.js",
    "revision": "64b276134d4ab32e5180ae8f2d2d15a5"
  },
  {
    "url": "assets/js/11.457c719d.js",
    "revision": "ec7f6773c239b36e804f3c6d98c7b2a1"
  },
  {
    "url": "assets/js/12.007984d6.js",
    "revision": "b017173d161361ba18fe57d104ebf91f"
  },
  {
    "url": "assets/js/13.9ef810e6.js",
    "revision": "df49dbde3ebea42a6d49ee60b947a13a"
  },
  {
    "url": "assets/js/14.bb715354.js",
    "revision": "5825e6710d1eacc45f40f66adacdf569"
  },
  {
    "url": "assets/js/15.c5864cce.js",
    "revision": "cc070030e5bb991f18cb2e0c254cf9ec"
  },
  {
    "url": "assets/js/16.d43b1a86.js",
    "revision": "b17255ce070e160c17c8e162f87c9d49"
  },
  {
    "url": "assets/js/17.a891ca86.js",
    "revision": "d8f8627065447110b82846801c33fcec"
  },
  {
    "url": "assets/js/4.7e4ab351.js",
    "revision": "3c4be1f907f2bc695f94426aaaa21c4e"
  },
  {
    "url": "assets/js/5.9782142b.js",
    "revision": "33449fcdeaee00a64f46963fdc877d2e"
  },
  {
    "url": "assets/js/6.2432d3e8.js",
    "revision": "a623f64edf3ad0ca621445263c1c7049"
  },
  {
    "url": "assets/js/7.1b8d74ce.js",
    "revision": "41a759fb535e7e3e820c2a83b964b616"
  },
  {
    "url": "assets/js/8.2b77d202.js",
    "revision": "b71fb2348fa67f806f033de87b432771"
  },
  {
    "url": "assets/js/9.edca1014.js",
    "revision": "e0500425bb9a3d569742e38368d5d7b2"
  },
  {
    "url": "assets/js/app.744c26af.js",
    "revision": "83cc9642e24160d10a28295c95db1165"
  },
  {
    "url": "assets/js/vendors~docsearch.8062fbe5.js",
    "revision": "cc77e6ed5b58aaeb908f031ae7146fb3"
  },
  {
    "url": "assets/js/vendors~notification.9ceea4d2.js",
    "revision": "f697972ee0911d731342060fe1ad409b"
  },
  {
    "url": "bitkeep-icon.svg",
    "revision": "69f22bf7ea307329c76f302d2c3b4928"
  },
  {
    "url": "faq/index.html",
    "revision": "a587fe754c010953c67fc12b2d1a16e0"
  },
  {
    "url": "guide/apply-list-for-dapp.html",
    "revision": "53253d36d1f02a6b0d5afba3e3465b54"
  },
  {
    "url": "guide/connect-wallet-for-dapp.html",
    "revision": "c6118bf0d85b4ea75353fa1713f259d3"
  },
  {
    "url": "guide/index.html",
    "revision": "0bb9eb81165af8108ff227cc2afdc354"
  },
  {
    "url": "guide/resources.html",
    "revision": "ddc098f11c96ce1fb0a40f18bf321d61"
  },
  {
    "url": "guide/switch-network-for-dapp.html",
    "revision": "0bb6939f2fbb4e9be4eb9e170b5ae5cf"
  },
  {
    "url": "guide/webview-function.html",
    "revision": "9d6f1af3f0c8814b0347874cb19cc290"
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
