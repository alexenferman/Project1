// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 

/* NAV MENU */
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
} 
/* END */

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

function darkmode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

function categorysrt1() {
  var x = document.getElementById("sgs3");
    x.style.display = "none";
	var x = document.getElementById("sgs3tag");
    x.style.display = "none";
	
		var x = document.getElementById("ztez828");
    x.style.display = "none";
	var x = document.getElementById("ztez828tag");
    x.style.display = "none";
	
	var x = document.getElementById("motoe2020");
    x.style.display = "none";
	var x = document.getElementById("motoe2020tag");
    x.style.display = "none";
	
	var x = document.getElementById("androidgeneral");
    x.style.display = "none";
	var x = document.getElementById("androidgeneraltag");
    x.style.display = "none";
	
	var x = document.getElementById("clearbutton");
    x.style.display = "block";
} 

function categorygalaxys3() {
  var x = document.getElementById("srt");
    x.style.display = "none";
	var x = document.getElementById("srttag");
    x.style.display = "none";
	
	var x = document.getElementById("ztez828");
    x.style.display = "none";
	var x = document.getElementById("ztez828tag");
    x.style.display = "none";
	
	var x = document.getElementById("motoe2020");
    x.style.display = "none";
	var x = document.getElementById("motoe2020tag");
    x.style.display = "none";
	
	var x = document.getElementById("androidgeneral");
    x.style.display = "none";
	var x = document.getElementById("androidgeneraltag");
    x.style.display = "none";
	
	var x = document.getElementById("clearbutton");
    x.style.display = "block";
 
} 

function categoryztez828() {
  var x = document.getElementById("srt");
    x.style.display = "none";
	var x = document.getElementById("srttag");
    x.style.display = "none";
	
	var x = document.getElementById("sgs3");
    x.style.display = "none";
	var x = document.getElementById("sgs3tag");
    x.style.display = "none";
	
	var x = document.getElementById("motoe2020");
    x.style.display = "none";
	var x = document.getElementById("motoe2020tag");
    x.style.display = "none";
	
	var x = document.getElementById("androidgeneral");
    x.style.display = "none";
	var x = document.getElementById("androidgeneraltag");
    x.style.display = "none";
	
	var x = document.getElementById("clearbutton");
    x.style.display = "block";
 
} 

function cleartags() {
	var x = document.getElementById("sgs3tag");
	x.style.display = "block";
	var x = document.getElementById("srttag");
	x.style.display = "block";
	
	var x = document.getElementById("ztez828");
    x.style.display = "block";
	var x = document.getElementById("ztez828tag");
    x.style.display = "block";
	
    var x = document.getElementById("srt");
    x.style.display = "block";
    var x = document.getElementById("sgs3");
    x.style.display = "block";
	
	var x = document.getElementById("motoe2020");
    x.style.display = "block";
	var x = document.getElementById("motoe2020tag");
    x.style.display = "block";
	
	var x = document.getElementById("androidgeneral");
    x.style.display = "block";
	var x = document.getElementById("androidgeneraltag");
    x.style.display = "block";
	
	var x = document.getElementById("clearbutton");
    x.style.display = "none";
} 

function showcomments() {
	var x = document.getElementById("comment-section");
	x.style.display = "block";
	var x = document.getElementById("showcommentbutton");
	x.style.display = "none";
}