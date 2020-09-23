 <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto&family=Oswald&display=swap" type="text/css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css">
<link rel="stylesheet" href="./material/material.min.css">
<link rel="stylesheet" href="./style.css">
<meta http-equiv = "refresh" content = "3; url = https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
<script src="./material/material.min.js"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="icon" type="image/png" href="./favicon.png"/>
<title>Alexenferman - Getting devices to their full potential</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
 <script src="main.js"></script> 
</head>
<!-- START -->
<body>
<button onclick="topFunction()" id="myBtn" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
  <i class="material-icons">arrow_upward</i>
</button>
<!-- Sidebar Menu -->
<header class="header" id="myHeader">
<div id="mySidenav" class="sidenav">

</div>
<!-- Main Header -->

<image class="logo" height="40px" src="./img/logo.png"></image>

</header>



<div class="content">

<h6>Please wait while we redirect you to the administrator page...</h6>


</div>



<script>
window.onscroll = function() {myFunction(); scrollFunction()};

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
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
</script>
</body>
</html> 