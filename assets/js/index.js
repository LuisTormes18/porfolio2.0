// año actual
// const $yearNow = document.querySelector("#yearNow");
// let year = new Date();
// $yearNow.innerHTML = year.getFullYear();

const toogleMenu = () => {
  const $nav = document.getElementById("navbar");
  $nav.classList.toggle("active-menu-mobile");
};

const $btnMobile = document.getElementById("btn-mobile");
$btnMobile.addEventListener("click", toogleMenu);


// $btnMobile.addEventListener("touchstart", toogleMenu);

//   const $header = document.querySelector(".header");
  //   $header.classList.toggle("active");

  // bacground header scroll

  const $header = document.querySelector(".header");
  const $session1 = document.querySelector("#session-1");

  const options = {};

const observer = new IntersectionObserver(
function(entries,observer)
{ 
	entries.forEach(entry =>{
		if(!entry.isIntersecting){$header.classList.add('active');}
		else{$header.classList.remove('active')}
	})
},
options)

observer.observe($session1);