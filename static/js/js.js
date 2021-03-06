
//------global code

//smooth scroll

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
    block: "start"
  });

});


//------Home page code

if (window.location.pathname === '/') {
	

	function toggleDocs(event) {

		if (event.target && event.target.className == 'sectionTab') { 
			var parent = event.target.parentElement,
				how = document.querySelector('.how'),
				contact = document.querySelector('.contact'),
				video = document.getElementById('video');

			if (parent.classList.contains('video')) {
				how.classList.add("close");
				contact.classList.add("close");
			} 
			else if (parent.classList.contains('how')){
				how.classList.remove("close");
				contact.classList.add("close");
			} 
			else if (parent.classList.contains('contact')){
				how.classList.remove("close");
				contact.classList.remove("close");
			}
		};


	};

	document.addEventListener('click', toggleDocs, true);

	//------popout section control 

	//open

var open1 = document.getElementById("identify"),
	open2 = document.getElementById("establish"),
	open3 = document.getElementById("programme"),
	open4 = document.querySelector("#design"),
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
		popout3.classList.add("hide");
		popout4.classList.add("hide");
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
}


// example page

if (window.location.pathname === '/westken/' || window.location.pathname === '/presentation/'){
	const nav = document.querySelector('#navbar');
		const topOfNav = nav.offsetTop;

		function fixNav(){
			if(window.scrollY >= topOfNav){
				document.body.classList.add('fixedNav')
				document.body.style.paddingTop = nav.offsetHeight + 'px';
			}else{
				document.body.classList.remove('fixedNav');
				document.body.style.paddingTop = 0;
			}
		}

		window.addEventListener('scroll', fixNav);
	
	//image slider

var slideIndex = [1,1,1,1,1,1,1,1,1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8", "mySlides9", "mySlides10"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);
showSlides(1, 9);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
}

// presentation next section buttons

function goToNextAnchor() {
  var anchors = document.anchors;
  var loc = window.location.href.replace(/#.*/,'');
  var nextAnchorName;

  // Get name of the current anchor from the hash
  // if there is one
  var anchorName = window.location.hash.replace(/#/,'');

  // If there is an anchor name...
  if (anchorName) {

	// Find current element in anchor list, then
	// get next anchor name, or if at last anchor, set to first
	for (var i=0, iLen=anchors.length; i<iLen; i++) {
	  if (anchors[i].name == anchorName) {
		nextAnchorName = anchors[++i % iLen].name;
		break;
	  }
	}
  }

  // If there was no anchorName or no match,
  // set nextAnchorName to first anchor name
  if (!nextAnchorName) {
	nextAnchorName = anchors[0].name;
  }

  // Go to new URL
  window.location.href = loc + '#' + nextAnchorName;
}



							  