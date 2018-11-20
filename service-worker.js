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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8789b18a599bd274ef61ed2bb7f3a621"
  },
  {
    "url": "assets/css/0.styles.6dae4db7.css",
    "revision": "44de3c5579b46be8d88f139f6a3ea065"
  },
  {
    "url": "assets/img/event.6f106569.svg",
    "revision": "6f106569242dfa7f15270dc76ab7c55f"
  },
  {
    "url": "assets/img/light.3a0c5cf8.svg",
    "revision": "3a0c5cf8ce37c647e43f2f5fc3e3275c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.d349688f.js",
    "revision": "0933e6f6073cb0f6d4dddc19ca0a86e8"
  },
  {
    "url": "assets/js/3.b115414e.js",
    "revision": "0357b5da0be4c79825afa7538e36f442"
  },
  {
    "url": "assets/js/4.405836b6.js",
    "revision": "5f5e93b0b075e58f7557b0e6508acd58"
  },
  {
    "url": "assets/js/5.5882a681.js",
    "revision": "ce69b50b587c82242d996e73ac1155d9"
  },
  {
    "url": "assets/js/6.3c5f2f7b.js",
    "revision": "28fb77f6fbc29720636835f98dfa449a"
  },
  {
    "url": "assets/js/app.df630058.js",
    "revision": "c9ce98e12725eaefb2f44393c5d05611"
  },
  {
    "url": "bar.html",
    "revision": "cbcfe3ad7a7739402801d1cfd9da8df0"
  },
  {
    "url": "index.html",
    "revision": "9343df4f7b7d2992314f5e08cb93e435"
  },
  {
    "url": "layout.html",
    "revision": "737f568973e24f7284848e9ef385b3b7"
  },
  {
    "url": "logo.png",
    "revision": "a53179ca13039218c56cb6bce42e3aa6"
  },
  {
    "url": "menu.html",
    "revision": "44731835e69ff666dbb45af26bb10951"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
