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
    "revision": "6cbb5667ec91333bb48f7b01aedd461d"
  },
  {
    "url": "assets/css/0.styles.f93fc0d5.css",
    "revision": "fd6d08029fa3a7a5b5da6b1786ff99a5"
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
    "url": "assets/js/10.f264b94b.js",
    "revision": "566a14a0d631cb4ebc66ca014bcba47e"
  },
  {
    "url": "assets/js/11.51155cd8.js",
    "revision": "fe9ffb8b33ac19e23222d83be6bb5aa2"
  },
  {
    "url": "assets/js/12.85617cda.js",
    "revision": "245091d516dd5ec02764f3f4e81b3d1a"
  },
  {
    "url": "assets/js/13.667ce207.js",
    "revision": "cc5b5ca49be3c76059f3b2005bfb3e9c"
  },
  {
    "url": "assets/js/14.ff45ee07.js",
    "revision": "136764de25c99c0c8d71f671b7f33f21"
  },
  {
    "url": "assets/js/15.f90a6012.js",
    "revision": "9cf3bb8e05f8b3c777bab6b48ba0fdca"
  },
  {
    "url": "assets/js/16.5dd51ab7.js",
    "revision": "343ccd55797be78f626348ebb1173f5f"
  },
  {
    "url": "assets/js/17.3b647272.js",
    "revision": "dddf5c391e37741bc48e8e95b5a1c7da"
  },
  {
    "url": "assets/js/4.fc2732dd.js",
    "revision": "ba7dfe67bfd0207ed09e906305d6176d"
  },
  {
    "url": "assets/js/5.dfdf6295.js",
    "revision": "dd201e6dc8b21814ad5a143b3ec3ecc5"
  },
  {
    "url": "assets/js/6.77a3d535.js",
    "revision": "9dc4fdae90f03e056f74383c1cb4be84"
  },
  {
    "url": "assets/js/7.8f1b43cb.js",
    "revision": "d76d9210af05fff843325fa0ed7e129e"
  },
  {
    "url": "assets/js/8.e1f92b90.js",
    "revision": "ba5a6aba79fbd55ef0202242b0207036"
  },
  {
    "url": "assets/js/9.97f89567.js",
    "revision": "8f87a3e95bd674e09c4b1edf4f7750ba"
  },
  {
    "url": "assets/js/app.680cd450.js",
    "revision": "47f534500b4526dc4f6577d4aa263a6a"
  },
  {
    "url": "assets/js/vendors~docsearch.7cf4bc01.js",
    "revision": "807a6473a0eeb74b0a0da095c4604b89"
  },
  {
    "url": "assets/js/vendors~notification.858a3813.js",
    "revision": "2ff2dd5201c28dac4441f422082cf1ab"
  },
  {
    "url": "bitkeep-icon.svg",
    "revision": "69f22bf7ea307329c76f302d2c3b4928"
  },
  {
    "url": "faq/index.html",
    "revision": "b43b9d1b54fe93b6a532c2feae34099e"
  },
  {
    "url": "guide/apply-list-for-dapp.html",
    "revision": "eed6a9a553783fd4e244592eda1b2d4c"
  },
  {
    "url": "guide/connect-wallet-for-dapp.html",
    "revision": "8e9bba76a2e9178434351aa04e91737b"
  },
  {
    "url": "guide/index.html",
    "revision": "6fb9a283d373ba5f5c0f05c37a30363c"
  },
  {
    "url": "guide/resources.html",
    "revision": "4d600c8de2bdcc1f35f8e7e6f3883783"
  },
  {
    "url": "guide/switch-network-for-dapp.html",
    "revision": "200ffd57c2514fb6a82dc1df7dd74242"
  },
  {
    "url": "guide/webview-function.html",
    "revision": "2addf04415f0f3f374913243ba2e91fa"
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
