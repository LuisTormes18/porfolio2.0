
const toogleMenu = () => {
  const $nav = document.getElementById("navbar");
  const $logo = document.querySelector('.img-logo');

  $nav.classList.toggle("active-menu-mobile");
  $logo.classList.toggle("logo-oscuro");
  $logo.classList.toggle("logo-claro");

};

const $btnMobile = document.getElementById("btn-mobile");
$btnMobile.addEventListener("click",toogleMenu);


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

// load projects
const projects = [];

const paintProjects = (baseTag, projects, numCards) =>{

    for(const element in projects){

      const $div_card = createElement('div');
      $div_card.setAttribute('class','card');

      const $card_img = createElement('div');
      $card_img.innerHTML = `<img src="${projects.src}" alt="" />`


      const $card_title = createElement('div');
      $card_title.innerHTML = `<h2>${projects.title}</h2>`

       const $card_skills = createElement('ul');
      
      for(const skill in projects.skills){

       const $li = createElement('li');

      $li.innerHTML = `<img src="${skill.img}" alt="" />`

      $card_skills.appendChild($li);
      
      }


      const $card_btn = createElement('div');

$card_btn.innerHTML =` <a
                href="${projects.url}"
                target="_blank"
                rel="noreferrer"
                >see more.</a
              >`;

      const $card_footer = createElement('div');
    $card_footer.appendChild($card_title);
    $card_footer.appendChild($card_title);
    $card_footer.appendChild($card_btn);

    $div_card.appenChild($card_img);
    $div_card.appenChild($card_footer);

    }





}

const $cardsPageOthres = document.getElementById('cardsPageOthres');
const $indexCards = document.getElementById('indexCards');

