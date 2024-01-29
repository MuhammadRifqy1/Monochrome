document.addEventListener('DOMContentLoaded', function () {

  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var CraneHeader = document.getElementById('CraneHeader');
  var DarkBuillding = document.getElementById('DarkBuillding');
  var EmptyBuilding = document.getElementById('EmptyBuilding');
  var EmptyBuilding2 = document.getElementById('EmptyBuilding2');
  var HeavyEquip = document.getElementById('HeavyEquip');
  var Roof = document.getElementById('Roof');

  if (screenWidth >= 768) {
      CraneHeader.src = './assets/crane.webp';
      DarkBuillding.src = './assets/building.webp';
      EmptyBuilding.src = './assets/Empty-Building.webp';
      EmptyBuilding2.src = './assets/Empty-Building2.webp';
      HeavyEquip.src = './assets/heavy-equipment3.webp';
      Roof.src = './assets/Roof.webp';
  }else {
      CraneHeader.src = './assets/crane-sm.webp';
      DarkBuillding.src = './assets/building-sm.webp';
      EmptyBuilding.src = './assets/Empty-Building-sm.webp';
      EmptyBuilding2.src = './assets/Empty-Building2-sm.webp';
      HeavyEquip.src = './assets/heavy-equipment3-sm.webp';
      Roof.src = './assets/Roof-sm.webp';
  }

  const observerLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-left-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerCenter = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-center-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerFadeUp = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-up-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerSlideUpFast = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('slide-up-animation-fast');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerSlideUp = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('slide-up-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerSlideUpSlow = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('slide-up-animation-slow');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerSlideUpSlower = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('slide-up-animation-slower');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerSlideLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('slide-left-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  observerFadeUp.observe(document.querySelector('.header'));
  observerSlideUp.observe(document.querySelector('.project-item2'));
  observerSlideUpFast.observe(document.querySelector('.project-item1'));
  observerSlideUpSlow.observe(document.querySelector('.project-item3'));
  observerSlideUpSlower.observe(document.querySelector('.project-item4'));
  observerLeft.observe(document.querySelector('.about-img1-container'));
  observerCenter.observe(document.querySelector('.about-text'));
  observerSlideLeft.observe(document.querySelector('.service-card-container'));

  const scrollLinks = document.querySelectorAll('[data-scroll]');

  scrollLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('data-scroll');
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
              });
          }
      });
  });
});
