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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e82941e8d1a78b3b683453b5710bc3d4"
  },
  {
    "url": "about/index.html",
    "revision": "0c8133b3a208f5c70d6efd08fe820b70"
  },
  {
    "url": "assets/css/1.styles.caa51e7b.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.f05d54be.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/styles.fe9b0efb.css",
    "revision": "66e0d44e04b10a4fa22e8bbaafdd66bd"
  },
  {
    "url": "assets/img/blog.c5a9a0ab.jpg",
    "revision": "c5a9a0ab118e42e02fb9a35fbeb71421"
  },
  {
    "url": "assets/img/home.6a04dd0a.jpg",
    "revision": "6a04dd0a9c5f7ee575afdc6f79e33da2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.caa51e7b.js",
    "revision": "e65dd1576d56a0d3822658485d3daeb9"
  },
  {
    "url": "assets/js/10.897e8e69.js",
    "revision": "7bfe95eab47746bc76ab65e83b00800f"
  },
  {
    "url": "assets/js/11.d51f251d.js",
    "revision": "d242473ef772da33bc3964585eee932c"
  },
  {
    "url": "assets/js/12.65221ed5.js",
    "revision": "1630d6db518358f9a07420138b3bfa91"
  },
  {
    "url": "assets/js/13.17a00fe6.js",
    "revision": "bd763646d7833fd808a08d7ec3148803"
  },
  {
    "url": "assets/js/14.d581b8f7.js",
    "revision": "4802b0e4845af1aec479ae5d1895f15e"
  },
  {
    "url": "assets/js/2.f05d54be.js",
    "revision": "222908d589eec61e1cbf4d7b1bf9811b"
  },
  {
    "url": "assets/js/3.35f61f0c.js",
    "revision": "ce198d0149fa0259bd8eaba200b51a73"
  },
  {
    "url": "assets/js/4.b8bacb26.js",
    "revision": "74d5fd98176d876e322c7b06c01a4cda"
  },
  {
    "url": "assets/js/5.8ee7a0bf.js",
    "revision": "5dd9580f94bb2bdf085485f25193eef2"
  },
  {
    "url": "assets/js/6.6706fa76.js",
    "revision": "601b208dd2a712af72c2f76ab852fbaa"
  },
  {
    "url": "assets/js/7.1108b869.js",
    "revision": "b69f99ac4e259c4470d8a7deaa80d7f9"
  },
  {
    "url": "assets/js/8.9890427c.js",
    "revision": "255979128d843753e63d5299ffd1dcdb"
  },
  {
    "url": "assets/js/9.b60534e3.js",
    "revision": "b831d31d3fb2fee114118441f97e7b73"
  },
  {
    "url": "assets/js/app.fe9b0efb.js",
    "revision": "4a471db7acc8dd0553bd5da44244dc70"
  },
  {
    "url": "blog/canvas2Image.html",
    "revision": "c23f61dd908ad7d58e4edfe931fc7872"
  },
  {
    "url": "blog/elegant-code.html",
    "revision": "28504b4501d2cb2cd3b33ae730adec2d"
  },
  {
    "url": "blog/ES6-study.html",
    "revision": "2ee7c2911e2a1530d60c960f646d7fec"
  },
  {
    "url": "blog/eslint-rules-list.html",
    "revision": "8c4b9ddc250c36b0b366ff29bdc7c4e8"
  },
  {
    "url": "blog/github-use-notes.html",
    "revision": "2c4f3d01dc89fdee86fc657e5d705230"
  },
  {
    "url": "blog/mac-command.html",
    "revision": "4e4a974390e9dd93d4c922427fdc942f"
  },
  {
    "url": "blog/mobile-hack.html",
    "revision": "0b1d106eb16a746e7e59055facda738c"
  },
  {
    "url": "blog/vue-source-study.html",
    "revision": "2e4ffe28f093e98bbdf0da971bf20795"
  },
  {
    "url": "blog/vuepress-theme-toos.html",
    "revision": "19b580a1b7c974213a8dbb8060714efc"
  },
  {
    "url": "img/blog.jpg",
    "revision": "c5a9a0ab118e42e02fb9a35fbeb71421"
  },
  {
    "url": "img/home.gif",
    "revision": "c1cf7dff0b60d2dfe61f39efdf377f30"
  },
  {
    "url": "img/home.jpg",
    "revision": "6a04dd0a9c5f7ee575afdc6f79e33da2"
  },
  {
    "url": "img/logo.png",
    "revision": "6eff31aa92ee6d233df8874ac4de6b8d"
  },
  {
    "url": "index.html",
    "revision": "75f3b9ee5cbc42dbbc83524cd6bb47b3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
