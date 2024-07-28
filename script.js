console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/song1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let currentSongName = document.getElementById('currentSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
  {songName: "Kal ho na ho", filepath: "songs/song1.mp3", coverpath: "coversong/cover1.jpg"},
  {songName: "Perfect", filepath: "songs/song2.mp3", coverpath: "coversong/cover2.jpg"},
  {songName: "Yeh Dil Dewanna", filepath: "songs/song3.mp3", coverpath: "coversong/cover3.jpg"},
  {songName: "Loving you", filepath: "songs/song4.mp3", coverpath: "coversong/cover4.jpg"},
  {songName: "Bekhayali", filepath: "songs/song5.mp3", coverpath: "coversong/cover5.jpg"},
  {songName: "Yeh dil hai mushkil", filepath: "songs/song6.mp3", coverpath: "coversong/cover6.jpg"},
  {songName: "Sunn raha hai na tui", filepath: "songs/song7.mp3", coverpath: "coversong/cover7.jpg"},
  {songName: "Rabata", filepath: "songs/song8.mp3", coverpath: "coversong/cover8.jpg"},
  {songName: "Channa Mereya", filepath: "songs/song9.mp3", coverpath: "coversong/cover9.jpg"}
];

// Handle play/pause click
masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-play');
    gif.style.opacity = 0;
  }
});

// Listen to events
audioElement.addEventListener('timeupdate', () => {
  // Update Seekbar
  let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
  audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.classList.remove('fa-pause');
    element.classList.add('fa-play');
  });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i) => {
  element.addEventListener('click', (e) => {
    makeAllPlays();
    songIndex = i;
    e.target.classList.remove('fa-play');
    e.target.classList.add('fa-pause');
    audioElement.src = songs[songIndex].filepath;
    currentSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
  });
});
