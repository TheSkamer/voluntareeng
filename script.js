

let prevScrollpos = window.pageYOffset;

window.onscroll = function (){
	let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    menu.style.top = "0";
  } else {
    menu.style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}