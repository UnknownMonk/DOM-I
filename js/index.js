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
    'img-src': 'img/header-img.png'
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
const nav = document.querySelectorAll('nav a');

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

nav[0].textContent = siteContent.nav['nav-item-1'];
nav[1].textContent = siteContent.nav['nav-item-2'];
nav[2].textContent = siteContent.nav['nav-item-3'];
nav[3].textContent = siteContent.nav['nav-item-4'];
nav[4].textContent = siteContent.nav['nav-item-5'];
nav[5].textContent = siteContent.nav['nav-item-6'];

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
