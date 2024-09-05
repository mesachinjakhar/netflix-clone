window.addEventListener('load', function() {
    const video = document.getElementById('videoPlayer');
    
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { 
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
    
    video.play();
  });