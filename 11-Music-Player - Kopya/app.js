const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");
const prev = document.querySelector("#controls #prev");
const play = document.querySelector("#controls #play");
const next = document.querySelector("#controls #next");
const duration = document.querySelector("#duration");
const currentTime = document.querySelector("#current-time");
const progressBar = document.querySelector("#progress-bar");
const volume = document.querySelector("#volume");
const volumeBar = document.querySelector("#volume-bar");





const player = new MusicPlayer(musicList);



window.addEventListener("load", () => {
    let music = player.getMusic();
    displayMusic(music);
});

function displayMusic(music) {
    // singer.innerText = music.title;
    title.innerText = music.getName();
    singer.innerText = music.singer;
    image.src = "img/" + music.img;
    audio.src = "mp3/" + music.file;
}

play.addEventListener("click", () => {
    const isMusicPlay = container.classList.contains("playing");
    isMusicPlay ? pauseMusic() : playMusic();
    // audio.play();
});

const pauseMusic = () => {
    container.classList.remove("playing");
    play.classList = "fa-solid fa-play";
    audio.pause();
}

const playMusic = () => {
    container.classList.add("playing");
    play.classList = "fa-solid fa-pause";
    audio.play();
}

prev.addEventListener("click", () => {
    prevMusic();
});

const prevMusic = () => {
    player.prev();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
}

next.addEventListener("click", () => {
    nextMusic();
});

const nextMusic = () => {
    player.next();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
}

const calculateTime = (toplamSaniye) => {
    const dakika = Math.floor(toplamSaniye / 60);
    const saniye = Math.floor(toplamSaniye % 60);
    const guncellenenSaniye = saniye < 10 ? `0${saniye}` : `${saniye}`;
    const sonuc = `${dakika}:${guncellenenSaniye}`;
    return sonuc;
}

audio.addEventListener("loadedmetadata", () => {
    // console.log(audio.duration);
    duration.textContent = calculateTime(audio.duration);
    progressBar.max = Math.floor(audio.duration);
});

audio.addEventListener("timeupdate", () => {
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.textContent = calculateTime(progressBar.value);
});

progressBar.addEventListener("input", () => {
    currentTime.textContent = calculateTime(progressBar.value);
    audio.currentTime = progressBar.value;
});


// Sessize alma ve sesli yapma
let muteState = "muted"; // muted - unmuted

volumeBar.addEventListener("input", (e) => {
    const value = e.target.value;
    audio.volume = value / 100; // 0-1 arası değer alır. bu yüzden 100'e böldük
    if (value == 0) {
        audio.muted = true;
        muteState = "unmuted";
        volume.classList = "fa-solid fa-volume-xmark";
    } else {
        audio.muted = false;
        muteState = "muted";
        volume.classList = "fa-solid fa-volume-high";
    }
});

volume.addEventListener("click", function () {
    if (muteState === "muted") {
        audio.muted = true;
        muteState = "unmuted";
        volume.classList = "fa-solid fa-volume-xmark";
        volumeBar.value = 0;
    } else {
        // unmuted
        audio.muted = false;
        muteState = "muted";
        // volume.className = "fa-solid fa-volume-high";
        volume.classList = "fa-solid fa-volume-high";
        volumeBar.value = 100;
    }
});

