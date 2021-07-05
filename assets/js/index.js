
const toogleMenu = () => {
  const $nav = document.getElementById("navbar");
  $nav.classList.toggle("active-menu-mobile");
};

const $btnMobile = document.getElementById("btn-mobile");
$btnMobile.addEventListener("click", toogleMenu);


const $header = document.querySelector(".header");
const $session1 = document.querySelector("#session-1");

window.onscroll = ()=>{

  let Scrollposition = window.pageYOffset;
  
  if (Scrollposition > 0) {
    $header.classList.add('sticky');
  } else {
    $header.classList.remove('sticky');
  }
}