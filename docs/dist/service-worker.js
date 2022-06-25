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
    "revision": "8675548cec640b1b6afae12b6be2116a"
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
    "url": "assets/js/10.56da1b67.js",
    "revision": "78e94a0cdb65feae724a72e64b4c3b6b"
  },
  {
    "url": "assets/js/11.457c719d.js",
    "revision": "ec7f6773c239b36e804f3c6d98c7b2a1"
  },
  {
    "url": "assets/js/12.2119463f.js",
    "revision": "0b81905018dc363d21e940a8bf00b454"
  },
  {
    "url": "assets/js/13.e28a2e2f.js",
    "revision": "f015f2392214613d0b45035eefa6dc42"
  },
  {
    "url": "assets/js/14.bc14a345.js",
    "revision": "895c35e95e9555016edaf745be1ffe88"
  },
  {
    "url": "assets/js/15.de834787.js",
    "revision": "7395b25af0cde3d7df249f0768a3f2bf"
  },
  {
    "url": "assets/js/16.bfc3b6f6.js",
    "revision": "a3d3cf4915a9b50f5174725a167068b5"
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
    "url": "assets/js/6.9b7c9809.js",
    "revision": "f20d11299172632c7eae8665cf4b8356"
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
    "url": "assets/js/app.0d941b08.js",
    "revision": "682252c6fde114f7aec04bc4f0035ac6"
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
    "revision": "fc9a7e4602f51ea8380e63040a1d905d"
  },
  {
    "url": "guide/apply-list-for-dapp.html",
    "revision": "ca8e931d80c5745d8b1e71e17b28d2a3"
  },
  {
    "url": "guide/connect-wallet-for-dapp.html",
    "revision": "604b56ae86acbcd1ac8459da7a05abf1"
  },
  {
    "url": "guide/index.html",
    "revision": "5eb1e4343e594a17ed33f5569ff57bd6"
  },
  {
    "url": "guide/resources.html",
    "revision": "f0e42be2ea44d95655d6a88a90f82154"
  },
  {
    "url": "guide/switch-network-for-dapp.html",
    "revision": "fa602d38bfed294bfae58ead00e6b891"
  },
  {
    "url": "guide/webview-function.html",
    "revision": "0c9338843f65b77c224a466bae7175bb"
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
