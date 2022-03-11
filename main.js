const player = document.querySelector(".player"),
  playBtn = document.querySelector(".play"),
  pauseBtn = document.querySelector(".pause"),
  audio = document.querySelector(".audio__header"),
  progressContainer = document.querySelector(".progress__container"),
  progress = document.querySelector(".progress"),
  imgSrc = document.querySelector(".img__src");

const songs = ["Bright Lights - War For Love"];
let songIndex = 0;

function loadSong(song) {
  audio.src = `audio/Bright Lights - War For Love.mp3`;
}
loadSong(songs[songIndex]);
// Play
function playSong() {
  imgSrc.src = "./svg/whiteBtn.svg";
  player.classList.add("play");
  audio.play();
}
function pauseSong() {
  imgSrc.src = "./svg/playBtn.svg";
  player.classList.remove("play");
  audio.pause();
}
playBtn.addEventListener("click", () => {
  const isPlay = player.classList.contains("play");
  if (isPlay) {
    pauseSong();
  } else {
    playSong();
  }
});
// Progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}
audio.addEventListener("timeupdate", updateProgress);
// Set progress
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}
progressContainer.addEventListener("click", setProgress);
// =================== Player with playList
const playerLow = document.querySelector(".playerLow"),
  playBtnLow = document.querySelector(".play"),
  prevBtnLow = document.querySelector(".prev"),
  nextBtnLow = document.querySelector(".next"),
  imgPlayLow = document.querySelector(".img__low-player");
// Songs name
const songsLow = [
  "3LAU - How You Love Me (feat Bright Lights)",
  "Bright Lights - War For Love",
  "Pink Is Punk  Benny Benassi feat. Bright Lights - Ghost Extended Mix",
  "Hardwell - Never Say Goodbye (feat. Dyro, Bright Lights)",
  "Zeds Dead Dirtyphonics - Where Are You Now (feat. Bright Lights)",
  "Zedd feat. Bright Lights - Follow You Down",
];
// First song
let songIndexLow = 0;
function loadSongLow(songLow) {
  audio.src = `audio/${songLow}.mp3`;
}
loadSongLow(songsLow[songIndexLow]);
