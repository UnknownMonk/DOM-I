const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
    'img-src2': 'https://media.giphy.com/media/pm4btnh4ZMvks/giphy.gif'
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018'
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');

//Nav
const navLink = document.querySelectorAll('nav a');
const navAdd = document.querySelector('nav');

//Cta Section

const ctaH1 = document.querySelector('.cta h1');
const ctabtn = document.querySelector('.cta button');
const ctaImg = document.querySelector('.cta img');

//Top Content

const topContentH4 = document.querySelectorAll(
  '.main-content .text-content h4'
);
const topContentP = document.querySelectorAll('.main-content .text-content p');

//Middle img

const middleImg = document.querySelector('#middle-img');

//Bottom Content

const bottomH4 = document.querySelectorAll('.bottom-content .text-content h4');
const bottomP = document.querySelectorAll('.bottom-content .text-content p');

//Contact

const contactH4 = document.querySelector('.contact h4');
const contactP = document.querySelectorAll('.contact p');

//Footer

const copyRight = document.querySelector('footer p');

//#####################################################################

//Nav Section
logo.setAttribute('src', siteContent['nav']['img-src']);

navLink[0].textContent = siteContent.nav['nav-item-1'];
navLink[1].textContent = siteContent.nav['nav-item-2'];
navLink[2].textContent = siteContent.nav['nav-item-3'];
navLink[3].textContent = siteContent.nav['nav-item-4'];
navLink[4].textContent = siteContent.nav['nav-item-5'];
navLink[5].textContent = siteContent.nav['nav-item-6'];

//Cta section

ctaH1.textContent = siteContent.cta.h1;
ctabtn.textContent = siteContent.cta.button;

ctaImg.src = siteContent.cta['img-src'];

//Top Content
topContentH4[0].textContent = siteContent['main-content']['features-h4'];
topContentH4[1].textContent = siteContent['main-content']['about-h4'];

topContentP[0].textContent = siteContent['main-content']['features-content'];
topContentP[1].textContent = siteContent['main-content']['about-content'];

//Middle img

middleImg.src = siteContent['main-content']['middle-img-src'];

//Bottom Content

bottomH4[0].textContent = siteContent['main-content']['product-h4'];
bottomH4[1].textContent = siteContent['main-content']['services-h4'];
bottomH4[2].textContent = siteContent['main-content']['vision-h4'];
bottomP[0].textContent = siteContent['main-content']['product-content'];
bottomP[1].textContent = siteContent['main-content']['services-content'];
bottomP[2].textContent = siteContent['main-content']['vision-content'];

//Contact

contactH4.textContent = siteContent.contact['contact-h4'];
contactP[0].textContent = siteContent.contact['address'];
contactP[1].textContent = siteContent.contact['phone'];
contactP[2].textContent = siteContent.contact['email'];

//footer

copyRight.textContent = siteContent.footer.copyright;

//Task 4
//Change navagation Green

navLink.forEach(a => (a.style.color = 'green'));

const aTag = document.createElement('a');
const aTag2 = document.createElement('a');

aTag.textContent = 'NewLink Front';
aTag2.textContent = 'NewLink Back';
console.log(navAdd);
navAdd.prepend(aTag);
navAdd.appendChild(aTag2);

// Stretch ///

const colorChange = document.querySelectorAll('.main-content p');

colorChange.forEach(p =>
  p.addEventListener('click', () => {
    p.style.color = 'purple';
    p.style.fontSize = '28px';
  })
);
ctabtn.addEventListener('click', () => {
  ctaImg.src = siteContent.cta['img-src2'];
});
