
const TrackBar = (_ =>{

  //setState
  const state = {
    width: 0,
    currentTrackTime: 0,
    fullTrackTime: 0
  }
  //catch the dom
  const trackbarFill = document.querySelector(".track-bar__fill");


  const init = _ =>{
    render();
  }

  const render = _ =>{
    trackbarFill.style.width =  `${state.width}%`
  }

  const getPercentage =  (current, full) =>{
    return (current/full) * 100;
  }
  const setState = obj =>{
    state.currentTrackTime =  obj.currentTime,
    state.fullTrackTime =  obj.duration,
    state.width = getPercentage(state.currentTrackTime,state.fullTrackTime)
    render();
  }


  return{
    init,
    setState
  }
})();
export default TrackBar;