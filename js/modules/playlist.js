import { songList } from "../data/songs.js";

const PlayList = (()=>{

  //catch the dom
  const playlistEl = document.querySelector(".playlist");


  //states
  let songs = songList;
  let currentlyPlayingIndex = 0;
  let currentSong = new Audio(songs[currentlyPlayingIndex].url);
  let isPlaying = false;


  //Listeners
  const listeners = _ =>{
    playlistEl.addEventListener("click", function(e) {
      if(e.target && e.target.matches(".fa")){
        let listElem = e.target.parentNode.parentNode;
        let listElemIndex = [...listElem.parentElement.children].indexOf(listElem)
        mainPlay(listElemIndex);
      } 
    });

    //playNext function
    currentSong.addEventListener("ended" , function(){
      if(currentlyPlayingIndex + 1){
        playNext();
      }
    })
  }




  //Helper Functions
  const toggleIcon = () =>{
    return currentSong.paused ? "play" : "pause";
  }
  const changeAudioSrc = () =>{
    return currentSong.src = songs[currentlyPlayingIndex].url;
  }
  const playerControl = () =>{
    return currentSong.paused ? currentSong.play() : currentSong.pause();
  }
  const playNext = () =>{
      currentlyPlayingIndex++
      changeAudioSrc()
      playerControl()
      renderAll()
  }

  const mainPlay = clickedIndex =>{
    /*
      1.check whether new song or currentsong
      2.playeconntorl
      3.change src of the audio
    */
   if(currentlyPlayingIndex === clickedIndex){
    console.log("current song");
    playerControl();
   }else{
    console.log("new song");
    currentlyPlayingIndex == clickedIndex;
    changeAudioSrc();
    playerControl();
   }
  }
  

  
  const renderSongs = () =>{
    let markup = "";
    songs.forEach((songObj,index) => {
      markup += `
        <li class="playlist__song ${index === currentlyPlayingIndex ? "song--active" : ""}">
          <div class="song-index">${songObj.id}</div>
          <div class="player-control">
            <i class="fa fa-${toggleIcon()} pp-icon"></i>
          </div>
          <div class="playlist__song-details">
            <div class="playlist__song-name">${songObj.title}</div>
            <div class="playlist__song-artist">${songObj.artist}</div>
          </div>
          <div class="playlist__song-duration">
            ${songObj.duration}
          </div>
        </li> 
      `
    });

    playlistEl.innerHTML = markup;
  }


  //main function
  const renderAll = () =>{
    renderSongs();
    listeners();
  }


  return{
    renderAll
  }
})();

export default PlayList;