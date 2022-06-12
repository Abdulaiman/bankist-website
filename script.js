'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const section1 = document.getElementById('section--1');
const smoothScrBtn1 = document.querySelector('.btn--scroll-to');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(val => val.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
smoothScrBtn1.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/////
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);

// const header = document.querySelector('.header');

// const allSections = document.querySelectorAll('.section');
// console.log(allSections);
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML =
//   'we use cookie for improved functionality and analytics. <button class="btn btn-close-cookie"> Got it!</button>';

// // header.prepend(message);
// header.append(message);
// // header.before(message);
// // header.after(message.cloneNode(true))

// message.style.backgroundColor = '#37383d';
// message.style.width = '100vw';
// message.style.maxWidth = '1170px';
// console.log(message.style.backgroundColor);
// console.log(message.style.height);
// console.log(getComputedStyle(message).height);
// console.log(getComputedStyle(message).color);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';
// console.log(message.style.height);
// console.log(Number.parseFloat('23.43px'));

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// const attr = document.querySelector('.nav__logo');
// console.log(attr.src);
// console.log(attr.alt);
// console.log(attr.className);
// attr.alt = 'beautiful minimalist logo';
// console.log(attr.getAttribute('developer'));
// attr.setAttribute('company', 'bankist');
// console.log(attr.getAttribute('company'));
// console.log(attr.getAttribute('src'));
// console.log(attr.src);

// const attr2 = document.querySelector('.nav__link--btn');
// console.log(attr2.href);
// console.log(attr2.getAttribute('href'));
// console.log(attr.dataset.versionNumber);

// h1.addEventListener('mouseenter', alerth1);

// document.querySelector('h1').onmouseenter = e => {
//   alert('the add event listener just worked');
// };
// document.querySelector('h1').onmouseenter = e => {
//   alert('the add event listener just worked');
// };

// const random = (min, max) => Math.trunc(Math.random() * (max - min + 1) + min);
// const generateRandom = () =>
//   `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
// console.log(generateRandom());

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = generateRandom();
//   // e.stopPropagation();
//   console.log('container', e.target, e.currentTarget);
// });
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = generateRandom();
//   console.log('LINK', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = generateRandom();
//   console.log('NAV', e.target, e.currentTarget);
// });

// const h1 = document.querySelector('h1');

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// h1.children[0].style.backgroundColor = 'orangered';
// h1.firstElementChild.style.color = 'white';

// console.log(h1.parentElement);
// console.log(h1.parentNode);

// h1.closest('.header').style.backgroundColor = 'orangered';

// console.log(h1.nextElementSibling);
// console.log(h1.previousElementSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(el => {
//   if (el !== h1) {
//     el.style.transform = 'scale(0.3)';
//   }
// });
// tabsContainer.addEventListener('click', function (e) {
//   console.log(e.target);
// });
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;
  tabs.forEach(el => el.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  tabContent.forEach(el => el.classList.remove('operations__content--active'));
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
const navOpacityHandled = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');

    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
document
  .querySelector('.nav')
  .addEventListener('mouseover', navOpacityHandled.bind(0.5));
document
  .querySelector('.nav')
  .addEventListener('mouseout', navOpacityHandled.bind(1));
const nav = document.querySelector('.nav');
const topHeight = section1.getBoundingClientRect();
// // console.log(topHeight);
// window.addEventListener('scroll', function (e) {
//   if (window.scrollY > topHeight.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });
// const obsCallBack = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: 0.1,
// };
// const obsever = new IntersectionObserver(obsCallBack, obsOptions);
// obsever.observe(section1);
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = entries => {
  const [entry] = entries;
  if (entry.isIntersecting === false) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const header = document.querySelector('.header');
const headerObs = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObs.observe(header);

const sections = document.querySelectorAll('.section');
const sectionObserver = (entries, observer) => {
  const [entry] = entries;

  if (entry.isIntersecting === false) return;
  else entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObs = new IntersectionObserver(sectionObserver, {
  root: null,
  threshold: 0.15,
});
sections.forEach(el => {
  sectionObs.observe(el);
  // el.classList.add('section--hidden');
});
const img = document.querySelectorAll('img[data-src]');
const imgObs = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', e => {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(imgObs, {
  root: null,
  threshold: 0,
});
img.forEach(img => {
  imgObserver.observe(img);
});
const slide = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const sliderRight = document.querySelector('.slider__btn--right');
const sliderleft = document.querySelector('.slider__btn--left');

let currentImg = 0;
const maxImg = slide.length - 1;
// console.log(dotsActive);
const slideIn = () => {
  if (currentImg === maxImg) {
    currentImg = 0;
  } else {
    currentImg++;
  }
  goto(currentImg);
  dotsFunction(currentImg);
};
const goto = function (currentImg) {
  return slide.forEach((el, i) => {
    el.style.transform = `translate(${100 * (i - currentImg)}%)`;
  });
};
goto(0);

const slideOut = () => {
  if (currentImg === 0) {
    currentImg = maxImg;
  } else {
    currentImg--;
  }
  goto(currentImg);
  dotsFunction(currentImg);
};
sliderRight.addEventListener('click', slideIn);
sliderleft.addEventListener('click', slideOut);
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') slideIn();
  if (e.key === 'ArrowLeft') slideOut();
});
const dotscontainer = document.querySelector('.dots');

// console.log(dotscontainer);
const dotss = x => {
  slide.forEach((el, i) => {
    dotscontainer.insertAdjacentHTML(
      'beforeend',
      `'<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const dotsFunction = slide => {
  document.querySelectorAll('.dots__dot').forEach(el => {
    el.classList.remove('dots__dot--active');
  });
  document
    .querySelector(`.dots__dot[data-slide="${slide}"`)
    .classList.add('dots__dot--active');
};
dotss();
dotsFunction(0);
const dotClick = e => {
  if (e.target.classList.contains('dots__dot')) {
    const slide = e.target.dataset.slide;
    goto(slide);
    dotsFunction(slide);
  }
};

dotscontainer.addEventListener('click', dotClick);
window.addEventListener('BeforeUnloadEvent', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});
