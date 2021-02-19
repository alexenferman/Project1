// When the user scrolls the page, execute myFunction

function headerFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  	document.getElementById("myHeader").style.backgroundColor = "#343a40";
	document.getElementById("myHeader").style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3)";
  } else {
	document.getElementById("myHeader").style.backgroundColor = "rgba(255, 99, 71, 0)";
	document.getElementById("myHeader").style.boxShadow = "none";
  }
}

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

/* NAV MENU */
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(7,7,7,0.6)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
} 
/* END */ 

function darkmode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

function categorysrt1() {
    var a = document.getElementsByClassName("sgs3");
	for(var i = 0; i < a.length; i++)
    {a[i].style.display="none";}

    var a = document.getElementsByClassName("ztez828");
	for(var i = 0; i < a.length; i++)
    {a[i].style.display="none";}
	
	var x = document.getElementById("motoe2020");
    x.style.display = "none";
	
	var x = document.getElementById("androidgeneral");
    x.style.display = "none";
	
	var x = document.getElementById("ztez828tag");
    x.style.display = "none";
	var x = document.getElementById("sgs3tag");
    x.style.display = "none";
	var x = document.getElementById("androidgeneraltag");
    x.style.display = "none";
	var x = document.getElementById("motoe2020tag");
    x.style.display = "none";
	
	var x = document.getElementById("clearbutton");
    x.style.display = "block";
} 

function categorygalaxys3() {
var a = document.getElementsByClassName("srt");
	for(var i = 0; i < a.length; i++)
    {a[i].style.display="none";}
	
	var a = document.getElementsByClassName("ztez828");
	for(var i = 0; i < a.length; i++)
    {a[i].style.display="none";}
	
	var x = document.getElementById("motoe2020");
    x.style.display = "none";
	
	var x = document.getElementById("androidgeneral");
    x.style.display = "none";
	
	var x = document.getElementById("ztez828tag");
    x.style.display = "none";
	var x = document.getElementById("srttag");
    x.style.display = "none";
	var x = document.getElementById("androidgeneraltag");
    x.style.display = "none";
	var x = document.getElementById("motoe2020tag");
    x.style.display = "none";
	
	var x = document.getElementById("clearbutton");
    x.style.display = "block";
 
} 

function categoryztez828() {
var a = document.getElementsByClassName("srt");
	for(var i = 0; i < a.length; i++)
    {a[i].style.display="none";}
	
 var a = document.getElementsByClassName("sgs3");
	for(var i = 0; i < a.length; i++)
    {a[i].style.display="none";}
	
	var x = document.getElementById("motoe2020");
    x.style.display = "none";
	
	var x = document.getElementById("androidgeneral");
    x.style.display = "none";
	
	var x = document.getElementById("srttag");
    x.style.display = "none";
	var x = document.getElementById("sgs3tag");
    x.style.display = "none";
	var x = document.getElementById("androidgeneraltag");
    x.style.display = "none";
	var x = document.getElementById("motoe2020tag");
    x.style.display = "none";
	
	var x = document.getElementById("clearbutton");
    x.style.display = "block";
 
} 

function categorymotoe2020() {
var a = document.getElementsByClassName("srt");
	for(var i = 0; i < a.length; i++)
    {a[i].style.display="none";}
	
 var a = document.getElementsByClassName("sgs3");
	for(var i = 0; i < a.length; i++)
    {a[i].style.display="none";}
	
var a = document.getElementsByClassName("ztez828");
	for(var i = 0; i < a.length; i++)
    {a[i].style.display="none";}
	
	var x = document.getElementById("androidgeneral");
    x.style.display = "none";
	
	var x = document.getElementById("srttag");
    x.style.display = "none";
	var x = document.getElementById("sgs3tag");
    x.style.display = "none";
	var x = document.getElementById("androidgeneraltag");
    x.style.display = "none";
	var x = document.getElementById("ztez828tag");
    x.style.display = "none";
	
	var x = document.getElementById("clearbutton");
    x.style.display = "block";
 
} 

function cleartags() {
	var x = document.getElementById("sgs3tag");
	x.style.display = "block";
	var x = document.getElementById("srttag");
	x.style.display = "block";
	

	var x = document.getElementById("ztez828tag");
    x.style.display = "block";
	
	var a = document.getElementsByClassName("srt");
	for(var i = 0; i < a.length; i++)
    {a[i].style.display="block";}
	
	var a = document.getElementsByClassName("ztez828");
	for(var i = 0; i < a.length; i++)
    {a[i].style.display="block";}
	
 var a = document.getElementsByClassName("sgs3");
	for(var i = 0; i < a.length; i++)
    {a[i].style.display="block";}
	
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


function ZTEAvidPlus() {
	var a = document.getElementsByClassName("file-manager-file");
	for(var i = 0; i < a.length; i++)
    {a[i].style.display="none";}
	
	document.getElementById("pathtext").textContent="/ZTE Avid Plus/";
	
	var x = document.getElementById("ZTEAvidPlus");
	x.style.display = "block";
}

function ZTEAvidPlusCustomROMandRecoveryBuilds() {
	var a = document.getElementsByClassName("file-manager-file");
	for(var i = 0; i < a.length; i++)
    {a[i].style.display="none";}
	
	document.getElementById("pathtext").textContent="/ZTE Avid Plus/Custom ROM and Recovery Builds/";
	
	var x = document.getElementById("ZTEAvidPlusCustomROMandRecoveryBuilds");
	x.style.display = "block";
}

function ZTEAvidPlusStockROM() {
	var a = document.getElementsByClassName("file-manager-file");
	for(var i = 0; i < a.length; i++)
    {a[i].style.display="none";}
	
	document.getElementById("pathtext").textContent="/ZTE Avid Plus/Stock ROMs/";
	
	var x = document.getElementById("ZTEAvidPlusStockROM");
	x.style.display = "block";
}

function SurfaceRT() {
	var a = document.getElementsByClassName("file-manager-file");
	for(var i = 0; i < a.length; i++)
    {a[i].style.display="none";}
	
	document.getElementById("pathtext").textContent="/Surface RT/";
	
	var x = document.getElementById("SurfaceRT");
	x.style.display = "block";
}

function MotoE2020() {
	var a = document.getElementsByClassName("file-manager-file");
	for(var i = 0; i < a.length; i++)
    {a[i].style.display="none";}
	
	document.getElementById("pathtext").textContent="/Moto E 2020/";
	
	var x = document.getElementById("MotoE2020");
	x.style.display = "block";
}

function MyGicaTV() {
	var a = document.getElementsByClassName("file-manager-file");
	for(var i = 0; i < a.length; i++)
    {a[i].style.display="none";}
	
	document.getElementById("pathtext").textContent="/My Gica TV Boxes/";
	
	var x = document.getElementById("MyGicaTV");
	x.style.display = "block";
}

function Sgj16() {
	var a = document.getElementsByClassName("file-manager-file");
	for(var i = 0; i < a.length; i++)
    {a[i].style.display="none";}
	
	document.getElementById("pathtext").textContent="/Samsung Galaxy J1 2016/";
	
	var x = document.getElementById("Sgj16");
	x.style.display = "block";
}


function root() {
	var a = document.getElementsByClassName("file-manager-file");
	for(var i = 0; i < a.length; i++)
    {a[i].style.display="none";}

    document.getElementById("pathtext").textContent="/";

	var x = document.getElementById("root");
	x.style.display = "block";
	
	var x = document.getElementById("hero-image");
	x.style.display = "block";
}

function sendform() {
		
	var x = document.getElementById("subsc");
	x.style.display = "block";
}