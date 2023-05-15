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
    "revision": "1139a1eca992de40304936e0b593e7d7"
  },
  {
    "url": "assets/css/0.styles.602abbc5.css",
    "revision": "79182decee4b72a795560114b19d6d45"
  },
  {
    "url": "assets/img/add_new_admin.9dcd0562.jpg",
    "revision": "9dcd0562b5098b9fcc36d077116dd9e6"
  },
  {
    "url": "assets/img/add_new_user.e670890d.jpg",
    "revision": "e670890dcb113ca4e46e126198c5b322"
  },
  {
    "url": "assets/img/add_nodata.a6dbc634.jpg",
    "revision": "a6dbc6348484c221b2ef07c52ed9d92f"
  },
  {
    "url": "assets/img/allusers.a67c1281.jpg",
    "revision": "a67c12816c0fbf835dd755945c2c8ac7"
  },
  {
    "url": "assets/img/check_add.66fd78f6.jpg",
    "revision": "66fd78f6fcd19d31b2d84868b9abcbdb"
  },
  {
    "url": "assets/img/check_delete.e0f076ec.jpg",
    "revision": "e0f076ecbf699feecae71c26f54cc99e"
  },
  {
    "url": "assets/img/check_update.17400fbc.jpg",
    "revision": "17400fbc298874676583803bf20a4630"
  },
  {
    "url": "assets/img/database_scheme.cc9d1242.png",
    "revision": "cc9d12421db11decb530765742d56716"
  },
  {
    "url": "assets/img/delete_nouser.d7ea315f.jpg",
    "revision": "d7ea315f36da846c20c22f25b7d7c381"
  },
  {
    "url": "assets/img/delete.8561250e.jpg",
    "revision": "8561250e57ffe7eac0264c2bdc8add88"
  },
  {
    "url": "assets/img/find_nouser.42b9ea55.jpg",
    "revision": "42b9ea55d172d42c7d9a40fc7dbb992a"
  },
  {
    "url": "assets/img/find_userid.bafc39cb.jpg",
    "revision": "bafc39cba758621718978acce6dba8f4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/update_nouser.3e4c3ec4.jpg",
    "revision": "3e4c3ec47fc1a0ed867b3a474d0a9472"
  },
  {
    "url": "assets/img/update.da64bdf9.jpg",
    "revision": "da64bdf9da93233c11a50102418acac7"
  },
  {
    "url": "assets/js/10.b8ce7d42.js",
    "revision": "c2a45c02026473bf6729e860411d7c79"
  },
  {
    "url": "assets/js/11.a1e0f383.js",
    "revision": "369ae883b30bd84e6e1faf9568fe1154"
  },
  {
    "url": "assets/js/12.1984d552.js",
    "revision": "b3a5f9466977bcbebc94b80847566ec2"
  },
  {
    "url": "assets/js/13.3befd5c8.js",
    "revision": "6cfe141069782be64c5b654a04888a5e"
  },
  {
    "url": "assets/js/14.db6e81a7.js",
    "revision": "9ba942219a6b61e8fbf4816af109e69d"
  },
  {
    "url": "assets/js/15.25d3ee6a.js",
    "revision": "9994b92a569fab6fd9f033574f2c1c72"
  },
  {
    "url": "assets/js/16.1056a05d.js",
    "revision": "1526767b72c80e98ed70ee6855854633"
  },
  {
    "url": "assets/js/17.86e4a962.js",
    "revision": "38c8942ea62cb253834166381c1a05d5"
  },
  {
    "url": "assets/js/18.247c9909.js",
    "revision": "cdfab570045455e144a34c25b6fbff7c"
  },
  {
    "url": "assets/js/19.525ffe5f.js",
    "revision": "e4a631db2612952127040597c4790d63"
  },
  {
    "url": "assets/js/2.d83ff1df.js",
    "revision": "81fc9dd33e3a32687c0916a06dd44499"
  },
  {
    "url": "assets/js/20.232b7e56.js",
    "revision": "e0b83507e3813e991d1a4f9cce484449"
  },
  {
    "url": "assets/js/21.26900195.js",
    "revision": "38972e6ef055a7283aa10777283161ef"
  },
  {
    "url": "assets/js/22.1050fad7.js",
    "revision": "ce436d00fb0c6a45c07269390fd42616"
  },
  {
    "url": "assets/js/23.dcfc66f5.js",
    "revision": "1a9263c671e804c4211c8b34cbc5f246"
  },
  {
    "url": "assets/js/24.bc2a09b8.js",
    "revision": "477f7c2763e4b4422180e3b8edaa9b30"
  },
  {
    "url": "assets/js/25.0f6dcb63.js",
    "revision": "7479db5c7b2514550c0d39ae511e4cf8"
  },
  {
    "url": "assets/js/26.b70721ed.js",
    "revision": "2919a0de7121c408202b00d71b938f60"
  },
  {
    "url": "assets/js/27.2b93d1b0.js",
    "revision": "2b17fca212e1cb351dd55434553fbd78"
  },
  {
    "url": "assets/js/28.8d1db9b6.js",
    "revision": "083661cd1649a3907f1e0b7f13fd3735"
  },
  {
    "url": "assets/js/29.1410a4ef.js",
    "revision": "59a30adc00291576705129c2b169e84b"
  },
  {
    "url": "assets/js/3.394b8d49.js",
    "revision": "2c2665325a0e3226d75b0fc44e412a82"
  },
  {
    "url": "assets/js/30.ad4fbbe6.js",
    "revision": "fb9c63a99428390384880d1adea7ba23"
  },
  {
    "url": "assets/js/31.eefec2aa.js",
    "revision": "421f3da9cfba749e9eb1607435d1c27a"
  },
  {
    "url": "assets/js/33.82e364c1.js",
    "revision": "1b0e12317769c194e6ae14ebd16fd605"
  },
  {
    "url": "assets/js/4.ab5c337e.js",
    "revision": "6832a823208970a0cee82afea146afc6"
  },
  {
    "url": "assets/js/5.6477de70.js",
    "revision": "bc0ff595b846299e03939565cf152d3f"
  },
  {
    "url": "assets/js/6.f92c5463.js",
    "revision": "67ce635266a847ba3d34250ce081455f"
  },
  {
    "url": "assets/js/7.a382f32d.js",
    "revision": "55d70d6d70d0fc997b262b9c8f2e0fd9"
  },
  {
    "url": "assets/js/8.baf0412c.js",
    "revision": "c855dc6eef094e92aca884d8b93a8fd5"
  },
  {
    "url": "assets/js/9.cf315243.js",
    "revision": "dca8aca7a23065518a2d2405b4cb3788"
  },
  {
    "url": "assets/js/app.cf3ea82a.js",
    "revision": "9d73614ca4031ed7e1aee5dfd436f225"
  },
  {
    "url": "conclusion/index.html",
    "revision": "afc644a3fe55f29895f73320b7a7f198"
  },
  {
    "url": "design/index.html",
    "revision": "3801e98d9168dae3b4a0bacd7d407cde"
  },
  {
    "url": "design/model-business-objects.html",
    "revision": "da88f69f1703e57a6f380c979b482734"
  },
  {
    "url": "design/model-ER.html",
    "revision": "bcf0b68f7af718eeca432189e4a0fa7c"
  },
  {
    "url": "design/model-scheme.html",
    "revision": "fd33ff168f6f10a6173e81203c3d6241"
  },
  {
    "url": "index.html",
    "revision": "28db4277cc5da0924177eea7f3062cd9"
  },
  {
    "url": "intro/index.html",
    "revision": "5c1f173e27858e40a0273ac20844af8d"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "7640cc935619b4eccad807fc87ac0000"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "938dfbbafb960dccbb6ff92d81701108"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "dc205b145d860ed8ccbcf7d1a26166f6"
  },
  {
    "url": "software/index.html",
    "revision": "3984453ee8612bc25bd8c43ead92fb37"
  },
  {
    "url": "software/RESTfull.html",
    "revision": "c8c9759a85ad245b18d4977cd837a383"
  },
  {
    "url": "software/sql-script.html",
    "revision": "06be2cdec79449d41756541f8ccf08b3"
  },
  {
    "url": "test/index.html",
    "revision": "e796164bdd5d580bb84f16e9222123f6"
  },
  {
    "url": "use cases/index.html",
    "revision": "89d50c0d649a368c2e00ba92427c1fc8"
  },
  {
    "url": "use cases/scenarios.html",
    "revision": "42e10bc2b74bffc987d0d0186a439982"
  },
  {
    "url": "use cases/use-case-model.html",
    "revision": "4e294fb3d4d3bac7cf04510fd70c2fca"
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
