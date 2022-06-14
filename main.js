// Pop up video
const showCommercialBtn = document.querySelector(
  '#show-commercial-btn'
);
const commercial = document.querySelector('#commercial');
showCommercialBtn.addEventListener('click', () => {
  commercial.style.display = 'grid';
});
// Close pop up video
document.body.addEventListener('click', (e) => {
  if (e.target.id === 'commercial') {
    commercial.style.display = 'none';
  }
});
// Mobile nav
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');
menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
});
closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  closeBtn.style.display = 'none';
  menuBtn.style.display = 'inline-block';
});

// Active link
const navItems = document.querySelectorAll('nav ul li');

const removeActiveNav = () => {
  navItems.forEach((item) => {
    const link = item.querySelector('a');
    link.classList.remove('active');
  });
};
navItems.forEach((item) => {
  const link = item.querySelector('a');
  link.addEventListener('link', () => {
    link.classList.add('active');
  });
});

// Show and hide FAQs
const faqs = document.querySelectorAll('.faqs__content article');

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    // change icon
    const icon = faq.querySelector('.icon i');
    if (icon.className === 'uil uil-minus') {
      icon.className = 'uil uil-plus';
    } else {
      icon.className = 'uil uil-minus';
    }
  });
});

// Change nav color on scroll
window.addEventListener('scroll', () => {
  document
    .querySelector('nav')
    .classList.toggle('window-scroll', window.scrollY > 0);
});
