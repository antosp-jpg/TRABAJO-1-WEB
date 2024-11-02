//function costeTotal() {
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




    $('.lazy').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
    });

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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
