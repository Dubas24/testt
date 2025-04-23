'use strict';



// Плавное появление элементов
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.title span, .subtitle, .stats__item, .order-btn');
  
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100 * index);
  });
});

// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Плавное появление элементов при загрузке
  const animateElements = () => {
    const elements = document.querySelectorAll('.title span, .subtitle, .stats__item, .order-btn');
    
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 150 * index);
    });
  };

  // Инициализация анимации
  const initAnimations = () => {
    const elements = document.querySelectorAll('.title span, .subtitle, .stats__item, .order-btn');
    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.6s ease-out';
    });
    
    animateElements();
  };

  // Затемнение шапки при скролле
  const handleHeaderScroll = () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
      header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
    } else {
      header.style.backgroundColor = 'var(--dark-accent)';
    }
  };

  // Анимация секции features при скролле
  const animateFeatures = () => {
    const features = document.querySelector('.features');
    const triggerPoint = window.innerHeight * 0.8;
    const sectionTop = features.getBoundingClientRect().top;

    if (sectionTop < triggerPoint) {
      features.style.opacity = '1';
      features.style.transform = 'translateY(0)';
    }
  };

  // Инициализация
  initAnimations();
  window.addEventListener('scroll', () => {
    handleHeaderScroll();
    animateFeatures();
  });

  // Предзагрузка изображений
  const preloadImages = () => {
    const images = ['nedv1.jpg', 'nedv2.jpg', 'nedv3.jpg'];
    images.forEach(img => {
      new Image().src = img;
    });
  };

  preloadImages();
});

// script.js (дополнение)
document.addEventListener('DOMContentLoaded', function() {
  // Анимация формы при появлении
  const formSection = document.querySelector('.form-section');
  formSection.style.opacity = '0';
  formSection.style.transform = 'translateY(50px)';
  formSection.style.transition = 'all 0.6s ease-out';
  
  setTimeout(() => {
    formSection.style.opacity = '1';
    formSection.style.transform = 'translateY(0)';
  }, 300);

  // Валидация формы
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const privacyChecked = document.getElementById('privacy').checked;
      if (!privacyChecked) {
        alert('Please accept Privacy Policy');
        return;
      }
      
      // Здесь можно добавить AJAX-отправку формы
      alert('Form submitted successfully!');
      this.reset();
    });
  }
});


// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Мобильное меню
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const menu = document.querySelector('.nav__right-group');
  
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function() {
      menu.classList.toggle('active');
      this.textContent = menu.classList.contains('active') ? '✕' : '☰';
    });
  }
  
  // Плавная прокрутка для якорей
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
        
        // Закрываем меню если открыто
        if (menu && menu.classList.contains('active')) {
          menu.classList.remove('active');
          menuBtn.textContent = '☰';
        }
      }
    });
  });
  
  // Анимация при скролле
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.text-block, .features, .form-section');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Инициализация анимации
  document.querySelectorAll('.text-block, .features, .form-section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
  });
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Запускаем сразу для видимых элементов
});

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  let menuOpen = false;

  // Функция для переключения меню
  function toggleMenu() {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('active');
    menuToggle.textContent = menuOpen ? '✕' : '☰';
    
    // Блокировка скролла при открытом меню
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }

  // Обработчик клика по кнопке меню
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleMenu();
    });
  }

  // Закрытие меню при клике вне его области
  document.addEventListener('click', function(e) {
    if (menuOpen && !mobileMenu.contains(e.target) && e.target !== menuToggle) {
      toggleMenu();
    }
  });

  // Закрытие меню при клике на пункт меню
  document.querySelectorAll('.nav__right-group .nav__btn').forEach(btn => {
    btn.addEventListener('click', function() {
      if (menuOpen) {
        toggleMenu();
      }
    });
  });

  // Закрытие меню при изменении размера окна
  window.addEventListener('resize', function() {
    if (window.innerWidth > 767 && menuOpen) {
      toggleMenu();
    }
  });
});