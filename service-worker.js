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
    "revision": "ade1f45a61fd6f294c7d9efbe17db130"
  },
  {
    "url": "archives/index.html",
    "revision": "9c96960afde2c3701e7e9e14ba384c60"
  },
  {
    "url": "assets/css/0.styles.95513f31.css",
    "revision": "b7ac3dfad0dfd056ba45081e89b9769e"
  },
  {
    "url": "assets/fonts/bbr.f32a0cd1.woff2",
    "revision": "f32a0cd13ac49e36df74467ecd2dceff"
  },
  {
    "url": "assets/fonts/Icon.4187678c.woff",
    "revision": "4187678c70c491cc0fbd880bfd24782a"
  },
  {
    "url": "assets/fonts/ir.1ac22b3a.woff2",
    "revision": "1ac22b3a85c6d7164927d192654ab170"
  },
  {
    "url": "assets/fonts/jsr.8ffec542.woff2",
    "revision": "8ffec5420781e499563421c2fbb4f84a"
  },
  {
    "url": "assets/fonts/lobster.fe012fb7.woff2",
    "revision": "fe012fb7b22e5776c4a2e91889068974"
  },
  {
    "url": "assets/fonts/ml.0a7c6df0.woff2",
    "revision": "0a7c6df06e85d978d096d4d18fd8d43d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.10b9e58b.js",
    "revision": "c8c14e526205f4dff51437ee0373ee0a"
  },
  {
    "url": "assets/js/10.f596138c.js",
    "revision": "5205f9893f794f666a8535b13e9ba11e"
  },
  {
    "url": "assets/js/11.b588e5cf.js",
    "revision": "c9eafa5874754fcdd9334651f9ea5207"
  },
  {
    "url": "assets/js/12.cd8e4eba.js",
    "revision": "2ca4dfc283f82443bf14e1323147696c"
  },
  {
    "url": "assets/js/13.c5843a04.js",
    "revision": "1b94713fef54f83d0c9753564e923217"
  },
  {
    "url": "assets/js/14.b5505c81.js",
    "revision": "6be9924500fc5995f9c45c7df49fe49d"
  },
  {
    "url": "assets/js/15.69befdd3.js",
    "revision": "e15b979c5405fb0a1d0e7867c2df4062"
  },
  {
    "url": "assets/js/16.cd85760d.js",
    "revision": "04bbbe0a96f1d49c0bc1297e0b12adbe"
  },
  {
    "url": "assets/js/17.480f00f4.js",
    "revision": "dd395b7ceea2dc976f6d3222efb7c8df"
  },
  {
    "url": "assets/js/18.127385ad.js",
    "revision": "10a94715f8376cb258457e1bf3316e46"
  },
  {
    "url": "assets/js/19.296ac939.js",
    "revision": "8344e7cad0ef16ce7f0246c5fee0274d"
  },
  {
    "url": "assets/js/20.e519eb3d.js",
    "revision": "f84bab01936379ba061203cc37da657f"
  },
  {
    "url": "assets/js/21.16dba249.js",
    "revision": "e7a53f046ac39c41882006464b4601e7"
  },
  {
    "url": "assets/js/22.86580401.js",
    "revision": "da2f6fd478ccee88a2256762dd26306a"
  },
  {
    "url": "assets/js/23.cde27296.js",
    "revision": "f103bceb6ea01337b156cb09ca1182a6"
  },
  {
    "url": "assets/js/24.9a7717de.js",
    "revision": "c2f6909a2ba66b109fad4b089ad37614"
  },
  {
    "url": "assets/js/25.bdc1c674.js",
    "revision": "6e240374dc5fd55183109bd9b911723f"
  },
  {
    "url": "assets/js/26.53ec9c6b.js",
    "revision": "fe33ba32afbec1a5e5e9f95589b268b9"
  },
  {
    "url": "assets/js/27.40fb7647.js",
    "revision": "339e5b61db3318c2e684850476ac1171"
  },
  {
    "url": "assets/js/28.aa37ce4a.js",
    "revision": "ee2764b558a92a0897da510c8b573af9"
  },
  {
    "url": "assets/js/29.7cc6d878.js",
    "revision": "fdc1c3bffad2ace0dadc7b0330e26557"
  },
  {
    "url": "assets/js/30.5812a85d.js",
    "revision": "3b572fbda371912068cf3e7a542b51da"
  },
  {
    "url": "assets/js/31.926ff2bd.js",
    "revision": "677533082a994db8affeddaa1980d0ba"
  },
  {
    "url": "assets/js/32.2ca33227.js",
    "revision": "f482ece980642399507d2f2b27178745"
  },
  {
    "url": "assets/js/33.4c27853a.js",
    "revision": "bb79f08196e376e4749219b78cc53528"
  },
  {
    "url": "assets/js/34.e45d986a.js",
    "revision": "0accdb040cad193dd935368c3a587f6c"
  },
  {
    "url": "assets/js/35.cf4950d5.js",
    "revision": "6dca201c081e8b8a8c367ccc1163012f"
  },
  {
    "url": "assets/js/36.6b5ccdc3.js",
    "revision": "01a477891f9b107effc90510fe88769a"
  },
  {
    "url": "assets/js/37.784ad4f2.js",
    "revision": "9d877e65b0a00877fb87a7f70bae7143"
  },
  {
    "url": "assets/js/38.8ff86a1a.js",
    "revision": "833e460304589d1eb5b28ee992c9f58f"
  },
  {
    "url": "assets/js/39.6ccac377.js",
    "revision": "ca8a8fbd834f5fb2d14c8762c556eb3b"
  },
  {
    "url": "assets/js/40.afea1885.js",
    "revision": "eb072db6a6c583fc555b35056341525f"
  },
  {
    "url": "assets/js/41.feec948e.js",
    "revision": "aa4ccb14e43b212f5dea77884ea2d645"
  },
  {
    "url": "assets/js/42.12de7514.js",
    "revision": "92768981a05089c41fdf3cce11792e69"
  },
  {
    "url": "assets/js/43.6abb7148.js",
    "revision": "7cd7c970e1ee69676dde7fce0cef9c2a"
  },
  {
    "url": "assets/js/44.57b00f2e.js",
    "revision": "484002a6edfed41b2b32959998216594"
  },
  {
    "url": "assets/js/45.67865778.js",
    "revision": "1afd08355611e84584086da1a95be69c"
  },
  {
    "url": "assets/js/46.711f9474.js",
    "revision": "d76832bd06ef3a5b5f804f043d032454"
  },
  {
    "url": "assets/js/47.16658784.js",
    "revision": "6b408ef77725e1629de8ada5f3d790c7"
  },
  {
    "url": "assets/js/48.ae506a71.js",
    "revision": "fb321ff4e0b4ae72570e28d3dc21d56a"
  },
  {
    "url": "assets/js/49.fcb931af.js",
    "revision": "216fb26033b3aa1accb9fd77586ccfe4"
  },
  {
    "url": "assets/js/5.b58d63a8.js",
    "revision": "ff18d72d2468c817b19340840e8a8b8d"
  },
  {
    "url": "assets/js/50.90ed79cc.js",
    "revision": "60b27a01155c5dff0d5f1a3efa55adb8"
  },
  {
    "url": "assets/js/51.bb42d02c.js",
    "revision": "bfb09357a0d9210e26d20f0ff19fa6ca"
  },
  {
    "url": "assets/js/52.280db2bc.js",
    "revision": "e2669aaa810aab4bc1511ef6b08b9794"
  },
  {
    "url": "assets/js/53.8e13c365.js",
    "revision": "0dd7490743fb62d09c04c78f868cfe1e"
  },
  {
    "url": "assets/js/54.2e7a5d82.js",
    "revision": "0ce6e32d051e87addddf725abef81151"
  },
  {
    "url": "assets/js/55.d3b1fc0e.js",
    "revision": "57cb73ad653910b41cc75daa9917d7d7"
  },
  {
    "url": "assets/js/6.faa565d7.js",
    "revision": "2a972d33eef4a50e85a5276dedbbf7ec"
  },
  {
    "url": "assets/js/7.69eed646.js",
    "revision": "3ada18ff69ac06018b6efd52d74557c5"
  },
  {
    "url": "assets/js/8.5ff393d6.js",
    "revision": "dfd31262aef289cb60a44e70078f0a47"
  },
  {
    "url": "assets/js/9.93fd68d4.js",
    "revision": "9a20252ae12248469a5d5716d11dbf69"
  },
  {
    "url": "assets/js/app.ceeb06a0.js",
    "revision": "9f8c07e61d5baf448058fdd134eb5d16"
  },
  {
    "url": "assets/js/vendors~flowchart.1100b2bd.js",
    "revision": "8d1549196074ccf91f48da222ea5d905"
  },
  {
    "url": "assets/js/vuejs-paginate.073c36db.js",
    "revision": "687cae2122ebfb44481576bd0e912703"
  },
  {
    "url": "avatar.jpg",
    "revision": "0c61a541b3234c63107e7927f6c9158a"
  },
  {
    "url": "categories/frontend/index.html",
    "revision": "acb8325669cc7214aa298003c24ccbc8"
  },
  {
    "url": "categories/index.html",
    "revision": "4101ab50432bf2d1b641792d32ee9788"
  },
  {
    "url": "categories/maker/index.html",
    "revision": "23384885e0ef27ab7d65f79b540b720d"
  },
  {
    "url": "categories/shell/index.html",
    "revision": "a8f85624c4fb5f8e56a7e2d800d3a697"
  },
  {
    "url": "categories/theme/index.html",
    "revision": "ab33846979a809b78e07c2150e5c3fd0"
  },
  {
    "url": "friend-links/index.html",
    "revision": "93318acf711535a4cd3a19d30b0b3941"
  },
  {
    "url": "icon.png",
    "revision": "d04b1a25209a4c4c8e063d0958fc6fa5"
  },
  {
    "url": "images/alipay.png",
    "revision": "41dda7864b2819e2ca0e606e879af4ba"
  },
  {
    "url": "images/android-chrome-192x192.png",
    "revision": "92fa96539abd30751ab44a9fc3ae4481"
  },
  {
    "url": "images/android-chrome-512x512.png",
    "revision": "5b11bed1bd21347b0cfc73d039ffe723"
  },
  {
    "url": "images/default-picture.svg",
    "revision": "e92b7a7ccd3b8dd96dc7c8bd89062a69"
  },
  {
    "url": "images/friend.jpg",
    "revision": "a6033973dfa0b9908d0c8e7aba15f90a"
  },
  {
    "url": "images/learning/dev-tools.png",
    "revision": "9d4518ddfa4916c453e8526f499ae7c9"
  },
  {
    "url": "images/learning/home-article-list.png",
    "revision": "234050cc3f041e4813f53b12365dcc7a"
  },
  {
    "url": "images/learning/home-pagination.png",
    "revision": "99310cd47be787c88ac6aa7f4a4b450c"
  },
  {
    "url": "images/learning/home.png",
    "revision": "f7221e68504f8c3a559de0cba40ffc1d"
  },
  {
    "url": "images/learning/layout.svg",
    "revision": "fe137b263a285e9d8f6e39a1d5d72c52"
  },
  {
    "url": "images/learning/post.png",
    "revision": "c09a4b7bc49fc8273938ec01e26632ff"
  },
  {
    "url": "images/theme-gallery/2zh.jpg",
    "revision": "0cec464ff07d437dce7732903be162ff"
  },
  {
    "url": "images/theme-gallery/blog.png",
    "revision": "230028dcd97b40aa8c844ba8fea12d81"
  },
  {
    "url": "images/theme-gallery/book.jpg",
    "revision": "f115354d08ca88416933f9275d70b69b"
  },
  {
    "url": "images/theme-gallery/casper.jpg",
    "revision": "556d488f5f6981d11d918292aafc4103"
  },
  {
    "url": "images/theme-gallery/gungnir.jpg",
    "revision": "a836ae61ae5178f679b5db2f373d6fad"
  },
  {
    "url": "images/theme-gallery/indigo-material.jpg",
    "revision": "00232bed062176df46af154373b87fe7"
  },
  {
    "url": "images/theme-gallery/meteorlxy.png",
    "revision": "82093cbcd0c13c485b674b08f410d5dd"
  },
  {
    "url": "images/theme-gallery/mini.png",
    "revision": "70ab0609553d3a817c90e1690a61d19b"
  },
  {
    "url": "images/theme-gallery/succinct.jpg",
    "revision": "1bf82f107315bbcddded5fbee9a5fd26"
  },
  {
    "url": "images/theme-gallery/vpx.png",
    "revision": "e505f386e87aae67976974a43a49d4f2"
  },
  {
    "url": "images/theme-gallery/yur.jpg",
    "revision": "6060546f56a1bb2230b363fff203112b"
  },
  {
    "url": "images/theme-gallery/yuu.png",
    "revision": "b498dbcc2d25f00e40167dda51bc29b9"
  },
  {
    "url": "images/wechat.png",
    "revision": "85e5786ba2b419624dd1115cacb1c2c8"
  },
  {
    "url": "index.html",
    "revision": "4249f92094335e6004ef9de5b00506d3"
  },
  {
    "url": "logo.jpg",
    "revision": "70de14ec2051812fe81872c5bd7ca1a0"
  },
  {
    "url": "page/2/index.html",
    "revision": "139d6ef16f5bfd2eeaaeac4ac887192e"
  },
  {
    "url": "post/2020/11/26/md5.html",
    "revision": "e7c6f3225cbb99af5331c9e87a29ce2c"
  },
  {
    "url": "post/2020/12/23/maker.html",
    "revision": "d565c1fbfccad454666ccd45785a2b8f"
  },
  {
    "url": "post/2020/12/26/theme-learning-0.html",
    "revision": "f67140cc90e0cc543393566b3d90a292"
  },
  {
    "url": "post/2021/01/01/theme-learning-concept.html",
    "revision": "20bba0953fb8cea901b2ecf22b8935ee"
  },
  {
    "url": "post/2021/01/12/theme-showcase.html",
    "revision": "6269fce5773cf3ccbfdf42e2a4f239a1"
  },
  {
    "url": "post/2021/01/22/maker-icon.html",
    "revision": "53eb4a75209fb8f7333076519c264f7d"
  },
  {
    "url": "post/2021/01/22/shell-tree.html",
    "revision": "708733ed6e81b285d57a16dcbda532d6"
  },
  {
    "url": "post/2021/01/23/maker-basic.html",
    "revision": "586c4a720a17e0b4b94a8c892f507781"
  },
  {
    "url": "post/2021/01/25/maker-page.html",
    "revision": "f7340627453b0bb3e52e276370d409b7"
  },
  {
    "url": "post/2021/02/06/theme-submit.html",
    "revision": "42a8d27281bdea621bf451326d9449af"
  },
  {
    "url": "post/2021/02/23/theme-learning-guide.html",
    "revision": "41337277eb41d1daeb17f2442f40a673"
  },
  {
    "url": "post/2021/02/24/theme-learning-directory.html",
    "revision": "8ff59c9e0db4c498c623e18cfb3f4f01"
  },
  {
    "url": "post/2021/02/25/theme-learning-template.html",
    "revision": "aa459d47e63b38510ced16a74f4b8664"
  },
  {
    "url": "post/2021/02/26/theme-learning-home.html",
    "revision": "28baeb19d896a3f884e7a39d8e4151cd"
  },
  {
    "url": "post/2021/03/02/theme-learning-post.html",
    "revision": "39cfefae85547e3f8552d07b740c65cf"
  },
  {
    "url": "scripts/hljs.js",
    "revision": "e91d01e086ddb1a6b051306f896201fb"
  },
  {
    "url": "styles/hljs.css",
    "revision": "9e770fd949a81db93d75dc05b31a3fec"
  },
  {
    "url": "tags/index.html",
    "revision": "f3d243daa21a094f4c92c607579c2ed5"
  },
  {
    "url": "tags/maker/index.html",
    "revision": "13f71cdf11d207f0e5fb3027956b4a22"
  },
  {
    "url": "tags/VuePress/index.html",
    "revision": "a19ef5252ea6a35b5136de4802d0ca33"
  },
  {
    "url": "vuepress-theme/antdocs.html",
    "revision": "d7fb550cdfb171d8178adc71da6450cc"
  },
  {
    "url": "vuepress-theme/api.html",
    "revision": "40a6469d9e6c0630fa6c1e4f71bba561"
  },
  {
    "url": "vuepress-theme/blog.html",
    "revision": "c10b121efb608fb8539e45e24e170f56"
  },
  {
    "url": "vuepress-theme/book.html",
    "revision": "929689c03758a056bc97c2879824dd3f"
  },
  {
    "url": "vuepress-theme/casper.html",
    "revision": "1eb910d9b01433afb5328edcbf2908d7"
  },
  {
    "url": "vuepress-theme/gungnir.html",
    "revision": "273a3c867c66ae1645756752f6c3df91"
  },
  {
    "url": "vuepress-theme/hope.html",
    "revision": "ef6485f7165c554705f153980a54e5c7"
  },
  {
    "url": "vuepress-theme/index.html",
    "revision": "4980217c378fc33bf1c7e291cf1aa521"
  },
  {
    "url": "vuepress-theme/indigo-material.html",
    "revision": "26a3de2e6fb721a94cc2a93cbf2ef82b"
  },
  {
    "url": "vuepress-theme/maker.html",
    "revision": "92ef256c34f3db0a86b3c2b944a625d1"
  },
  {
    "url": "vuepress-theme/mediumish.html",
    "revision": "532c13ccc3ccbcf744b860c5ddf9179c"
  },
  {
    "url": "vuepress-theme/meteorlxy.html",
    "revision": "2a076b481b231c28c7fadd36e5830c43"
  },
  {
    "url": "vuepress-theme/mini.html",
    "revision": "6bc907b62b65964a4d3680d68b77943a"
  },
  {
    "url": "vuepress-theme/modern-blog.html",
    "revision": "c872b181159b2058d7ce69e17ac3b3b5"
  },
  {
    "url": "vuepress-theme/onen.html",
    "revision": "9a5999aef748f968481308af30c18119"
  },
  {
    "url": "vuepress-theme/reco.html",
    "revision": "1c8e1c790ddcf96021b1427dfb7fd556"
  },
  {
    "url": "vuepress-theme/resume.html",
    "revision": "4d8adea0610b7275423043036e17137d"
  },
  {
    "url": "vuepress-theme/simple.html",
    "revision": "508530dd8422e270935b73f535b41f06"
  },
  {
    "url": "vuepress-theme/succinct.html",
    "revision": "2da9fcc955a49e2048cb8b729a9019a7"
  },
  {
    "url": "vuepress-theme/theme-2zh.html",
    "revision": "552fd58585d2e586de6d17c9c5e86a1b"
  },
  {
    "url": "vuepress-theme/vdoing.html",
    "revision": "dc2cc003bcc906b67a5a54c389072e3a"
  },
  {
    "url": "vuepress-theme/vpx.html",
    "revision": "24da45cad1a8894785996ff275436d3c"
  },
  {
    "url": "vuepress-theme/yubisaki.html",
    "revision": "54937b6a6802d2e2c81f3e63b5abddc3"
  },
  {
    "url": "vuepress-theme/yur.html",
    "revision": "6cf7d35054c6bcd562584b54482aec50"
  },
  {
    "url": "vuepress-theme/yuu.html",
    "revision": "48983ff040a84d7ef096b5d712230958"
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
