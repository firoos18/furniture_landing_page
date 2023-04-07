'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "7d2f3e046ea2076d8c5530657056075a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3539004b106c7ab18519d79f31d7e789",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6dd6d1da10202283cd7cfd0a885d7b80",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0a668a7ede14ddf08f810ab5d4f5b97a",
".git/logs/refs/heads/master": "0a668a7ede14ddf08f810ab5d4f5b97a",
".git/logs/refs/remotes/origin/master": "f19f37eb02a694f119123452967bf11b",
".git/objects/0f/105bc6cb1814bf643e2f6fe4e2b5f59a3d4ac9": "30cf0fd386a8bf732ed16a07daf6417d",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/15/2b582a47210d423fc610dba280b7f0d03f5746": "eb9614937da6f59b14ac8fb9853cb48c",
".git/objects/16/13fc01e6adb3545037662c2a25db118d5847a5": "161935f3020d5f69f60c77f7bdd15681",
".git/objects/18/8fa03672971228263bd7445692a1b2cf220808": "33de727926b7e0f6f542650beebb3652",
".git/objects/1c/c7df2b228928be7c8da783fae903c653757f27": "f9162badf160516377f06564a5ece28d",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/27/23e66e04a9e08f14c7ae3891d1e849bb87f43c": "8b2fd64f4b403d6ebc8180c7cd561f35",
".git/objects/2a/acdaa3195f1536b286de2d2c37861b36f19d31": "914f357b2259d423541e65556ac03c26",
".git/objects/2a/b46f9f20fac5d1b4aefafbaf5941457785ee59": "20557394d64d9e4cdb9a2de8b9f79ca3",
".git/objects/2b/b490830e229e4a3ebaaefee2c13b4648ca85a3": "6f5b0424a4a4e22760f53587a4b69f75",
".git/objects/31/cd6ab4a6ef9299594dab24dd89b2b355901cac": "e5e0b3fe9e44c15f28f348deba4b3903",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/11c33f5dd3a32e4afd64639fc08e0d486d095d": "be4b6e4788cce64f8c0b937f0137ff0f",
".git/objects/41/159bbd3a37d0f579a005a655f206b37dab2a1e": "a70fe1d77518579bd2ec483b02dcc703",
".git/objects/42/9d0d2b705ae8b23f11de63b0312fbdd9be8ba6": "a14551fcd7f986785475c0222aaf38b9",
".git/objects/49/29feb05972c4eaea7895bdf7d1453e275b7db8": "56ee0f90c07ada1654c078d29499afac",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/c3d6d6323e10a427c1eab5838c2bf65eb2fa05": "13d2f5fe11c5b0b82c4da4d562f486ef",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4e/e99490269a41175d89061ca8a4ac8124c2e421": "df40e2ffdb6332d1d68a30484e809658",
".git/objects/50/5ba376e3b132b6f6e84eb8e9eb417bc4b51c3a": "d22049d937b383addb5e4793fa785949",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5b/08b455613d923b09cf656634ab7c9d98a1e9bf": "0d736e1d338046d63d10ec2bc3f97dec",
".git/objects/5c/75f93aeb331c9e4ccaeb288a57a79460d8babd": "2c02b8c7dbcd32e744855af4c60d1bd0",
".git/objects/64/6981bb120cd7d606351bf5b8fcb4fd822971fa": "91fb3aa6e444c1267e4027a96789b857",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/7c/86b8e3ddc92222edbd5e7b6fc31e5c39f3c03c": "6457fa29fe54a52e7775f771a839f629",
".git/objects/83/e56ffd145a0e9b322196fd3c88891d4db6b6d2": "5c43846da482e93f0123a42aa46d7845",
".git/objects/85/657f4a65e9b83b09bf3a97a9427843f071dab9": "95bb9b8baf5b91bf64b3b8e912d147f0",
".git/objects/86/b3f42452de21aa94854bdebbf903ada2d6ec3a": "521cb3c518334c3f3f06acb1f380e1f9",
".git/objects/87/897ab8a2d15149c3616c236437973a52a946b3": "c3d05e31d199f31c9cce4dbf962b4da3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3203c3607c89dd8fb406f06ddb8d22f158d829": "c5e1ab501eb102b47459ae6079f35c37",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/9d/d8ab208b58e1eaa56b2a1ac321fb80cc78f3b0": "2f0edddcf2d48d8f4dfeb692e04be582",
".git/objects/a2/3c0ebf982a2a5a02e557f75831f8fc8e57c712": "8815cfa31fd6bb6da766d21b4ead8e8d",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b3/cd249b0cb95340ffa3d2b52c5101f250dbf178": "5b7a8ba84667dea97a95aacd8c42c837",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b29798ea4bf40d7c6f400e6a7d41831c45620b": "0c32bfd75f5a90f4e14bf2a37392437b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/9ba31c9ecf79cc58518dbf83da42aa1d8cc7a0": "98827eb0ff0a6dbc5e7f47918032fe49",
".git/objects/d2/c5494219d569f4b5ea81b9361045c7843bf822": "ae8ec1269f2c915cfd3baa30c4f35e8d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/8cddf4bedcf7879c451cfc271f75dabad0ae55": "808100d0ac8c526f132807a50ef5a04a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/c70d897328abc58b1ee53de8e86591b707dfcb": "82c823eab73a249ffa43bd492aa83b97",
".git/refs/heads/master": "9ce4a7bb315333a2126a91c160bbd0fc",
".git/refs/remotes/origin/master": "598ef3a5e54efce547cc6a6d06772709",
"assets/AssetManifest.json": "d38253d2169fa624995cdbc19ebf71cf",
"assets/FontManifest.json": "1a6184c6ca656e8be25d25329c87e502",
"assets/fonts/MaterialIcons-Regular.otf": "d1ced889c71be26d4d14152c2c0234f4",
"assets/lib/assets/kursi%25203.png": "8d9ed5fc8e4235f1fd8b28f0071499fb",
"assets/lib/assets/kursi.png": "abb45d84411498837e21b68cfa8c8863",
"assets/lib/assets/kursi2.png": "53644bbfc7701bb1b2c6e929e31c7b1a",
"assets/lib/assets/kursi4.png": "823363e18efbf776bff0c7dac55084ca",
"assets/lib/assets/kursi_aneh.png": "7aa3247501e63d60ef29486f9c0971bc",
"assets/lib/assets/lampu.png": "64a441da0cec99c40cd7b456dab90182",
"assets/lib/assets/lemari.png": "ae78a7f434670980458aa4dc4172f260",
"assets/lib/assets/meja.png": "454d83b1ee2108063cc4f7bf249238d9",
"assets/lib/assets/meja2.png": "71e7a37a75c659cc431fa50f1376cf1c",
"assets/lib/assets/rak.png": "fdc840b4e2cdda81dbe737ff856c9877",
"assets/lib/assets/sofa.png": "126d4bd9d4201fd880b324e7e79e9dc0",
"assets/NOTICES": "1b15a970dd35dd35dcea445cf9ffa9f3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/feather_icons/fonts/feather.ttf": "b5f4566bdaa6dfa10fad3bedb22f7ecf",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "aae8a6015d9785b8988cd099c7ebc8b2",
"/": "aae8a6015d9785b8988cd099c7ebc8b2",
"main.dart.js": "06bec6a9c40c63d7afed5a17df9be95b",
"manifest.json": "6fa38f600e5e6250cbfcab5f957c4688",
"version.json": "c86360b04853a65b3fa77eb202f18494"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
