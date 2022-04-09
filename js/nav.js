const nav_bar__main = document.querySelector('.nav-bar__main');
const nav_bar__toggle = document.querySelector('.nav-bar__toggle');
const nav_bar = document.querySelector('.nav-bar');

nav_bar__toggle.addEventListener('click', () => {
  nav_bar.classList.toggle("active");
  nav_bar__toggle.classList.toggle("active");
  if (nav_bar.classList.contains("active")) {
    nav_bar__toggle.innerHTML = '<i class="fad fa-angle-double-left"></i>';
  }
  else {
    nav_bar__toggle.innerHTML = '<i class="fas fa-angle-double-right"></i>';
  }
});

const navDtb = [
  {
    imgSrc: "./images/thumb.jpg",
    text: "Toàn cảnh Mithrin Hotel",
    class: "item1",
  },
  {
    imgSrc: "./images/thumb.jpg",
    text: "Toàn cảnh Mithrin Hotel",
    class: "item2",
  },
  {
    imgSrc: "./images/thumb.jpg",
    text: "Toàn cảnh Mithrin Hotel",
    class: "item2",
  },
  {
    imgSrc: "./images/thumb.jpg",
    text: "Toàn cảnh Mithrin Hotel",
    class: "item2",
  },
  {
    imgSrc: "./images/thumb.jpg",
    text: "Toàn cảnh Mithrin Hotel",
    class: "item2",
  },
  {
    imgSrc: "./images/thumb.jpg",
    text: "Toàn cảnh Mithrin Hotel",
    class: "item2",
  },
  {
    imgSrc: "./images/thumb.jpg",
    text: "Toàn cảnh Mithrin Hotel",
    class: "item2",
  },
  {
    imgSrc: "./images/thumb.jpg",
    text: "Toàn cảnh Mithrin Hotel",
    class: "item2",
  },
];

const fullview = document.querySelector(".fullview");
fullview.onclick = function () {
  window.location.href = "https://online.fliphtml5.com/twzer/ksey/#p=1";
}

//* Render

const htmls = navDtb.map(navItem => {
  return `
    <li class="nav-bar__main__item ${navItem.class}">
      <div class="nav-bar__main__item__image">
        <img src="${navItem.imgSrc}" alt="">
      </div>
      <div class="nav-bar__main__item__text">
        <span>${navItem.text}</span>
      </div>
      <span class="nav-bar__main__item__tick">✔</span>
      <img src="" alt="" />
    </li>
  `;
}).join('');
nav_bar__main.innerHTML = htmls;


setTimeout(() => {
  const navItems = document.querySelectorAll('.nav-bar__main__item');
  navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
      const isActive = document.querySelector(".nav-bar__main__item.active");
      if (isActive) {
        isActive.classList.remove('active');
      }
      navItem.classList.add('active');
    })
  })

}, 0);
