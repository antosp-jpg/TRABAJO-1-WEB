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