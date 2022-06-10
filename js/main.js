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
    image: './images/sultan-removebg-preview.png',
    display: 'block',
  }, {
    name: 'Shaykh Sulayman Ar Ruhaylī',
    about: 'A professor at the Islamic university of Madinah, teacher at Masjid Nabawi, Iman wa Khatib fi Masjid Quba.',
    image: './images/sheykh_ruhayli-removebg-preview.png',
    display: 'hs hide-speaker',
  }, {
    name: 'Dr. Zakir Naik',
    about: 'An Indian Salafi Islamic televangelist and public orator who focuses on comparative religion.',
    image: './images/Dr_zakir-removebg-preview.png',
    display: 'hs hide-speaker',
  }, {
    name: 'Sheikh Okasha Kameny',
    about: 'Imam Okasha Kameny is the Imam of Masjid Al-Wasatiyah Wal-Itidaal located in Philadelphia, Pennsylvania',
    image: './images/Okasha-removebg-preview.png',
    display: 'hs hide-speaker',
  }, {
    name: 'Dr. Bilal Philips',
    about: 'A Canadian Islamic teacher, speaker, author, founder and chancellor of the International Open University, who lives in Qatar.',
    image: './images/Dr-Bilal-Philips-removebg-preview.png',
    display: 'hs hide-speaker',
  }, {
    name: 'Mallam Yusuf Adepoju',
    about: 'Chief Lecturer. Academy of Islamic Propagation',
    image: './images/Mallam_yusuf-removebg-preview.png',
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
    <hr>
    <p>${prop.about}</p>
    </div>
    </div>`);
}

for (let i = 0; i < guest.length; i += 1) {
  createSpeakers(guest[i]);
}

const btn = document.querySelector('.btn-more')
btn.addEventListener('click', (e) => {
  document.querySelectorAll('.hs').forEach(elem => {
    elem.classList.toggle('hide-speaker');
    btn.classList.toggle('show');
    btn.classList.contains('show') ? btn.innerHTML = `Hide <i class="bi bi-chevron-up"></i>` : btn.innerHTML = `MORE <i class="bi bi-chevron-down"></i>`
  })
})