import { songList } from "../data/songs.js";
import PlayerInfo from "../modules/playinfo.js";

const PlayList = (()=>{

  //catch the dom
  const playlistEl = document.querySelector(".playlist");
  const playTrigger = document.querySelector(".player__trigger .fa");


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
        renderAll()
      } 
    });

    //playNext function
    currentSong.addEventListener("ended" , function(){
      if(songs[currentlyPlayingIndex + 1]){
        playNext();
      }
    })
  }




  //Helper Functions
  
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
    currentlyPlayingIndex = clickedIndex;
    changeAudioSrc();
    playerControl();
   }

   PlayerInfo.setState({
    songsLength: songs.length,
    isPlaying: !currentSong.paused
   })
  }
  

  
  const renderSongs = () =>{

    const toggleIcon = Itemindex =>{
      if(currentlyPlayingIndex === Itemindex){
        if(currentSong.paused){
          playTrigger.classList.add("fa-play")
        }else{
          playTrigger.classList.replace("fa-play", "fa-pause");
        }
        return currentSong.paused ? "fa-play" : "fa-pause";
      }else{
        return "fa-play"
      }
    }


    let markup = "";
    songs.forEach((songObj,index) => {
      markup += `
        <li class="playlist__song ${index === currentlyPlayingIndex ? "song--active" : ""}">
          <div class="song-index">${songObj.id}</div>
          <div class="player-control">
            <i class="fa ${toggleIcon(index)} pp-icon"></i>
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
    PlayerInfo.setState({
      songsLength: songs.length,
      isPlaying: !currentSong.paused
    })
  }


  return{
    renderAll
  }
})();

export default PlayList;