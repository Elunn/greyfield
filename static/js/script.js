


window.onload = function () {
  var video = document.getElementById('video'),
      seeker = document.getElementById('seeker'),
      volume = document.getElementById('volume'),
      play = document.getElementById('playPause'),
      mute = document.getElementById('mute'),
      full = document.getElementById('fullScreen'),
	  text = document.getElementById('fadeText'); 

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
	text.classList.remove("fade");
  });

  seeker.addEventListener('mousedown', function() {
    video.pause();
  });
  seeker.addEventListener('mouseup', function() {
    video.play();
	  text.classList.add("fade");
  });

  volume.addEventListener('change', function() {
    video.volume = volume.value;
  });

  play.addEventListener('click', function () {
    if (video.paused == true) {
      video.play();
      play.className = 'pause';
		text.classList.add("fade");
    }
    else {
      video.pause();
      play.className = 'play';
		text.classList.remove("fade");
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

//------popout section control 

//open

var open1 = document.getElementById("identify"),
	open2 = document.getElementById("establish"),
	open3 = document.getElementById("programme"),
	open4 = document.getElementById("design"),
	popout1 = document.getElementById("popout1"),
	popout2 = document.getElementById("popout2"),
	popout3 = document.getElementById("popout3"),
	popout4 = document.getElementById("popout4"),
	popContainer = document.getElementById("popoutContainer");

open1.addEventListener("click", function(){ 	
	popout1.classList.remove("hide");
	popContainer.classList.remove("hide");
});

open2.addEventListener("click", function(){ 	
	popout2.classList.remove("hide");
	popContainer.classList.remove("hide");
});

open3.addEventListener("click", function(){ 	
	popout3.classList.remove("hide");
	popContainer.classList.remove("hide");
});

open4.addEventListener("click", function(){ 	
	popout4.classList.remove("hide");
	popContainer.classList.remove("hide");
});

// close new

var close = document.querySelector('#closeClick');

close.addEventListener("click", function(){
	popContainer.classList.add("hide");
	popout1.classList.add("hide");
	popout2.classList.add("hide");
});


//popout nav open

var divs = ["popout1", "popout2", "popout3", "popout4"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if(visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.classList.remove("hide");
    } else {
      div.classList.add("hide");
    }
	  if(visibleDivId === 'popout1'){
		document.querySelector('#one').style.color = 'red';
		} else {			document.querySelector('#one').style.color = 'black';
		}
  }	
}

//------smooth scroll

console.clear();

// This works on Firefox and Chrome

// Everytime someone clicks on something
document.body.addEventListener('click', e => {
  
  const href = e.target.href;
  
  // no href attribute, no need to continue then
  if (!href) return;
  
  const id = href.split('#').pop();
  const target = document.getElementById(id);
  
  // no target to scroll to, bail out
  if (!target) return;
  
  // prevent the default quick jump to the target
  e.preventDefault();
  
  // set hash to window location so history is kept correctly
  history.pushState({}, document.title, href);
  
  // smooooooth scroll to the target!
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });

});
