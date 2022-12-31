const PlayerInfo = (_ =>{

  
  const playerCount =  document.querySelector(".player__count");

  const init = _ =>{
    render();
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

  const render = _ =>{
    playerCount.innerHTML = state.songsLength;
  }

  return{
    init,
    setState
  }
})();

export default PlayerInfo; 