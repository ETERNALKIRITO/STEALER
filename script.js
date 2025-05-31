// --- START OF FILE script.js ---

document.addEventListener('DOMContentLoaded', () => {
    // --- Service Worker Registration ---
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then((registration) => {
                    console.log('Service Worker registered with scope:', registration.scope);
                })
                .catch((error) => {
                    console.error('Service Worker registration failed:', error);
                });
        });
    }
    // --- localStorage Keys ---
    const LS_KEYS = {
        lastTrackUrl: 'softPlayer_lastTrackUrl',
        lastTrackTitle: 'softPlayer_lastTrackTitle',
        lastPlaybackTime: 'softPlayer_lastPlaybackTime',
        currentTheme: 'softPlayer_currentTheme',
        allowBackgroundPlay: 'softPlayer_allowBackgroundPlay'
    };

const audioCategories = {
    "Audios": [
        { title: "Stained Brutal Calamity", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-stained-brutal-calamity.mp3?updatedAt=1747151322673" },
        { title: "Scourge Of The Universe", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-scourge-of-the-universe.mp3?updatedAt=1747151326458" },
        { title: "Hokma Battle 1", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/hokma-battle-1.mp3?updatedAt=1747151329996" },
        { title: "Roblox Retro", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-roblox-retro.mp3?updatedAt=1747151335053" },
        { title: "Open Frenzy", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-open-frenzy.mp3?updatedAt=1747151339790" },
        { title: "Bloody Coagulant", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-bloody-coagulant.mp3?updatedAt=1747151343203" },
        { title: "Domyeah Final Boss", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-domyeah-final-boss.mp3?updatedAt=1747151346799" },
        { title: "Unholy Insurgency", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-unholy-insurgency.mp3?updatedAt=1747151351583" },
        { title: "An Enigmatic Encounter (FDY Remastered)", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-an-enigmatic-encounter-fdy-remastered.mp3?updatedAt=1747151523125" },
        { title: "Threats Of The Ocean Floor", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-threats-of-the-ocean-floor.mp3?updatedAt=1747151527037" },
        { title: "Universal Collapse", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-universal-collapse.mp3?updatedAt=1747151531381" },
        { title: "Vani Blood Cleric", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/vani-blood-cleric.mp3?updatedAt=1747151535394" },
        { title: "Peacesong", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/peacesong.mp3?updatedAt=1747151539066" },
        { title: "Snail House Hot Milk", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/snail-house-hot-milk.mp3?updatedAt=1747151542443" },
        { title: "An Enigmatic Encounter", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-last-breath-sans.mp3?updatedAt=1747151546548" },
        { title: "Reality Perception", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/reality-perception.mp3?updatedAt=1747151554023" },
        { title: "Time Paradox Sans", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-time-paradox-sans.mp3?updatedAt=1747151558008" },
        { title: "Candyland", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-candyland.mp3?updatedAt=1747151561469" },
        { title: "Rage No 2 Reaper", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/rage-no-2-reaper.mp3?updatedAt=1747151725614" },
        { title: "Joyful Chess (Super Slowed)", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/joyful-chess-super-slowed.mp3?updatedAt=1747234121592" },
        { title: "Killstreak 500", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/killstreak-500.mp3?updatedAt=1747151573823" },
        { title: "NPC", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/npc.mp3?updatedAt=1747151569925" },
        { title: "Sunday In Bed", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/sunday-in-bed.mp3?updatedAt=1747151577328" },
        { title: "Crab Rave", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-crab-rave.mp3?updatedAt=1747151581197" },
        { title: "Dr Livesey Phonk", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/dr-livsey-phonk.mp3?updatedAt=1747151585081" },
        { title: "Lovely Bastard", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/lovely-bastard.mp3?updatedAt=1747151588672" },
        { title: "Dezire Burnout", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/dezire-burnout.mp3?updatedAt=1747151591982" },
        { title: "Blue Horizon (Ultra Slowed)", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/blue-horizion-ultra-slowed.mp3?updatedAt=1747151596123" },
        { title: "Vyrval - ❀H (Second Drop + Super Slowed)", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/vyrval%20-%20%E2%9C%BBH+(second%20drop%20+%20super%20slowed).mp3?updatedAt=1747157020792" },
        { title: "Passo Bem Sloto", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/passo-bem-sloto.mp3?updatedAt=1747151614296" },
        { title: "Undertale OST 080", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-undertale-OST-080.mp3?updatedAt=1747151610974" },
        { title: "Glitchtale OST True Love", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-glitchtale-ost-true-love.mp3?updatedAt=1747151607594" },
        { title: "JPN Amend", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/jpn-amend.mp3?updatedAt=1747151603012" },
        { title: "Cute Depressed", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/cute-depressed.mp3?updatedAt=1747151618812" },
        { title: "Blue Horizon (Slowed)", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/blue-horizion-slowed.mp3?updatedAt=1747151633639" },
        { title: "Montagem", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/montagem.mp3?updatedAt=1747151630278" },
        { title: "Nursery Phonk", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/nursery-phonk.mp3?updatedAt=1747151626695" },
        { title: "Now You Wont Let Go", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/nowyouwontletgo.mp3?updatedAt=1747151623356" },
        { title: "Doors Elevator Music", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/audioboard-doors-elevator-music.mp3?updatedAt=1747151637755" },
        { title: "Joyful Chess (Slowed)", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/joyful-chess-slowed.mp3?updatedAt=1747234161752" },
        { title: "Return To Slime", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/return-to-slime.mp3?updatedAt=1747151355606" },
        { title: "Harvest", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/harvest.mp3?updatedAt=1747400849909" },
        { title: "Doom Eternal", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/doom-eternal.mp3?updatedAt=1748347174996" },
        { title: "Automitov - Mangos", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/automitov-mangos.mp3?updatedAt=1748700948689" },
        { title: "Trap Royalty", url: "https://ik.imagekit.io/ut3w2pq43i/AUDIO/trap-royalty.mp3?updatedAt=1748700948944" },
    ],

    "Songs": [
        { title: "Skyfall", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/skyfall.mp3?updatedAt=1747151760064" },
        { title: "Touch Tone Telephone", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/audioboard-touch-tone-telephone.mp3?updatedAt=1747151764966" },
        { title: "2 Phut Hon", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/2-phut-hon.mp3?updatedAt=1747151768758" },
        { title: "Gangnam Style", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/gangam-style.mp3?updatedAt=1747151772839" },
        { title: "Dekho Na Dekho", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/dekho-na-dekho.mp3?updatedAt=1747151777337" },
        { title: "My Ordinary Life", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/my-ordinary-life.mp3?updatedAt=1747151781723" },
        { title: "Bloody Mary", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/bloody-marry.mp3?updatedAt=1747151785310" },
        { title: "NSYNC - Bye Bye Bye", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/nsync-bye-bye-bye.mp3?updatedAt=1747151789443" },
        { title: "Dusk Till Dawn", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/dusk-till-dawn.mp3?updatedAt=1747151793833" },
        { title: "Darkside", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/darkside.mp3?updatedAt=1747151797794" },
        { title: "Cradles", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/cradles.mp3?updatedAt=1747151801266" },
        { title: "Golden Hour", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/golden-hour.mp3?updatedAt=1747151805035" },
        { title: "House Of Memories", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/house-of-memories.mp3?updatedAt=1747151809195" },
        { title: "On And On And On", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/on-and-on-and-on.mp3?updatedAt=1747151812995" },
        { title: "Believer", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/believer.mp3?updatedAt=1747151816634" },
        { title: "Lovely", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/lovely.mp3?updatedAt=1747151820190" },
        { title: "Gas Gas Gas", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/audioboard-gas-gas-gas.mp3?updatedAt=1747151823643" },
        { title: "Wait A Minute", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/wait-a-minute.mp3?updatedAt=1747151827298" },
        { title: "Dancin", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/dancin.mp3?updatedAt=1747151835226" },
        { title: "It's Going Down Now", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/audioboard-its-going-down-now.mp3?updatedAt=1747151840027" },
        { title: "Bad Boy", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/bad-boy.mp3?updatedAt=1747151844989" },
        { title: "Middle Of The Night", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/audioboard-middle-of-the-night.mp3?updatedAt=1747151848617" },
        { title: "Fairytale", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/audioboard-fairytale.mp3?updatedAt=1747151852082" },
        { title: "Cupid", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/cupid.mp3?updatedAt=1747151855929" },
        { title: "Woman", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/woman.mp3?updatedAt=1747151859656" },
        { title: "Enemy", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/enemy.mp3?updatedAt=1747151863574" },
        { title: "All My Friends Are So Toxic", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/all-my-friends-are-so-toxic.mp3?updatedAt=1747151867544" },
        { title: "Worth Nothing", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/worth-nothing.mp3?updatedAt=1747151871062" },
        { title: "Montero", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/montero.mp3?updatedAt=1747151874330" },
        { title: "Honey Pie", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/honey-pie.mp3?updatedAt=1747151878061" },
        { title: "Wildside (Anime)", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/wildeside-anime.mp3?updatedAt=1747151881452" },
        { title: "Apt Apt", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/apt-apt.mp3?updatedAt=1747234063283" },
        { title: "Beggin", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/beggin.mp3?updatedAt=1747400310605" },
        { title: "The Search", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/the-search.mp3?updatedAt=1747400307177" },
        { title: "Alibi", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/alibi.mp3?updatedAt=1747401397114" },
        { title: "33 Max Verstappen", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/max-versteppen.mp3?updatedAt=1748347497351" },
        { title: "Khariyat Poochon", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/khariyat.mp3?updatedAt=1748347497898" },
        { title: "If We Being Real", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/if-we-being-real.mp3?updatedAt=1748347496854" },
        { title: "As The World Caves In", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/as-the-world-caves-in.mp3?updatedAt=1748701085716" },
        { title: "Blame It On The Kids", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/blame-it-on-the-kids.mp3?updatedAt=1748701086313" },
        { title: "Discord", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/discord.mp3?updatedAt=1748701086515" },
        { title: "Dil Wale Puch Ne Cha", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/dil-wale-puch-ne-cha.mp3?updatedAt=1748701086390" },
        { title: "Notion", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/notion.mp3?updatedAt=1748701086469" },
        { title: "California Gurls", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/california-gurls.mp3?updatedAt=1748701086775" },
        { title: "Love Story", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/love-story.mp3?updatedAt=1748701086735" },
        { title: "Sans Frisk Chara Trio", url: "https://ik.imagekit.io/ut3w2pq43i/SONG/sans-frisk-chara-trio.mp3?updatedAt=1748701086950" },
    ]
};

    const categoriesContainer = document.getElementById('categoriesContainer');
    const audioPlayer = document.getElementById('audioPlayer');
    const blackScreenOverlay = document.getElementById('blackScreenOverlay');
    let currentPlayingItem = null;
    let currentTrackObject = null;

    const blackScreenPlayerControls = document.getElementById('blackScreenPlayerControls');
    const bsCurrentTrackTitle = document.getElementById('bsCurrentTrackTitle');
    const bsCurrentTime = document.getElementById('bsCurrentTime');
    const bsTotalDuration = document.getElementById('bsTotalDuration');
    const bsProgressBar = document.getElementById('bsProgressBar');
    const bsProgressBarWrapper = document.getElementById('bsProgressBarWrapper');
    const bsPlayPauseButton = document.getElementById('bsPlayPauseButton');
    const bsRestartButton = document.getElementById('bsRestartButton');
    const bsLockButton = document.getElementById('bsLockButton'); // New Lock Button
    let isDraggingProgressBar = false;
    let isBlackScreenLocked = false; // New state for lock button

    const themes = ['theme-soft-pink', 'theme-soft-blue', 'theme-soft-green', 'theme-soft-peach'];
    let currentThemeIndex = 0;
    const themeIntervalTime = 15000;

    const cacheAllButton = document.getElementById('cacheAllButton');
    const backgroundPlayToggle = document.getElementById('backgroundPlayToggle');
    let allowBackgroundPlayUserSetting = true;


    function savePlayerState() {
        if (audioPlayer.src && currentTrackObject) {
            localStorage.setItem(LS_KEYS.lastTrackUrl, audioPlayer.src);
            localStorage.setItem(LS_KEYS.lastTrackTitle, currentTrackObject.title);
            localStorage.setItem(LS_KEYS.lastPlaybackTime, audioPlayer.currentTime.toString());
        } else {
            localStorage.removeItem(LS_KEYS.lastTrackUrl);
            localStorage.removeItem(LS_KEYS.lastTrackTitle);
            localStorage.removeItem(LS_KEYS.lastPlaybackTime);
        }
    }

    function loadPlayerState() {
        const savedUrl = localStorage.getItem(LS_KEYS.lastTrackUrl);
        const savedTitle = localStorage.getItem(LS_KEYS.lastTrackTitle);
        const savedTime = parseFloat(localStorage.getItem(LS_KEYS.lastPlaybackTime));

        if (savedUrl && savedTitle) {
            currentTrackObject = { title: savedTitle, url: savedUrl };
            let foundSavedTrackObject = null;
            for (const categoryName in audioCategories) {
                const tracksInCategory = audioCategories[categoryName];
                foundSavedTrackObject = tracksInCategory.find(t => t.url === savedUrl);
                if (foundSavedTrackObject) break;
            }
            if(foundSavedTrackObject) currentTrackObject = foundSavedTrackObject;

            audioPlayer.src = savedUrl;
            bsCurrentTrackTitle.textContent = savedTitle;
            bsCurrentTime.textContent = formatTime(savedTime || 0);
            if (audioPlayer.src && audioPlayer.src !== window.location.href) { // Only activate if a real src is loaded
                 blackScreenPlayerControls.classList.add('active');
            }
            const allTrackItems = document.querySelectorAll('.track-item');
            allTrackItems.forEach(item => {
                if (item.dataset.trackUrl === savedUrl) {
                    currentPlayingItem = item;
                }
            });
            updatePlayPauseButtonIcon();
        }

        const savedTheme = localStorage.getItem(LS_KEYS.currentTheme);
        if (savedTheme && themes.includes(savedTheme)) {
            applyTheme(savedTheme, false);
            currentThemeIndex = themes.indexOf(savedTheme);
        } else {
            applyTheme(themes[0], false);
        }
    }

    function loadBackgroundPlaySetting() {
        const savedSetting = localStorage.getItem(LS_KEYS.allowBackgroundPlay);
        allowBackgroundPlayUserSetting = savedSetting !== null ? savedSetting === 'true' : true;
        if (backgroundPlayToggle) {
            backgroundPlayToggle.checked = allowBackgroundPlayUserSetting;
        }
    }

    function saveBackgroundPlaySetting() {
        if (backgroundPlayToggle) {
            allowBackgroundPlayUserSetting = backgroundPlayToggle.checked;
            localStorage.setItem(LS_KEYS.allowBackgroundPlay, allowBackgroundPlayUserSetting);
        }
    }

    if (backgroundPlayToggle) {
        backgroundPlayToggle.addEventListener('change', saveBackgroundPlaySetting);
    }

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            if (!allowBackgroundPlayUserSetting && !audioPlayer.paused && audioPlayer.src) {
                audioPlayer.pause();
                console.log('Audio paused: page hidden & background play disabled.');
            }
        }
    });

    function applyTheme(themeName, save = true) {
        themes.forEach(t => document.body.classList.remove(t));
        document.body.classList.add(themeName);
        if (save) {
            localStorage.setItem(LS_KEYS.currentTheme, themeName);
        }
        currentThemeIndex = themes.indexOf(themeName);
    }

    function cycleTheme() {
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        applyTheme(themes[currentThemeIndex]);
    }

    let lastTapTime = 0;
    let tapCount = 0;
    const tapDelay = 300;

    function formatTime(seconds) {
        if (isNaN(seconds) || seconds === Infinity || seconds < 0) return "0:00";
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    function updatePlayPauseButtonIcon() {
        if (!bsPlayPauseButton) return;
        bsPlayPauseButton.innerHTML = audioPlayer.paused ? '▶' : '❚❚';
        bsPlayPauseButton.title = audioPlayer.paused ? 'Play' : 'Pause';
    }

    function populateCategoriesAndTracks() {
        categoriesContainer.innerHTML = '';
        for (const categoryName in audioCategories) {
            if (audioCategories.hasOwnProperty(categoryName)) {
                const tracks = audioCategories[categoryName];
                const categoryTitleElement = document.createElement('h2');
                categoryTitleElement.classList.add('category-title');
                categoryTitleElement.textContent = categoryName;
                categoriesContainer.appendChild(categoryTitleElement);
                const trackListUl = document.createElement('ul');
                trackListUl.classList.add('track-list');
                tracks.forEach(track => {
                    const listItem = document.createElement('li');
                    listItem.classList.add('track-item');
                    listItem.dataset.trackUrl = track.url;
                    const titleSpan = document.createElement('span');
                    titleSpan.classList.add('track-title');
                    titleSpan.textContent = track.title;
                    const playIconContainer = document.createElement('div');
                    playIconContainer.classList.add('play-icon-container');
                    const playingIndicator = document.createElement('span');
                    playingIndicator.classList.add('currently-playing-indicator');
                    const playIconSpan = document.createElement('span');
                    playIconSpan.classList.add('play-icon');
                    playIconContainer.appendChild(playingIndicator);
                    playIconContainer.appendChild(playIconSpan);
                    listItem.appendChild(titleSpan);
                    listItem.appendChild(playIconContainer);
                    listItem.addEventListener('click', () => playTrack(track, listItem));
                    trackListUl.appendChild(listItem);
                });
                categoriesContainer.appendChild(trackListUl);
            }
        }
        loadPlayerState();
    }

    function playTrack(trackObject, listItemElement) {
        bsCurrentTrackTitle.textContent = trackObject.title;
        currentTrackObject = trackObject;

        if (currentPlayingItem === listItemElement && !audioPlayer.paused) {
            audioPlayer.pause();
        } else if (audioPlayer.src === trackObject.url && audioPlayer.paused && currentPlayingItem === listItemElement) {
            audioPlayer.play().then(showBlackScreenAndActivateControls).catch(e => handlePlayError(e, listItemElement));
        } else {
            if (currentPlayingItem) currentPlayingItem.classList.remove('playing');
            audioPlayer.src = trackObject.url;
            localStorage.setItem(LS_KEYS.lastTrackUrl, trackObject.url);
            localStorage.setItem(LS_KEYS.lastTrackTitle, trackObject.title);
            localStorage.setItem(LS_KEYS.lastPlaybackTime, '0');
            bsCurrentTime.textContent = "0:00";
            bsTotalDuration.textContent = "0:00";
            bsProgressBar.style.width = "0%";
            audioPlayer.play().then(() => {
                showBlackScreenAndActivateControls();
                currentPlayingItem = listItemElement;
            }).catch(e => handlePlayError(e, listItemElement));
        }
        updatePlayPauseButtonIcon();
    }

    function showBlackScreenAndActivateControls() {
        showBlackScreen();
        if (audioPlayer.src && audioPlayer.src !== window.location.href) {
             blackScreenPlayerControls.classList.add('active');
        }
    }


    function handlePlayError(error, listItemElementOnError) {
        console.error("Error playing audio:", error);
        bsCurrentTrackTitle.textContent = "Error loading track";
        if (listItemElementOnError && listItemElementOnError.classList.contains('playing')) {
            listItemElementOnError.classList.remove('playing');
        } else if (currentPlayingItem) {
            currentPlayingItem.classList.remove('playing');
        }
        updatePlayPauseButtonIcon();
        savePlayerState();
    }

    function showBlackScreen() {
        blackScreenOverlay.classList.add('visible');
        // Ensure lock button is visible and in correct state if black screen shown
        if (bsLockButton) {
            bsLockButton.style.display = 'block'; // Or 'inline-block' depending on styling
            bsLockButton.innerHTML = isBlackScreenLocked ? '🔓' : '🔒';
            bsLockButton.title = isBlackScreenLocked ? 'Unlock Screen' : 'Lock Screen';
        }
    }

    function hideBlackScreen() {
        blackScreenOverlay.classList.remove('visible');
        tapCount = 0;
        lastTapTime = 0;
        isBlackScreenLocked = false; // Reset lock state
        if (bsLockButton) {
            bsLockButton.innerHTML = '🔒'; // Reset lock button icon
            bsLockButton.title = 'Lock Screen';
            bsLockButton.style.display = 'none'; // Hide lock button when black screen is hidden
        }
    }

    blackScreenOverlay.addEventListener('click', (event) => {
        if (event.target.closest('.black-screen-player-controls') || event.target.closest('#bsLockButton')) {
            return;
        }
        if (isBlackScreenLocked) return; // Do nothing if screen is locked

        const currentTime = new Date().getTime();
        if (currentTime - lastTapTime < tapDelay) {
            tapCount++;
        } else {
            tapCount = 1;
        }
        lastTapTime = currentTime;

        if (tapCount >= 4) {
            if (!audioPlayer.paused) audioPlayer.pause();
            hideBlackScreen();
        }
    });

    if (bsLockButton) {
        bsLockButton.addEventListener('click', () => {
            isBlackScreenLocked = !isBlackScreenLocked;
            bsLockButton.innerHTML = isBlackScreenLocked ? '🔓' : '🔒';
            bsLockButton.title = isBlackScreenLocked ? 'Unlock Screen' : 'Lock Screen';
        });
    }

    audioPlayer.addEventListener('loadedmetadata', () => {
        bsTotalDuration.textContent = formatTime(audioPlayer.duration);
        if (audioPlayer.src && audioPlayer.src !== window.location.href) {
            blackScreenPlayerControls.classList.add('active');
        }
        const savedTime = parseFloat(localStorage.getItem(LS_KEYS.lastPlaybackTime));
        if (audioPlayer.src === localStorage.getItem(LS_KEYS.lastTrackUrl) && savedTime && !isNaN(savedTime) && savedTime > 0 && !cacheAllButton.disabled) {
            if (audioPlayer.currentTime < 1 || Math.abs(audioPlayer.currentTime - savedTime) > 1) {
                 audioPlayer.currentTime = savedTime;
            }
        }
        bsCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        if (audioPlayer.duration > 0) {
            bsProgressBar.style.width = `${(audioPlayer.currentTime / audioPlayer.duration) * 100}%`;
        } else {
            bsProgressBar.style.width = `0%`;
        }
        updatePlayPauseButtonIcon();
    });

    audioPlayer.addEventListener('timeupdate', () => {
        const currentTime = audioPlayer.currentTime;
        bsCurrentTime.textContent = formatTime(currentTime);
        if (audioPlayer.duration && !isDraggingProgressBar) {
            bsProgressBar.style.width = `${(currentTime / audioPlayer.duration) * 100}%`;
        } else if (!audioPlayer.duration && !isDraggingProgressBar) {
            bsProgressBar.style.width = `0%`;
        }
    });

    audioPlayer.addEventListener('ended', () => {
        hideBlackScreen(); // This will also reset the lock
        if (currentPlayingItem) currentPlayingItem.classList.remove('playing');
        if (currentTrackObject) bsCurrentTrackTitle.textContent = currentTrackObject.title;
        else bsCurrentTrackTitle.textContent = "Track ended";
        bsCurrentTime.textContent = formatTime(audioPlayer.duration || 0);
        bsProgressBar.style.width = "100%";
        audioPlayer.currentTime = 0;
        audioPlayer.pause();
        updatePlayPauseButtonIcon();
        localStorage.setItem(LS_KEYS.lastPlaybackTime, '0');
    });

    audioPlayer.addEventListener('pause', () => {
        if (currentPlayingItem) currentPlayingItem.classList.remove('playing');
        updatePlayPauseButtonIcon();
        savePlayerState();
    });

    audioPlayer.addEventListener('play', () => {
        if (currentPlayingItem) currentPlayingItem.classList.add('playing');
        if (audioPlayer.src && audioPlayer.src !== window.location.href) {
            blackScreenPlayerControls.classList.add('active');
             if (bsLockButton) bsLockButton.style.display = 'block'; // Show lock button when play starts
        }
        updatePlayPauseButtonIcon();
    });

    audioPlayer.addEventListener('error', (e) => {
        console.error('Audio Player Error:', e);
        handlePlayError("Audio player encountered an error.", currentPlayingItem);
    });

    function seek(event) {
        if (!audioPlayer.duration || isNaN(audioPlayer.duration) || audioPlayer.duration <= 0) return;
        const progressBarRect = bsProgressBarWrapper.getBoundingClientRect();
        let clickX = event.clientX;
        if (event.type.startsWith('touch')) clickX = event.touches[0].clientX;
        let percentage = (clickX - progressBarRect.left) / progressBarRect.width;
        percentage = Math.max(0, Math.min(1, percentage));
        const newTime = percentage * audioPlayer.duration;
        audioPlayer.currentTime = newTime;
        bsProgressBar.style.width = `${percentage * 100}%`;
        bsCurrentTime.textContent = formatTime(newTime);
        savePlayerState();
    }

    bsProgressBarWrapper.addEventListener('mousedown', (e) => { isDraggingProgressBar = true; seek(e); document.body.style.userSelect = 'none'; });
    document.addEventListener('mousemove', (e) => { if (isDraggingProgressBar) seek(e); });
    document.addEventListener('mouseup', () => { if (isDraggingProgressBar) { isDraggingProgressBar = false; document.body.style.userSelect = ''; }});
    document.addEventListener('mouseleave', () => { if (isDraggingProgressBar) { isDraggingProgressBar = false; document.body.style.userSelect = ''; }});
    bsProgressBarWrapper.addEventListener('touchstart', (e) => { isDraggingProgressBar = true; seek(e); e.preventDefault(); }, { passive: false });
    document.addEventListener('touchmove', (e) => { if (isDraggingProgressBar) seek(e); }, { passive: false });
    document.addEventListener('touchend', () => { if (isDraggingProgressBar) isDraggingProgressBar = false; });

    if (bsPlayPauseButton) {
        bsPlayPauseButton.addEventListener('click', () => {
            if (!audioPlayer.src || !currentTrackObject) return;
            if (audioPlayer.paused) audioPlayer.play().catch(e => handlePlayError(e, currentPlayingItem));
            else audioPlayer.pause();
        });
    }

    if (bsRestartButton) {
        bsRestartButton.addEventListener('click', () => {
            if (!audioPlayer.src || !currentTrackObject) return;
            audioPlayer.currentTime = 0;
            if (audioPlayer.paused) audioPlayer.play().catch(e => handlePlayError(e, currentPlayingItem));
        });
    }

    window.addEventListener('beforeunload', () => {
        if (audioPlayer.src && (!audioPlayer.paused || audioPlayer.currentTime > 0)) {
            savePlayerState();
        }
    });

    if (cacheAllButton) {
        cacheAllButton.addEventListener('click', async () => {
            if (!('serviceWorker' in navigator && navigator.serviceWorker.controller)) {
                alert("Service Worker not active. Caching via simulated play might not work as expected for offline use. Please reload.");
            }
            cacheAllButton.disabled = true;
            cacheAllButton.innerHTML = "Caching... (0%)";
            const allTracksToProcess = [];
            for (const categoryName in audioCategories) {
                if (audioCategories.hasOwnProperty(categoryName)) {
                    audioCategories[categoryName].forEach(track => allTracksToProcess.push(track));
                }
            }
            if (allTracksToProcess.length === 0) {
                cacheAllButton.innerHTML = "📥 Cache All";
                cacheAllButton.disabled = false;
                alert("No tracks to cache.");
                return;
            }
            let succeededCount = 0, failedCount = 0;
            const totalTracks = allTracksToProcess.length;
            const savedPlayerState = { src: audioPlayer.src, title: currentTrackObject ? currentTrackObject.title : null, time: audioPlayer.currentTime, isPaused: audioPlayer.paused, currentTrackObj: currentTrackObject, currentPlayingLi: currentPlayingItem };
            const wasMuted = audioPlayer.muted;
            if (!audioPlayer.paused) audioPlayer.pause();
            audioPlayer.muted = true;
            console.log(`[CacheAll-SimPlay] Starting simulated play for ${totalTracks} tracks.`);
            for (let i = 0; i < totalTracks; i++) {
                const trackToCache = allTracksToProcess[i];
                cacheAllButton.innerHTML = `Caching... (${Math.round(((i + 1) / totalTracks) * 100)}%)`;
                try {
                    audioPlayer.src = trackToCache.url;
                    await audioPlayer.play();
                    audioPlayer.pause();
                    audioPlayer.currentTime = 0;
                    console.log(`[CacheAll-SimPlay] Successfully simulated play for: ${trackToCache.title}`);
                    succeededCount++;
                } catch (error) {
                    console.error(`[CacheAll-SimPlay] Error for ${trackToCache.title}:`, error, `URL: ${trackToCache.url}`);
                    failedCount++;
                }
                await new Promise(resolve => setTimeout(resolve, 150));
            }
            audioPlayer.muted = wasMuted;
            currentTrackObject = savedPlayerState.currentTrackObj;
            currentPlayingItem = savedPlayerState.currentPlayingLi;

            if (savedPlayerState.src) {
                audioPlayer.src = savedPlayerState.src;
                bsCurrentTrackTitle.textContent = savedPlayerState.title || "Track Title";
                const restorePlayback = () => {
                    audioPlayer.currentTime = savedPlayerState.time;
                    bsCurrentTime.textContent = formatTime(audioPlayer.currentTime);
                    if (audioPlayer.duration > 0) {
                        bsTotalDuration.textContent = formatTime(audioPlayer.duration);
                        bsProgressBar.style.width = `${(audioPlayer.currentTime / audioPlayer.duration) * 100}%`;
                    } else {
                        bsTotalDuration.textContent = "0:00";
                        bsProgressBar.style.width = "0%";
                    }
                    if (!savedPlayerState.isPaused) audioPlayer.play().catch(e => { console.warn("[CacheAll-SimPlay] Error restoring play:", e); updatePlayPauseButtonIcon(); if (currentPlayingItem) currentPlayingItem.classList.remove('playing'); });
                    updatePlayPauseButtonIcon();
                    if (currentPlayingItem && !savedPlayerState.isPaused) currentPlayingItem.classList.add('playing');
                    else if (currentPlayingItem) currentPlayingItem.classList.remove('playing');
                    audioPlayer.removeEventListener('loadedmetadata', restorePlayback);
                    audioPlayer.removeEventListener('error', restoreError);
                };
                const restoreError = (e) => {
                    console.warn("[CacheAll-SimPlay] Error loading metadata for saved track:", e, audioPlayer.src);
                    bsCurrentTrackTitle.textContent = "Error restoring track";
                    updatePlayPauseButtonIcon();
                    audioPlayer.removeEventListener('loadedmetadata', restorePlayback);
                    audioPlayer.removeEventListener('error', restoreError);
                };
                if (audioPlayer.src && audioPlayer.src !== window.location.href) {
                    if (audioPlayer.readyState >= HTMLMediaElement.HAVE_METADATA && audioPlayer.src === savedPlayerState.src) restorePlayback();
                    else { audioPlayer.addEventListener('loadedmetadata', restorePlayback); audioPlayer.addEventListener('error', restoreError); }
                } else {
                    audioPlayer.src = ""; bsCurrentTrackTitle.textContent = "Track Title"; bsCurrentTime.textContent = "0:00"; bsTotalDuration.textContent = "0:00"; bsProgressBar.style.width = "0%"; updatePlayPauseButtonIcon(); if(currentPlayingItem) currentPlayingItem.classList.remove('playing');
                }
            } else {
                audioPlayer.src = ""; bsCurrentTrackTitle.textContent = "Track Title"; bsCurrentTime.textContent = "0:00"; bsTotalDuration.textContent = "0:00"; bsProgressBar.style.width = "0%"; updatePlayPauseButtonIcon(); if(currentPlayingItem) currentPlayingItem.classList.remove('playing');
            }
            cacheAllButton.innerHTML = "📥 Cache All";
            cacheAllButton.disabled = false;
            let message = `Simulated play/caching finished.\nSucceeded: ${succeededCount}\nFailed: ${failedCount}`;
            if (failedCount > 0) message += "\nCheck console (AbortErrors common if tab not focused).\nSW precaching should ensure offline availability if SW install succeeded.";
            else if (succeededCount === totalTracks) message += "\nAll tracks simulated. SW precaching should ensure offline availability.";
            alert(message);
            console.log(`[CacheAll-SimPlay] ${message.replace(/\n/g, ' ')}`);
        });
    }

    loadBackgroundPlaySetting();
    updatePlayPauseButtonIcon();
    populateCategoriesAndTracks();
    setInterval(cycleTheme, themeIntervalTime);
    if (bsLockButton) bsLockButton.style.display = 'none'; // Initially hide lock button
});