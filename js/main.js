const menu = document.querySelector('.menu');
const navList = document.querySelector('.nav-list');
const closeMenu = document.querySelector('#close');
menu.addEventListener('click', () => {
  navList.classList.toggle('hide');
  document.body.classList.toggle('no-scroll');
});

closeMenu.addEventListener('click', () => {
  navList.classList.toggle('hide');
  document.body.classList.toggle('no-scroll');
});

const guest = [
  {
    name: 'Sultan of Sokoto',
    about: 'Spiritual leader of Nigeria\'s Muslims',
    description:'Lorem ipsum dolor, adipisicing.',
    image: './images/sultan-removebg-preview.png'
  }, {
    name: 'Shaykh Sulayman Ar Ruhaylī',
    about: 'A professor at the Islamic university of Madinah, teacher at Masjid Nabawi, Iman wa Khatib fi Masjid Quba.',
    description:'Lorem ipsum dolor, adipisicing.',
    image: './images/sheykh_ruhayli-removebg-preview.png'
  }, {
    name: 'Dr. Zakir Naik',
    about: 'An Indian Salafi Islamic televangelist and public orator who focuses on comparative religion.',
    description:'Lorem ipsum dolor, adipisicing.',
    image: './images/Dr_zakir-removebg-preview.png'
  }, {
    name: 'Sheikh Okasha Kameny',
    about: 'Imam Okasha Kameny is the Imam of Masjid Al-Wasatiyah Wal-Itidaal located in Philadelphia, Pennsylvania',
    description:'Lorem ipsum dolor, adipisicing.',
    image: './images/Okasha-removebg-preview.png'
  }, {
    name: 'Dr. Bilal Philips',
    about: 'A Canadian Islamic teacher, speaker, author, founder and chancellor of the International Open University, who lives in Qatar.',
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing.',
    image: './images/Dr-Bilal-Philips-removebg-preview.png'
  }, {
    name: 'Mallam Yusuf Adepoju',
    about: 'Chief Lecturer. Academy of Islamic Propagation',
    description:'Lorem ipsum dolor, adipisicing.',
    image: './images/Mallam_yusuf-removebg-preview.png',
    display: 'hide'
  }
]

function createSpeakers(prop) {
  const subject = document.querySelector('.btn-more');
  subject.insertAdjacentHTML('beforebegin',
    `<div class="speaker ${prop.display}">
    <div><img src="${prop.image}" alt=""></div>
    <div>
    <h3>${prop.name}</h3>
    <small>${prop.description}</small>
    <hr>
    <p>${prop.about}</p>
    </div>
    </div>`);
}

for(let i = 0; i < guest.length; i++){
  createSpeakers(guest[i]);
}