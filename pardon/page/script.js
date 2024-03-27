const bar = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");

bar.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});



var nv = document.getElementById("nv");
var mu = document.getElementById("mu");

window.onscroll = function(){
  if(window.pageYOffset >= mu.offsetTop){
    nv.classList.add("sticky");
  }
  else{
    navbar.classList.remove("sticky");
  }
}

