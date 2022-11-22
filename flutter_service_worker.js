'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "912473fb90ff7ac6dc830f4fe87928eb",
"index.html": "e0bb9ed4d6e63a3163b15fb3804fcc80",
"/": "e0bb9ed4d6e63a3163b15fb3804fcc80",
"main.dart.js": "4e951a20bc36366ae52940a6a20fb7eb",
"flutter.js": "195f32f4217e034162a6697208586f44",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "02b2120be327bc67f79659a91d6e8167",
"assets/AssetManifest.json": "2aeb8fe06cd4623765e5bc7d3e67c2db",
"assets/NOTICES": "df111d48987554a0a2161760671fe819",
"assets/FontManifest.json": "be73d12f6673639154b7d40162f81cf1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "2ad5fabd6a36a6deff087b8edfd0c1f8",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/background/circle.svg": "1c7c4d22dca944ec136768d19b7fd5dc",
"assets/assets/background/profile.png": "29a94a6e6962f13a8eaf57d2cc8993f6",
"assets/assets/background/circleBack.svg": "6e5260b31a684341aa42469f92e4d67b",
"assets/assets/images/pub.svg": "957b0a2baa691920a4db968d7531dcb7",
"assets/assets/images/ic_welcome.png": "cc6684438ce844aefa372cd6a05b0686",
"assets/assets/images/buy_crypto.svg": "d85a693bc151864ef4bb1dc6ec040863",
"assets/assets/images/ic_own_crypto.svg": "1530ab1270c23be3fb7282efabd6c906",
"assets/assets/images/ic_simp_invest.svg": "6275793de1793b960d74445552d83980",
"assets/assets/images/ic_logo_v2.png": "3173232f28fa4929c06cdcf9274349d5",
"assets/assets/images/graph01.svg": "5cb3a28aaaf93bd30f2553beffdae89a",
"assets/assets/logo/complete_logo.svg": "7957cddc73cc2c93e356108354c14396",
"assets/assets/logo/fidelity.png": "9ff1fc6d0430b15985218f78a9882d4b",
"assets/assets/logo/logoA.svg": "b716e36329ebc43e2b76879e9f64816b",
"assets/assets/logo/plaidLogo.svg": "c484fb7b12278e9e2bb264b805031f8f",
"assets/assets/icons/ic_advice-arrow.svg": "f5ef8a081b8bd49f24b79fc3bdd74f76",
"assets/assets/icons/back-arrow.svg": "37a573bcfa815968a65c1faa719efe13",
"assets/assets/icons/ethereum.svg": "7fcb936d151f9184ef95b81b4a57b607",
"assets/assets/icons/home.svg": "6033044804a6fcaaee179990c394c441",
"assets/assets/icons/dollar-circle.svg": "44cf3bbf4617283847462569c9cb9a43",
"assets/assets/icons/advice.svg": "6c086d1aa02bea3e80f363d5e25da044",
"assets/assets/icons/shield-tick.svg": "c8549569415d0f61cf2f63d50584fa02",
"assets/assets/icons/rewards.svg": "24682afca564de1e282c565d1cb9f65d",
"assets/assets/icons/arrow-right.svg": "32ce2d9596119cd1070aa23ea0320ea6",
"assets/assets/icons/close-circle.svg": "4f58283de1958871be5e5308d48d5900",
"assets/assets/icons/stocks.svg": "9d0da9a7713dcc882a642d60018c8093",
"assets/assets/icons/sms.svg": "8d20f3fc412507b4aa2fc7c485e7bfff",
"assets/assets/icons/crypto.svg": "199b108f114508a5d7f8666fb79f38ce",
"assets/assets/icons/ic_star_fill.svg": "6d6e9e29d377d5f6b462ea2cd21d6aec",
"assets/assets/icons/trend-up.svg": "fd0dd4658a61421f974ef6c61b4b4771",
"assets/assets/icons/message.svg": "93d93ce3175e5587f2880d6f82ec533f",
"assets/assets/icons/notification.svg": "44999c5a12f893767b3df66aa157a7d4",
"assets/assets/icons/tick-circle.svg": "5db055d3659acfeb568f7cad54fd5639",
"assets/assets/icons/lifebuoy.svg": "e96fbd9af7f0728ca4930532cc31234a",
"assets/assets/icons/bank.svg": "c2c000bef2bc22a701a8c5af12a28a2f",
"assets/assets/icons/call.svg": "fde9f3050a58d7a1a21785da55a440f9",
"assets/assets/icons/ic_citizenship.svg": "a18cf14264a28bc4447cfa11133b4e83",
"assets/assets/icons/location.svg": "9b535d09eaec8b9c1bf2e17f2a9209bf",
"assets/assets/icons/ic_back.svg": "aaadaefe74d27b295d562645c6f7b449",
"assets/assets/icons/user_login.svg": "030f15c77771ecc5091b38b38b16a052",
"assets/assets/icons/ic_email_verify.svg": "69338e23d0ce363019994e6297349dba",
"assets/assets/icons/icverify_identify.svg": "118e68f5b047754ba26331cc8160a100",
"assets/assets/icons/security-user.svg": "e89e03c9cf271e42cfc761b988bd0607",
"assets/assets/icons/ic_star.svg": "d647861fc7d2f5316426be23b2770927",
"assets/assets/icons/ic_country_verify.svg": "b88f5bc0330f099fad61f94689e36b14",
"assets/assets/icons/moon.svg": "f8b04d6e445e9ae17bfbf51abc4e0a2b",
"assets/assets/fonts/ProximaNova-AltBold.otf": "9d62cb9fcefe1cb94d2d90553cbef3f1",
"assets/assets/fonts/ProximaNova-Thin.otf": "8f0bc01ce5e5becef482d277cb72b728",
"assets/assets/fonts/ProximaNova-Bold.otf": "62d4d7d369292a9bf23762465ec6d704",
"assets/assets/fonts/ProximaNova-AltLight.otf": "e2602b2f2c615d20c880911364b32191",
"assets/assets/fonts/ProximaNova-AltThin.otf": "56b54001dd42f5fb8eba8af36465b364",
"assets/assets/fonts/ProximaNova-Extrabold.otf": "b4f9eb8ce027016ab9b9860817451d07",
"assets/assets/fonts/ProximaNova-Black.otf": "f401366193520cdf512c7ade98260e27",
"assets/assets/fonts/ProximaNova-Regular.otf": "410504d49238e955ba7dc23a7f963021",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
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
