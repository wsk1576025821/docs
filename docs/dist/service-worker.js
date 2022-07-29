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
    "revision": "018d03e9e23d059ce046a59767242587"
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
    "url": "assets/img/walletconnect.b266ad99.jpg",
    "revision": "b266ad998f6bc898235e34639f11e950"
  },
  {
    "url": "assets/js/10.182ae558.js",
    "revision": "1b15ade74be90b6d6ac3561184060413"
  },
  {
    "url": "assets/js/11.0f57b3d6.js",
    "revision": "02347d0fc95449407d15200d6eb7493b"
  },
  {
    "url": "assets/js/12.093a897d.js",
    "revision": "8fa5419b3011e1c9ce49eb7fa56f68cd"
  },
  {
    "url": "assets/js/13.2835b3ce.js",
    "revision": "c0f012a1d4bbc5b74138959406694f92"
  },
  {
    "url": "assets/js/14.1a9227a5.js",
    "revision": "4aeb64541a2a63021c7e977d1840a81f"
  },
  {
    "url": "assets/js/15.6f486b2e.js",
    "revision": "0efb39502f1a3c8d6caf6fde6b718252"
  },
  {
    "url": "assets/js/16.4389a980.js",
    "revision": "7eed644371f42794364c593511abd95a"
  },
  {
    "url": "assets/js/17.a82cf277.js",
    "revision": "390ebf5e039b2cc9bac3704481ecbaee"
  },
  {
    "url": "assets/js/4.6fe9260f.js",
    "revision": "48099cb06f48ceaaf933b4e4a1d099d7"
  },
  {
    "url": "assets/js/5.5a733cec.js",
    "revision": "443587adf605c3c67dff3ae19127d01b"
  },
  {
    "url": "assets/js/6.15b369c6.js",
    "revision": "501dcb7ed5efab60e5ce78ed0f3360dc"
  },
  {
    "url": "assets/js/7.7b6e24f1.js",
    "revision": "4fa607dfe37b1c0206597cfba1bc2914"
  },
  {
    "url": "assets/js/8.c0f5c3ad.js",
    "revision": "5bfec724a98934d406880075122f1576"
  },
  {
    "url": "assets/js/9.fc581674.js",
    "revision": "52f27c61f9fee0c287f2fe60b1dc3bee"
  },
  {
    "url": "assets/js/app.a215dd2c.js",
    "revision": "dc83ef680d129ea7d6df8a61c120c9b8"
  },
  {
    "url": "assets/js/vendors~docsearch.008c7241.js",
    "revision": "1b77e25d42f79fc9f6aaa72ef7b833b3"
  },
  {
    "url": "assets/js/vendors~notification.6eee5875.js",
    "revision": "1d9890f5458d59dba110b2fd4446def7"
  },
  {
    "url": "bitkeep-icon.svg",
    "revision": "69f22bf7ea307329c76f302d2c3b4928"
  },
  {
    "url": "faq/index.html",
    "revision": "de9be2be5d990ec6000ff238bd5f7f31"
  },
  {
    "url": "guide/apply-list-for-dapp.html",
    "revision": "6844be41cd815a8bec18833ea08d8776"
  },
  {
    "url": "guide/connect-wallet-for-dapp.html",
    "revision": "df7ba7024e3f54bc0c2825134ffbce46"
  },
  {
    "url": "guide/index.html",
    "revision": "ac735b182c95be7efeebfe87d87e0973"
  },
  {
    "url": "guide/resources.html",
    "revision": "122fa63ff1e4628fdfa07a7a1d097d51"
  },
  {
    "url": "guide/switch-network-for-dapp.html",
    "revision": "ba63d68be30f71443ddb04f62d4796f3"
  },
  {
    "url": "guide/webview-function.html",
    "revision": "669d7107ef4b01eeb74a1d26c9b86c0c"
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
