document.addEventListener('DOMContentLoaded', () => {
  const navSlide = () => {
      const burger = document.querySelector('.burger');
      const nav = document.querySelector('.nav-links');
      const navLinks = document.querySelectorAll('.nav-links li');

      burger.addEventListener('click', () => {
          // Toggle Nav
          nav.classList.toggle('nav-active');

          // Animate Links
          navLinks.forEach((link, index) => {
              if (link.style.animation) {
                  link.style.animation = '';
              } else {
                  link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
              }
          });

          // Burger Animation
          burger.classList.toggle('toggle');
      });
  }

  const scrollAnimation = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-links a');

      window.addEventListener('scroll', () => {
          let current = '';
          sections.forEach(section => {
              const sectionTop = section.offsetTop;
              const sectionHeight = section.clientHeight;
              if (pageYOffset >= sectionTop - sectionHeight / 3) {
                  current = section.getAttribute('id');
              }
          });

          navLinks.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href').slice(1) === current) {
                  link.classList.add('active');
              }
          });
      });
  }

  const skillAnimation = () => {
      const skillItems = document.querySelectorAll('.skill-item');

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('animate');
              } else {
                  entry.target.classList.remove('animate');
              }
          });
      }, { threshold: 0.5 });

      skillItems.forEach(item => {
          observer.observe(item);
      });
  }

  const formSubmit = () => {
      const form = document.getElementById('contact-form');
      form.addEventListener('submit', (e) => {
          e.preventDefault();
          // Here you would typically send the form data to a server
          alert('Thank you for your message! I will get back to you soon.');
          form.reset();
      });
  }

  const socialButtonsAnimation = () => {
      const socialButtons = document.querySelectorAll('.social-buttons a');
      socialButtons.forEach(button => {
          button.addEventListener('mouseover', () => {
              button.style.transform = 'translateY(-5px)';
          });
          button.addEventListener('mouseout', () => {
              button.style.transform = 'translateY(0)';
          });
      });
  }

  navSlide();
  scrollAnimation();
  skillAnimation();
  formSubmit();
  socialButtonsAnimation();
});