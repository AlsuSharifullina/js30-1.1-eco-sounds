const player = document.querySelector('.player'),
      playBtn = document.querySelector('.play'),
      prevBtn = document.querySelector('.prev'),
      nextBtn = document.querySelector('.next'),
      audio = document.querySelector('.audio'),
      progressContainer = document.querySelector('.progress__container'),
      progress = document.querySelector('.progress'),
      cover = document.querySelector('.cover__img'),
      imgSrc = document.querySelector('.img__src'),
      title = document.querySelector('.song'),
      currentTimeEl = document.querySelector('.current-time'),
      totalTimeEl = document.querySelector('.total-time');

// Названия песен 
const songs = ["Beyonce <br> Don't Hurt Yourself", "Dua Lipa <br> Don't Start Now"];
// Имена файлов аудио
const audioFiles = ["beyonce.mp3", "dua_lipa.mp3"];


let songIndex = 0;

// Инициализация песни
function loadSong(song, audioFile) {
    title.innerHTML = song;
    audio.src = `./audio/${audioFile}`;
    cover.src = `./img/cover${songIndex + 1}.png`;
}

loadSong(songs[songIndex], audioFiles[songIndex]);

//play
function playSong(){
    player.classList.add('play')
    player .classList.add('active')
    imgSrc.src = './svg/pause.png'
    audio.play()
}

//pause
function pauseSong(){
    player.classList.remove('play')
    player .classList.remove('active')
    imgSrc.src = './svg/play.png'
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

//next and prev  song

function nextSong(){
    songIndex++
    if(songIndex > songs.length -1){
        songIndex = 0
    }
    loadSong(songs[songIndex], audioFiles[songIndex]);
    playSong()
}
nextBtn.addEventListener('click', nextSong)


function prevSong(){
    songIndex--

    if(songIndex < 0){
        songIndex = songs.length -1
    }
    loadSong(songs[songIndex], audioFiles[songIndex]);
    playSong()
}
prevBtn.addEventListener('click',  prevSong)


//progress bar

function updateProgress(e){
    const {duration, currentTime} = e.srcElement
    const progressPecent = (currentTime / duration) * 100
    progress.style.width = `${progressPecent}%`

    currentTimeEl.textContent = formatTime(currentTime);

    // Обновим продолжительность трека при первом обновлении
    if (!isNaN(duration)) {
        totalTimeEl.textContent = formatTime(duration);
    }
}

audio.addEventListener('timeupdate', updateProgress)

//set progress

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
 
    audio.currentTime = ( clickX/width) * duration

}

progressContainer.addEventListener('click', setProgress)


//autoplay

audio.addEventListener('ended', nextSong)


function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${minutes}:${sec < 10 ? '0' : ''}${sec}`;
}

