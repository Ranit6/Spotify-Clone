console.log("Welcome to Spotify");
//initilize the variables
let songIndex = 0;
let audioElement = new Audio('song1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let audiobar;


let songs = [
  {songName: "Kal ho na ho", filepath:"songs/song1.mp3", coverpath: "covers/cover1.jpg"},
  {songName: "Perfect", filepath:"songs/song2.mp3", coverpath: "covers/cover2.jpg"},
  {songName: "Yeh Dil Dewanna", filepath:"songs/song3.mp3", coverpath: "covers/cover3.jpg"},
  {songName: "Loving you", filepath:"songs/song4.mp3", coverpath: "covers/cover4.jpg"},
  {songName: "Kal ho na ho", filepath:"songs/song1.mp3", coverpath: "covers/cover1.jpg"},
  {songName: "Kal ho na ho", filepath:"songs/song1.mp3", coverpath: "covers/cover1.jpg"},
  {songName: "Kal ho na ho", filepath:"songs/song1.mp3", coverpath: "covers/cover1.jpg"},
  {songName: "Kal ho na ho", filepath:"songs/song1.mp3", coverpath: "covers/cover1.jpg"},
  {songName: "Kal ho na ho", filepath:"songs/song1.mp3", coverpath: "covers/cover1.jpg"},
]



masterPlay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity = 1;
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-play');
    gif.style.opacity = 0;

  }
})

audioElement.addEventListener('timeupdate', ()=>{

  //Seekbar
progress =parseInt((audioElement.currentTime/audioElement.duration)*100);

myProgressBar.value = progress;


})
myProgressBar.addEventListener('change', ()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
  
  
})
const makeALlPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
     element.classList.add('fa-play-circle');
    
  }) 
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{
    console.log(e);
    makeAllPlays();
    e.target.classList.remove(fa-play);
    e.target.classList.add(fa-pause);
    audioElement.src="song3.mp3";
    audioElement.currentTime = 0;
    audioElement.play();
  })
})
