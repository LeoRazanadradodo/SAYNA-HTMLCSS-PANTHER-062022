// Fonction pour animer progressivement les lignes
function animateLines() {
  const lines = document.querySelectorAll(".line");
  const firstLine = lines[0];
  const lastLine = lines[lines.length - 1];

  const firstLineHeight = firstLine.offsetHeight;
  const lastLineHeight = lastLine.offsetHeight;

  let height1 = 0;
  let height2 = 0;

  // Utilisez requestAnimationFrame pour animer les lignes progressivement
  function animate() {
    height1 += firstLineHeight / 250;
    height2 += lastLineHeight / 250;

    lines[0].style.height = Math.min(height1, firstLineHeight) + "px";
    lines[lines.length - 1].style.height = Math.min(height2, lastLineHeight) + "px";

    if (height1 < firstLineHeight || height2 < lastLineHeight) {
      requestAnimationFrame(animate);
    }
  }

  animate();
}

// Événement DOMContentLoaded pour déclencher l'animation après le chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  animateLines();
});


// Scroll avec lien d'ancrage 
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(anchorLink => {
  anchorLink.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = anchorLink.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// Effet du scroll
function appearOnScroll(element, effectClass, delay) {
  let position = element.getBoundingClientRect().top;
  let windowHeight = window.innerHeight;

  if (position < windowHeight) {
    setTimeout(function () {
      element.classList.add(effectClass);
    }, delay);
  }
}

function handleScroll() {
  let fadeSlideElements = document.querySelectorAll('.fade-slide');
  let delay = 25;

  for (let i = 0; i < fadeSlideElements.length; i++) {
    appearOnScroll(fadeSlideElements[i], 'fade-slide--active', i * delay);
  }
}

window.addEventListener('scroll', handleScroll);
handleScroll();


// Hover titre
const heroBannerH1 = document.querySelector(".titre h1");
const heroBannerH2 = document.querySelector(".titre h2");
const titre = document.querySelector(".titre");

const currentFontSizeH1 = parseInt(window.getComputedStyle(heroBannerH1).fontSize);
const currentFontSizeH2 = parseInt(window.getComputedStyle(heroBannerH2).fontSize);

titre.addEventListener("mouseover", () => {
  // Obtenez les valeurs actuelles du font-size pour les éléments H1 et H2
  const currentFontSizeH1 = parseInt(window.getComputedStyle(heroBannerH1).fontSize);
  const currentFontSizeH2 = parseInt(window.getComputedStyle(heroBannerH2).fontSize);
  
  // Augmentez la taille de police de chaque élément de 10px
  heroBannerH1.style.fontSize = `${currentFontSizeH1 + 10}px`;
  heroBannerH2.style.fontSize = `${currentFontSizeH2 + 10}px`;
});

titre.addEventListener("mouseout", () => {
  heroBannerH1.style.fontSize = "";
  heroBannerH2.style.fontSize = "";
});


// Zoom effect
const zoomImages = document.querySelectorAll('.zoom-img');

zoomImages.forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.2)';
  });

  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });
});


// Slider avec jQuery
function showNextSlide() {
  const container = $('.slider .container');
  const firstItem = container.find('.items:first');

  container.animate({
    marginLeft: -firstItem.outerWidth() + 'px'
  }, 500, function () {
    container.css('marginLeft', 0);
    firstItem.appendTo(container);
  });
}

$('.btn-next span').on('click', showNextSlide);


// La popup
  const closeBtn = document.getElementById('close-popup');

  // Fonction pour afficher la popup
  function showPopup() {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    popup.style.display = 'block';
    popupContent.style.display = 'block';
  }

  function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    const popupContent = document.getElementById('popup-content');
    popupContent.style.display = 'none';
  }

  const submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', () => {
    showPopup();
  });

  closeBtn.addEventListener('click', () => {
    closePopup();
  });