//CambiaImmagine Logo-Etnaland
document.addEventListener('DOMContentLoaded', function() {
  function cambiaImmagine() {
    const image = document.querySelector('#logo-etnaland');
    image.src = 'immagini/logo-etnaland2.png';
  }
  function ripristinaImmagine() {
    const image = document.querySelector('#logo-etnaland');
    image.src = 'immagini/logo-etnaland1.png';
  }
  const image = document.querySelector('#logo-etnaland');
  image.addEventListener('mouseenter', cambiaImmagine);
  image.addEventListener('mouseleave', ripristinaImmagine);
});

 //box con immagini che scorrono 
const images = [
  'immagini/scorri.jpg',
  'immagini/scorri2.jpg',
  'immagini/scorri3.jpg',
  'immagini/scorri4.jpg',
  'immagini/scorri5.jpg',
  'immagini/scorri6.jpg',
  'immagini/scorri7.jpg'

];
function scrollImagesWithTimeout(index) {
  if (index >= 6  ) {
    index = 0;
  }
  const imgElement = document.getElementById('immagine-box2');
  imgElement.src = images[index];

  setTimeout(function() {
    scrollImagesWithTimeout(index + 1);
  }, 2000);
}
scrollImagesWithTimeout(0);

//Menù a tendina che compaiono con mouseover-mouseout
function createDropdownMenu(linkSelector, overlaySelector, opacityValue) {
  const link = document.querySelector(linkSelector);
  let overlay = document.querySelector(overlaySelector);

  if (!overlay) {
    overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
  }

  let isMouseOver = false;

  link.addEventListener('mouseover', () => {
    overlay.style.opacity = opacityValue;
  });

  link.addEventListener('mouseout', () => {
    if (!isMouseOver) {
      overlay.style.opacity = '0';
    }
  });

  overlay.addEventListener('mouseover', () => {
    isMouseOver = true;
    overlay.style.opacity = opacityValue;
  });

  overlay.addEventListener('mouseout', () => {
    isMouseOver = false;
    overlay.style.opacity = '0';
  });
}
createDropdownMenu('.them', '.overlay', '1');
createDropdownMenu('.acqua', '.overlay2', '1');
createDropdownMenu('.cal1', '.overlay3', '1');
createDropdownMenu('.cal2', '.overlay4', '1');
createDropdownMenu('.intestazione1', '.overlay5', '1');
createDropdownMenu('.prei', '.overlay6', '1');
// Funzione zoom su immagini
function applyZoomEffect(elementId, scale) {
  document.getElementById(elementId).style.transform = "scale(" + scale + ")";
}
function addZoomEvents(elementId) {
  document.getElementById(elementId).addEventListener("mouseenter", function() {
    applyZoomEffect(elementId, 1.1);
  });
  document.getElementById(elementId).addEventListener("mouseleave", function() {
    applyZoomEffect(elementId, 1);
  });
}
addZoomEvents("immagine_them");
addZoomEvents("immagine_acqua");
addZoomEvents("immagine_prei");
addZoomEvents("video");
addZoomEvents("cal");
addZoomEvents("cal1");
addZoomEvents("cal2");
addZoomEvents("cal3");
addZoomEvents("cal4");
addZoomEvents("cal5");
addZoomEvents("ita");
addZoomEvents("ing");
addZoomEvents("bottone");

//spostare immagine verso l'alto
function moveImageUp(elementId) {
  var translateY = "-10px";
  document.getElementById(elementId).style.transform = "translateY(" + translateY + ")";
}

function resetImagePosition(elementId) {
  document.getElementById(elementId).style.transform = "translateY(0)";
}

function addImageEvents(elementId) {
  document.getElementById(elementId).addEventListener("mouseenter", function() {
    moveImageUp(elementId);
  });
  document.getElementById(elementId).addEventListener("mouseleave", function() {
    resetImagePosition(elementId);
  });
}

addImageEvents("social");
addImageEvents("calendario");
addImageEvents("shop");
addImageEvents("photoland");
addImageEvents("newsletter");
addImageEvents("primacompri");

// bottone che scorre verso l'alto
var goToTopButton = document.getElementById("bottone");
goToTopButton.addEventListener("click", function() {
 
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});

//Menù a tendina
document.addEventListener("DOMContentLoaded", function() {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeBtn = document.getElementById("close"); 

  mobileMenuToggle.addEventListener("click", function() {
    mobileMenu.classList.toggle("attivo");
  });

  closeBtn.addEventListener("click", function() {
    mobileMenu.classList.remove("attivo");
  });
});



