window.onload = function () {
  var video = document.getElementById('video'),
      seeker = document.getElementById('seeker'),
      volume = document.getElementById('volume'),
      play = document.getElementById('playPause'),
      mute = document.getElementById('mute'),
      full = document.getElementById('fullScreen');

  seeker.addEventListener('change', function() {
    var time = video.duration * (seeker.value / 100);
    video.currentTime = time;
	  play.className = 'pause';
  });

  video.addEventListener('timeupdate', function() {
    var value = (100 / video.duration) * video.currentTime;
    seeker.value = value;
  });

  video.addEventListener('ended', function() {
    play.className = 'pause';
  });

  seeker.addEventListener('mousedown', function() {
    video.pause();
  });
  seeker.addEventListener('mouseup', function() {
    video.play();
  });

  volume.addEventListener('change', function() {
    video.volume = volume.value;
  });

  play.addEventListener('click', function () {
    if (video.paused == true) {
      video.play();
      play.className = 'pause';
    }
    else {
      video.pause();
      play.className = 'play';
    }
  });

  mute.addEventListener('click', function () {
    if (video.muted == false) {
      video.muted = true;
      mute.className = 'off';
    }
    else {
      video.muted = false;
      mute.className = 'on';
    }
  });

  full.addEventListener('click', function() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
    else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    }
    else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  });
}

//test page below script

function toggleDocs(event) {

    if (event.target && event.target.className == 'sectionTab') { 
		var parent = event.target.parentElement,
			how = document.querySelector('.how'),
			contact = document.querySelector('.contact'),
			play = document.getElementById('playPause'),
			video = document.getElementById('video');
		
        if (parent.classList.contains('video')) {
			how.classList.add("close");
			contact.classList.add("close");
        } 
		else if (parent.classList.contains('how')){
			how.classList.remove("close");
			contact.classList.add("close");
			video.pause();
			play.className = 'play';
		} 
		else if (parent.classList.contains('contact')){
			how.classList.remove("close");
			contact.classList.remove("close");
			video.pause();
			play.className = 'play';
		}
    };
	
	
};

document.addEventListener('click', toggleDocs, true);

