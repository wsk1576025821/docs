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
    "revision": "5b8226e03035d55f4c79e45147136eb8"
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
    "url": "assets/js/10.95201bfd.js",
    "revision": "fa4dafa7356c651176a0a306dabad6a9"
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
    "url": "assets/js/13.1251d660.js",
    "revision": "f543a060998f194e3323d71e1a12ab64"
  },
  {
    "url": "assets/js/14.637aad9e.js",
    "revision": "fe44298aa469690e1e6e2587220270f6"
  },
  {
    "url": "assets/js/15.d4c4ceab.js",
    "revision": "815ac18040e23ef0e76cae4ec1e6f2ca"
  },
  {
    "url": "assets/js/16.1906610c.js",
    "revision": "7bf0c98f9cbf3b25a76e97f17df1e80e"
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
    "url": "assets/js/9.0755b0cd.js",
    "revision": "ce879633269e2b3168dd98373ac5e542"
  },
  {
    "url": "assets/js/app.ad5e7e0a.js",
    "revision": "342e55d20971d813cd3ec0c29ceef9b0"
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
    "revision": "864ed9687ceafa080ceca05c91b5827f"
  },
  {
    "url": "guide/apply-list-for-dapp.html",
    "revision": "4ac0655ecb76194c103aa2ba454ebb90"
  },
  {
    "url": "guide/connect-wallet-for-dapp.html",
    "revision": "fa7e117b2538dae14c7dc489ca37a147"
  },
  {
    "url": "guide/how-to-connect.html",
    "revision": "82dbad634316c499bb1fd3b67cc8a28a"
  },
  {
    "url": "guide/index.html",
    "revision": "664beb4bc86fc8105759ea3d60bf246e"
  },
  {
    "url": "guide/resources.html",
    "revision": "2cba267e8b3f7c75d774a9806ec795ca"
  },
  {
    "url": "guide/switch-network-for-dapp.html",
    "revision": "57a367d13907e0a17c5a7b53246b6122"
  },
  {
    "url": "guide/webview-function.html",
    "revision": "bfd1216cd446efa6e5e5a1ea750e5df0"
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
