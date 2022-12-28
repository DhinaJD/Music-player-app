import { songList } from "../data/songs.js";

const PlayList = (()=>{

  //catch the dom
  const playlistEl = document.querySelector(".playlist");


  //states
  let songs = songList;
  let currentlyPlayingIndex = 0;
  let isPlaying = false;


  




  
  const renderSongs = () =>{
    let markup = "";
    songs.forEach((songObj,index) => {
      markup += `
        <li class="playlist__song">
          <div class="song-index">${songObj.id}</div>
          <div class="player-control">
            <i class="fa fa-play pp-icon"></i>
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


  const renderAll = () =>{
    renderSongs();
  }


  return{
    renderAll
  }
})();

export default PlayList;