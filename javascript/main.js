const menu = document.querySelector('.menu');
const navList = document.querySelector('.nav-list');
const closeMenu = document.querySelector('.bi-x-lg');

const toggle = () => {
  navList.classList.toggle('hide');
  document.body.classList.toggle('no-scroll');
};

menu.addEventListener('click', () => {
  toggle();
});

closeMenu.addEventListener('click', () => {
  toggle();
});

const guest = [
  {
    name: 'SohYeong Leda',
    about: 'Lorem, ipsum dolor sit amet consect.',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorem quibusdam.',
    image: './images/Winnie.png',
    display: 'block',
  }, {
    name: 'Yochai Philips',
    about: 'Lorem, ipsum dolor sit amet consect.',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorem quibusdam.',
    image: './images/Paul.png',
    display: 'block',
  }, {
    name: 'Julia Lila',
    about: 'Lorem, ipsum dolor sit amet consect.',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorem quibusdam.',
    image: './images/Daisy.png',
    display: 'hs hide-speaker',
  }, {
    name: 'Daisy Monreo',
    about: 'Lorem, ipsum dolor sit amet consect.',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorem quibusdam.',
    image: './images/Shantel.png',
    display: 'hs hide-speaker',
  }, {
    name: 'Yochai Philips',
    about: 'Lorem, ipsum dolor sit amet consect.',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorem quibusdam.',
    image: './images/Paul.png',
    display: 'hs hide-speaker',
  }, {
    name: 'SohYeong Leda',
    about: 'Lorem, ipsum dolor sit amet consect.',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorem quibusdam.',
    image: './images/Winnie.png',
    display: 'hs hide-speaker',
  },
];

function createSpeakers(prop) {
  const subject = document.querySelector('#col-d');
  subject.insertAdjacentHTML('beforeend',
    `<div id="speaker" class="${prop.display}">
    <div><img src="${prop.image}" alt=""></div>
    <div>
    <h3>${prop.name}</h3>
    <p>${prop.about}</p>
    <hr>
    <p id="primary-text">${prop.description}</p>
    </div>
    </div>`);
}

for (let i = 0; i < guest.length; i += 1) {
  createSpeakers(guest[i]);
}

const btn = document.querySelector('.btn-more');
btn.addEventListener('click', () => {
  btn.classList.toggle('show');
  if (btn.classList.contains('show')) {
    btn.innerHTML = 'HIDE <i class="bi bi-chevron-up"></i>';
  } else {
    btn.innerHTML = 'MORE <i class="bi bi-chevron-down"></i>';
  }
  document.querySelectorAll('.hs').forEach((elem) => {
    elem.classList.toggle('hide-speaker');
  });
});