window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 250) {
    document.getElementById("wrapper").style.opacity = "0";
  } else {
    document.getElementById("wrapper").style.opacity = "1";
  }
}