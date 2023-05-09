const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");
const prev = document.querySelector("#controls #prev");
const play = document.querySelector("#controls #play");
const next = document.querySelector("#controls #next");




const player = new MusicPlayer(musicList);

let music = player.getMusic();
// console.log(music.getName());






/*
player.next();
music = player.getMusic();
console.log(music.getName());

player.previous();
music = player.getMusic();
console.log(music.getName());

player.next();
music = player.getMusic();
console.log(music.getName());

player.next();
music = player.getMusic();
console.log(music.getName());

player.next();
music = player.getMusic();
console.log(music.getName());
*/