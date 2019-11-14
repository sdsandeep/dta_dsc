//Scroll back to top button 
window.onscroll = function () {
	showBacktoTop();
}

function showBacktoTop() {
	if (document.body.screenTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById("id-back-to-top").style.display = "block";
	} else {
		document.getElementById("id-back-to-top").style.display = "none";
	}
}

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// For Tab activity
function openMainTab(evt, tabName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("nx-main-tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("nx-main-tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" mainactive", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " mainactive";
}
// For Tab activity
function openTab(evt, tabName) {
	let i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("nx-tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("nx-tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}


//Function to show the video
function showVideo(ele) {
	showHideClass(ele.parentNode, "hide", "show");
	//showHideClass("video", "show", "hide");
	//let id = document.getElementById
	console.log(ele.parentNode)
	let vid = document.getElementById("planERM_video");
	vid.autoplay = true;
	vid.load();	
}
function showHideClass(eleId, add, remove) {
	//document.getElementById(eleId).classList.add(show);
	//document.getElementById(eleId).classList.remove(hide);
	eleId.classList.add(add)
	eleId.classList.remove(remove)
}

function onVidLoad() {
	let ele = document.getElementsByClassName("nx-btn-play")[0];	
	let vid = document.getElementById("planERM_video");
	
	vid.onplay = function (){
		showHideClass(ele.parentNode, "hide", "show");
	}
	vid.onpause = function(){
		showHideClass(ele.parentNode, "show", "hide");
	}
	vid.onended = function (){		
		showHideClass(ele.parentNode, "show", "hide");
	}
}
