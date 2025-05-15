// sw.js
const CACHE_NAME = 'softieaxin-audio-cache-v3'; // Updated version
const APP_SHELL_FILES = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
];

const EXTERNAL_ASSETS = [
    'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap',
    'https://ik.imagekit.io/9llyyueko/STATIC%20IMAGES/icon256.png?updatedAt=1745897134054'
];

// All audio URLs from your script.js
const ALL_AUDIO_URLS = [
    // Audios
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-stained-brutal-calamity.mp3?updatedAt=1747151322673",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-scourge-of-the-universe.mp3?updatedAt=1747151326458",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/hokma-battle-1.mp3?updatedAt=1747151329996",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-roblox-retro.mp3?updatedAt=1747151335053",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-open-frenzy.mp3?updatedAt=1747151339790",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-bloody-coagulant.mp3?updatedAt=1747151343203",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-domyeah-final-boss.mp3?updatedAt=1747151346799",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-unholy-insurgency.mp3?updatedAt=1747151351583",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-an-enigmatic-encounter-fdy-remastered.mp3?updatedAt=1747151523125",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-threats-of-the-ocean-floor.mp3?updatedAt=1747151527037",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-universal-collapse.mp3?updatedAt=1747151531381",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/vani-blood-cleric.mp3?updatedAt=1747151535394",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/peacesong.mp3?updatedAt=1747151539066",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/snail-house-hot-milk.mp3?updatedAt=1747151542443",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-last-breath-sans.mp3?updatedAt=1747151546548",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/reality-perception.mp3?updatedAt=1747151554023",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-time-paradox-sans.mp3?updatedAt=1747151558008",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-candyland.mp3?updatedAt=1747151561469",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/rage-no-2-reaper.mp3?updatedAt=1747151725614",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/joyful-chess-super-slowed.mp3?updatedAt=1747234121592",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/killstreak-500.mp3?updatedAt=1747151573823",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/npc.mp3?updatedAt=1747151569925",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/sunday-in-bed.mp3?updatedAt=1747151577328",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-crab-rave.mp3?updatedAt=1747151581197",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/dr-livsey-phonk.mp3?updatedAt=1747151585081",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/lovely-bastard.mp3?updatedAt=1747151588672",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/dezire-burnout.mp3?updatedAt=1747151591982",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/blue-horizion-ultra-slowed.mp3?updatedAt=1747151596123",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/vyrval%20-%20%E2%9C%BBH+(second%20drop%20+%20super%20slowed).mp3?updatedAt=1747157020792",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/passo-bem-sloto.mp3?updatedAt=1747151614296",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-undertale-OST-080.mp3?updatedAt=1747151610974",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-glitchtale-ost-true-love.mp3?updatedAt=1747151607594",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/jpn-amend.mp3?updatedAt=1747151603012",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/cute-depressed.mp3?updatedAt=1747151618812",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/blue-horizion-slowed.mp3?updatedAt=1747151633639",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/montagem.mp3?updatedAt=1747151630278",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/nursery-phonk.mp3?updatedAt=1747151626695",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/nowyouwontletgo.mp3?updatedAt=1747151623356",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-doors-elevator-music.mp3?updatedAt=1747151637755",
    "https://ik.imagekit.io/ut3w2pq43i/AUDIO/joyful-chess-slowed.mp3?updatedAt=1747234161752",
    // Songs
    "https://ik.imagekit.io/ut3w2pq43i/SONG/skyfall.mp3?updatedAt=1747151760064",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/audioboard-touch-tone-telephone.mp3?updatedAt=1747151764966",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/2-phut-hon.mp3?updatedAt=1747151768758",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/gangam-style.mp3?updatedAt=1747151772839",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/dekho-na-dekho.mp3?updatedAt=1747151777337",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/my-ordinary-life.mp3?updatedAt=1747151781723",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/bloody-marry.mp3?updatedAt=1747151785310",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/nsync-bye-bye-bye.mp3?updatedAt=1747151789443",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/dusk-till-dawn.mp3?updatedAt=1747151793833",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/darkside.mp3?updatedAt=1747151797794",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/cradles.mp3?updatedAt=1747151801266",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/golden-hour.mp3?updatedAt=1747151805035",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/house-of-memories.mp3?updatedAt=1747151809195",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/on-and-on-and-on.mp3?updatedAt=1747151812995",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/believer.mp3?updatedAt=1747151816634",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/lovely.mp3?updatedAt=1747151820190",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/audioboard-gas-gas-gas.mp3?updatedAt=1747151823643",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/wait-a-minute.mp3?updatedAt=1747151827298",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/dancin.mp3?updatedAt=1747151835226",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/audioboard-its-going-down-now.mp3?updatedAt=1747151840027",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/bad-boy.mp3?updatedAt=1747151844989",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/audioboard-middle-of-the-night.mp3?updatedAt=1747151848617",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/audioboard-fairytale.mp3?updatedAt=1747151852082",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/cupid.mp3?updatedAt=1747151855929",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/woman.mp3?updatedAt=1747151859656",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/enemy.mp3?updatedAt=1747151863574",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/all-my-friends-are-so-toxic.mp3?updatedAt=1747151867544",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/worth-nothing.mp3?updatedAt=1747151871062",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/montero.mp3?updatedAt=1747151874330",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/honey-pie.mp3?updatedAt=1747151878061",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/wildeside-anime.mp3?updatedAt=1747151881452",
    "https://ik.imagekit.io/ut3w2pq43i/SONG/apt-apt.mp3?updatedAt=1747234063283"
];

// Host and path prefixes for your audio files
const AUDIO_HOST = 'ik.imagekit.io';
const AUDIO_PATH_PREFIX_1 = '/ut3w2pq43i/AUDIO/';
const AUDIO_PATH_PREFIX_2 = '/ut3w2pq43i/SONG/';

self.addEventListener('install', (event) => {
    console.log('SW: Installing version:', CACHE_NAME);
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('SW: Caching app shell, external assets, and all audio files');
            const filesToCache = [
                ...APP_SHELL_FILES,
                ...EXTERNAL_ASSETS,
                ...ALL_AUDIO_URLS
            ];
            return cache.addAll(filesToCache).catch(err => {
                console.error('SW: Failed to cache some files during install:', err);
                // Allow install to succeed even if some non-critical assets fail.
                // Problematic files won't be available offline initially.
            });
        }).then(() => self.skipWaiting()) // Activate new SW immediately
    );
});

self.addEventListener('activate', (event) => {
    console.log('SW: Activating version:', CACHE_NAME);
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('SW: Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim()) // Take control of uncontrolled clients
    );
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Strategy for Audio Files & Other Cached Assets (Cache-first, then network)
    if (
        (url.hostname === AUDIO_HOST && (url.pathname.startsWith(AUDIO_PATH_PREFIX_1) || url.pathname.startsWith(AUDIO_PATH_PREFIX_2))) ||
        APP_SHELL_FILES.includes(url.pathname) || APP_SHELL_FILES.includes(url.pathname.substring(url.pathname.lastIndexOf('/'))) || // handles '/' and '/index.html'
        EXTERNAL_ASSETS.includes(event.request.url) ||
        ALL_AUDIO_URLS.includes(event.request.url) // Check if it's one of the pre-cached audio URLs
    ) {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                if (cachedResponse) {
                    // console.log('SW: Serving from cache:', event.request.url);
                    return cachedResponse;
                }
                // console.log('SW: Fetching from network and caching (if not already attempted by install):', event.request.url);
                return fetch(event.request).then((networkResponse) => {
                    if (networkResponse && (networkResponse.ok || networkResponse.status === 206)) { // 206 for partial audio
                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseToCache);
                            // console.log('SW: Cached:', event.request.url);
                        });
                    } else if (networkResponse) {
                        // console.warn('SW: Network response not OK:', event.request.url, networkResponse.status, networkResponse.statusText);
                    }
                    return networkResponse;
                }).catch(error => {
                    console.error('SW: Fetching failed:', event.request.url, error);
                    throw error;
                });
            })
        );
    }
    // For non-GET requests or unhandled protocols (pass through)
    else if (event.request.method !== 'GET' || !url.protocol.startsWith('http')) {
        // console.log('SW: Passing through non-GET/unhandled request to network:', event.request.url);
        event.respondWith(fetch(event.request));
    }
    // Fallback for any other GET requests not explicitly handled above (Network-first, then cache)
    // This could be for images or other assets not part of the app shell or audio list.
    else {
        event.respondWith(
            fetch(event.request)
                .then(networkResponse => {
                    if (networkResponse && networkResponse.ok) {
                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(event.request, responseToCache);
                        });
                    }
                    return networkResponse;
                })
                .catch(() => {
                    // If network fails, try to serve from cache
                    return caches.match(event.request).then(cachedResponse => {
                        if (cachedResponse) {
                            return cachedResponse;
                        }
                        // If not in cache either, the request will fail (browser default behavior)
                        // console.warn('SW: Asset not in cache and network failed:', event.request.url);
                        // Optionally, return a generic offline placeholder for images/other assets here.
                        return new Response("Network error and not in cache", {
                           status: 404,
                           statusText: "Not Found"
                        });
                    });
                })
        );
    }
});