'use strict';

window.addEventListener('DOMContentLoaded', () => {
  // ==============================
  // smoothscroll
  // ==============================
  const ankerLinks = document.querySelectorAll('a[href^="#"]');
  ankerLinks.forEach(ankerLink => {
    ankerLink.addEventListener('click', (e) => {
      e.preventDefault()
      const element = document.querySelector(ankerLink.hash);
      const elementTop = window.pageYOffset + element.getBoundingClientRect().top;
      const headerHeight = document.querySelector('#header').clientHeight;
      window.scroll({
        top: elementTop - headerHeight,
        behavior: "smooth",
      });
    });
  });

  // ==============================
  // hamburger-menu
  // ==============================
  const hamburgerMenu = document.querySelector('.header__hamburger-menu');
  const headerSmNav = document.querySelector('.header__sm-nav');

  hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('header__hamburger-menu--open');
    headerSmNav.classList.toggle('header__sm-nav--open');
  });

  headerSmNav.addEventListener('click', () => {
    hamburgerMenu.classList.remove('header__hamburger-menu--open');
    headerSmNav.classList.remove('header__sm-nav--open');
  });
  // ==============================
  // fadein
  // ==============================
  const fadeinTargets = document.querySelectorAll('.js-fadein');
  const options = {
    threshold: .2,
  };
  const observer = new IntersectionObserver(callback, options);
  
  fadeinTargets.forEach(fadeinTarget => {
    observer.observe(fadeinTarget);
  });

  function callback(entries, obs) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('js-fadein--active');
      obs.unobserve(entry.target);
    });
  }

  // ==============================
  // faq
  // ==============================
  const questions = document.querySelectorAll('.faq__question');
  const answers = document.querySelectorAll('.faq__answer');
  
  questions.forEach((question, index) => {
    question.addEventListener('click', () => {
      question.classList.toggle('faq__question--active');
      answerActive();
      answerNegativeMargin()
      function answerActive() {
        answers[index].classList.toggle('faq__answer--active');
      }
    });
  });

  answerNegativeMargin();

  function answerNegativeMargin () {
    answers.forEach(answer => {
      if(answer.classList.contains('faq__answer--active')) {
        answer.style.marginBottom = 0;
      } else {
        const answerHeight = answer.clientHeight;
        answer.style.marginBottom = - answerHeight + 'px';
      }
    });
  }

  // ==============================
  // form
  // ==============================
  const submitBtn = document.querySelector('#js-submit');
  const form = document.forms.form;
  const name = form.name;
  const mail = form.mail;
  const content = form.content;
  const privacypolicy = form.privacypolicy;
  const alert = document.querySelector('.alert');

  form.addEventListener('change', (e) => {
    submitIsValid(e);
  });

  function submitIsValid() {
    if(name.value !=='' && mail.value !=='' && content.value !=='' && privacypolicy.checked) {
      submitBtn.classList.add('button--active');
      alert.classList.remove('alert--active');
    } else {
      submitBtn.classList.remove('button--active');
    }
  }

  form.addEventListener('submit', (e) => {
    if(name.value ==='' || mail.value ==='' || content.value ==='' || !privacypolicy.checked) {
      e.preventDefault();
      alert.classList.add('alert--active');
    }
  });
  // ==============================
  // window resize
  // ==============================
  window.addEventListener('resize', () => {
    answerNegativeMargin();
  });
});
