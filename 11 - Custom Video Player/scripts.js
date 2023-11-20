

(function () {
  


  const player = document.querySelector('.player'),
  video = player.querySelector('.viewer'),
  progress = player.querySelector('.progress'),
  currentProgress = player.querySelector('.progress__filled'),
  toggle = player.querySelector('.toggle'),
  // referencing the children of the player object with a data skip property
  skipButtons = player.querySelectorAll('[data-skip]')
  ,
  ranges = player.querySelectorAll('.player__slider');

let mouseValue = false;
// track if the user pressed their mouse down
progress.addEventListener('mousedown' , (e) => {
  mouseValue = true;
});
progress.addEventListener('mouseup' , (e) => {
  mouseValue = false;
});
let change_position = (e) => {
  video.currentTime = ((e.offsetX / progress.offsetWidth) * video.duration)
};
progress.addEventListener('mousemove' , (e) => {
  if(mouseValue){
    change_position(e)
  }
});
progress.addEventListener('click' , 
  change_position);

skipButtons.forEach((btn) => {
 btn.addEventListener('click' , () => {
    //HTML attributes are string values. We want a number, so we parse the value into a `float`
  video.currentTime += parseFloat(btn.dataset.skip) 
 });
});

ranges.forEach((range)  => { 
  range.addEventListener('change' , () => {
    video[range.name] = range.value
  })
  range.addEventListener('input' , () => {
    video[range.name] = range.value
  })
  range.addEventListener('mousemove' , () => {
    video[range.name] = range.value
  })
})





toggle.addEventListener('click',  () =>{ 
     if(video.paused){
      video.play()
      console.log('play')
     }else{
      video.pause()
      console.log('pause')
     }})
  ;


 const update_play_pause = () => {
    // toggle.textContent = video.paused ? '' : '';
    if(video.paused){
        toggle.textContent = '►'
    
     }else{
      toggle.textContent = '❚ ❚'
    
     }

  };
  
const update_progress = () => {
   currentProgress.style.flexBasis = `${(video.currentTime/ video.duration) * 100}%` 
  };

  
  
  
  video.addEventListener('click', () =>{ 
    if(video.paused ){
     video.play()
    
    }else{
     video.pause()
     
    }})
 ;
  video.addEventListener('play' , update_play_pause);
  video.addEventListener('pause' , update_play_pause);
  video.addEventListener('timeupdate' , update_progress);
 


})();