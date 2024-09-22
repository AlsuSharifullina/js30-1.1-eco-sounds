const player = document.querySelector('.player'),
      playBtn = document.querySelector('.play'),
      prevBtn = document.querySelector('.prev'),
      nextBtn = document.querySelector('.next'),
      audio = document.querySelector('.audio'),
      progressContainer = document.querySelector('.progress__container'),
      progress = document.querySelector('.progress'),
      cover = document.querySelector('.cover__img'),
      imgSrc = document.querySelector('.img__src'),
      title = document.querySelector('.song');

// Названия песен 
const songs = ["Beyonce <br> Don't Hurt Yourself", "Dua Lipa <br> Don't Start Now"];
// Имена файлов аудио
const audioFiles = ["beyonce.mp3", "dua_lipa.mp3"];

// Индекс текущей песни
let songIndex = 1;

// Инициализация песни
function loadSong(song, audioFile) {
    // Установка названия песни
    title.innerHTML = song;
    // Установка пути к аудиофайлу
    audio.src = `./audio/${audioFile}`;
    // Установка картинки обложки
    cover.src = `./img/cover${songIndex + 1}.png`;
}

// Загружаем первую песню
loadSong(songs[songIndex], audioFiles[songIndex]);

//play
function playSong(){
    player.classList.add('play')
    player .classList.add('active')
    audio.play()
}

//pause
function pauseSong(){
    player.classList.remove('play')
    player .classList.remove('active')
    audio.pause()
}
playBtn.addEventListener('click',()=>{
    const isPlaying = player.classList.contains('play')
    if (isPlaying) {
        pauseSong()
    } else{
        playSong()
    }
})