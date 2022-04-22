const navMenu = document.querySelector('.nav-popup');
const navItems = document.querySelectorAll('.nav-poplink');
const closeNav = document.querySelector('.close-nav');
const humburger = document.querySelector('.nav-menu');

function menuToggler() {
  if (navMenu.classList.contains('displayMenu')) {
    navMenu.classList.remove('displayMenu');
    humburger.style.display = 'block';
    closeNav.style.display = 'none';
    navMenu.style.display = 'none';
  } else {
    navMenu.classList.add('displayMenu');
    humburger.style.display = 'none';
    closeNav.style.display = 'flex';
    navMenu.style.display = 'flex';
  }
}
humburger.addEventListener('click', menuToggler);
closeNav.addEventListener('click', menuToggler);
navItems.forEach((navItem) => {
  navItem.addEventListener('click', menuToggler);
});

const speakers = [
  {
    name: 'Dr. Thomas Mensah',
    title: 'President and CEO of the Georgia Aerospace Systems',
    img: './assets/pictures/speaker1.jpg',
    description:
      'Thomas O. Mensah is a Ghanaian-American chemical engineer and inventor, who contributed to the development of fiber optics and nanotechnology. He has 14 patents, and was inducted into the US National Academy of Inventors in 2015.',
  },
  {
    name: 'Ivy Berley',
    title: 'Technical Program Manager, Microsoft',
    img: './assets/pictures/speaker2.jpg',
    description:
      'Ivy Barley is a Ghanaian entrepreneur, program manager and women in tech activist. She is the co-founder of Developers in Vogue, an organization that is paving the way for more African women to take up opportunities in the tech industry.',
  },
  {
    name: 'Selorm Adadevoh',
    title: 'CEO @ MTN Ghana',
    img: './assets/pictures/speaker3.jpg',
    description:
      'Selorm Adadevoh is a Ghanaian business and technology executive. He is the current chief executive officer of MTN Ghana, a subsidiary of MTN Group. He has worked as a telecommunication, business leader and consultant in Africa, the Caribbean, UK and US.',
  },
  {
    name: 'Hon. Ursula Owusu-Ekuful',
    title: 'Minister of Communications',
    img: './assets/pictures/speaker4.jpg',
    description:
      'Mrs. Ursula Owusu-Ekuful (MP) is the Minister for Communications and Member of Parliament for Ablekuma West Constituency within the Greater Accra Region',
  },
  {
    name: 'Yofi Grant',
    title: 'CEO at Ghana Investment Promotion Centre (GIPC)',
    img: './assets/pictures/speaker5.jpg',
    description:
      'Yofi Grant is currently the Chief Executive Officer of the Ghana Investment Promotion Centre appointed by H.E President Nana Addo Dankwa Akufo-Addo in February 2017. Mr. Grant is also a renowned Ghanaian investment banker with over 30 years of extensive work experience in banking and finance',
  },
  {
    name: 'Kenneth Ashigbey',
    title: 'Ghana Chamber of Telecommunications',
    img: './assets/pictures/speaker6.jpg',
    description:
      'Dr. Ing. Kenneth Ashigbey is the Chief Executive Officer of the Ghana Chamber of Telecommunications. Kenneth has a Ph.D. in Business Administration from the Swiss Management Centre. He holds an MBA from Leicester University (UK) and a BSc in Electrical/Electronic Engineering from the Kwame Nkrumah University of Science and Technology.',
  },
];

const speakersSection = document.querySelector('.speakers-list');
if (speakersSection) {
  speakersSection.innerHTML = speakers
    .map(
      (speaker) => `
  <div class="speaker">
                  <div class="grid">
                  <img src="${speaker.img}" alt="${speaker.name}">
                  </div>
                  <div>
                    <h3>${speaker.name}</h3>
                    <h4>${speaker.title}</h4>
                    <hr class="hr-line">
                    <p>${speaker.description}</p>
                  </div>
               </div>`,
    )
    .join('');
}
