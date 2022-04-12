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
    "revision": "48129a802cb35fd69657ec5cf5caf75e"
  },
  {
    "url": "assets/css/0.styles.86622e16.css",
    "revision": "6e3238ed881ec89d4776cfd201b307e3"
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
    "url": "assets/js/10.95201bfd.js",
    "revision": "fa4dafa7356c651176a0a306dabad6a9"
  },
  {
    "url": "assets/js/11.03548870.js",
    "revision": "6b359fbe8851c0fb277b4e74315eaf4d"
  },
  {
    "url": "assets/js/12.30fe797d.js",
    "revision": "53e5b86f7438880657a8cd8d81350821"
  },
  {
    "url": "assets/js/13.d032bf5d.js",
    "revision": "14e03eb6d5e727e94063e2b7926916b7"
  },
  {
    "url": "assets/js/14.f3bae605.js",
    "revision": "a32e719d8ad5aedeb600e3d889ce9424"
  },
  {
    "url": "assets/js/15.da7c4f88.js",
    "revision": "6653c1120d1ad998d7d7e8de647ecdf2"
  },
  {
    "url": "assets/js/16.8d6d8156.js",
    "revision": "f4df01b60efbb8cbcad85a9eb08aa9cf"
  },
  {
    "url": "assets/js/17.4ea6500e.js",
    "revision": "0cc5edee040d82981892b764cfdd495e"
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
    "url": "assets/js/7.9a4f873b.js",
    "revision": "e30a2dcd7f1d561b51e6ed65442163e0"
  },
  {
    "url": "assets/js/8.2c349e50.js",
    "revision": "1b8956522f9cfc81f503209170341442"
  },
  {
    "url": "assets/js/9.b85f2127.js",
    "revision": "2519f8f2f529bedb2315fceb4e8b1121"
  },
  {
    "url": "assets/js/app.932e2609.js",
    "revision": "d01b26c93c07b77398407c17e447d1db"
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
    "revision": "445e5ffb478f6fc9702c74302c147dfd"
  },
  {
    "url": "guide/apply-list-for-dapp.html",
    "revision": "8e62785b4f4ad594d09771158a3dff3b"
  },
  {
    "url": "guide/connect-wallet-for-dapp.html",
    "revision": "fe326e3521133bbd189a6898c035cf26"
  },
  {
    "url": "guide/how-to-connect.html",
    "revision": "55ad5446f9d6e34b9c302f464092e4ee"
  },
  {
    "url": "guide/index.html",
    "revision": "42b6259922d1d9b53b9611bd2e999619"
  },
  {
    "url": "guide/resources.html",
    "revision": "bf43796647149eea3635e17d6a601731"
  },
  {
    "url": "guide/switch-network-for-dapp.html",
    "revision": "c3b8973a67471507e5fb3e994f93e16d"
  },
  {
    "url": "guide/webview-function.html",
    "revision": "6d115ad573baeab59e7dec395086ee09"
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
