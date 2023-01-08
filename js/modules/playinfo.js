import PlayList from "./playlist.js";

const PlayerInfo = (_ =>{

  //Catch the dom
  const playerCount =  document.querySelector(".player__count");
  const playeTrigger =  document.querySelector(".player__trigger");

  const init = _ =>{
    render();
    listeners();
  }

  const state = {
    songsLength: 0,
    isPlaying: false
  }
  const setState = obj =>{
    state.songsLength = obj.songsLength;
    state.isPlaying = obj.isPlaying;
    render();
  }

  const listeners = _ =>{
    playeTrigger.addEventListener("click", _ =>{
      state.isPlaying = state.isPlaying ? false : true;
      render();
      PlayList.flip()
    })
  }
  

  const render = _ =>{
    playerCount.innerHTML = state.songsLength;
  }

  return{
    init,
    setState
  }
})();

export default PlayerInfo; 