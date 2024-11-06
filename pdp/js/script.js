//FORMULARIO {
  //  "use strict";
  //  var entradas = document.getElementById("numero").value;
   // document.getElementById("coste").innerHTML = (entradas * 3) + "€";
//} 

    let quantity = 1; // Inicializa la cantidad
    const maxQuantity = 10; // Cantidad máxima

    function updateQuantity(change) {
        quantity += change;
        // Asegúrate de que la cantidad esté dentro del rango permitido
        if (quantity < 1) quantity = 1;
        if (quantity > maxQuantity) quantity = maxQuantity;
        document.getElementById('numero').innerText = quantity;
        costeTotal();
    }

    function costeTotal() {
        // Aquí deberías calcular el coste total basado en la cantidad
        const pricePerItem = 3.50; // Cambia esto al precio real
        const totalCost = quantity * pricePerItem;
        document.getElementById('coste').innerText = totalCost;
    }

    // Inicializa el coste al cargar la página
    costeTotal();

// MODAL 

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


// CARRUSEL

$('.lazy').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });


