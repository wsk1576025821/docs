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
    "revision": "f50dbe12c4e47f91d979951ba331069c"
  },
  {
    "url": "assets/css/0.styles.86622e16.css",
    "revision": "6e3238ed881ec89d4776cfd201b307e3"
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
    "url": "assets/js/15.7972cc80.js",
    "revision": "831b777d64e987f173731b6bc5659e8d"
  },
  {
    "url": "assets/js/16.34ecc1e5.js",
    "revision": "2265cf006a56054fab35c5681a022ba9"
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
    "url": "assets/js/9.57a31b28.js",
    "revision": "76108ca598eab5ec5ab4fb1b04651721"
  },
  {
    "url": "assets/js/app.3a94b198.js",
    "revision": "1ed79151f2e3e2818a61c5cfa2d657b0"
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
    "revision": "534061af560257b1472914d559990622"
  },
  {
    "url": "guide/apply-list-for-dapp.html",
    "revision": "9c4a41b7358e35cabd51ff170b540e3d"
  },
  {
    "url": "guide/connect-wallet-for-dapp.html",
    "revision": "14a7de00ef0b232c0e20b915bc9a0446"
  },
  {
    "url": "guide/how-to-connect.html",
    "revision": "c19b2dc9d8eb7409b8306d439da35cb4"
  },
  {
    "url": "guide/index.html",
    "revision": "7a62f33adae5aab8fd5826cbefdedd3d"
  },
  {
    "url": "guide/resources.html",
    "revision": "e0b2eebf4eac95a56db5b86397396ebe"
  },
  {
    "url": "guide/switch-network-for-dapp.html",
    "revision": "67f0d1db96ab195bf9f0d3fcfda565ed"
  },
  {
    "url": "guide/webview-function.html",
    "revision": "283f610fdd50cd3c6bf1277823e54707"
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
