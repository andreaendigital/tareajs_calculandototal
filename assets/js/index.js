//declarar variables

let precioInicial = 400000;
let cantidadInicial = 1;

let precio = document.querySelector(".precio");
let cantidad = document.querySelector(".cantidad");
let total = document.querySelector(".total");

precio.innerHTML = precioInicial;
cantidad.innerHTML = cantidadInicial;
total.innerHTML = precioInicial;



// Función para incrementar la cantidad
// function incrementarCantidad() {
//     cantidad++;
//     cantidadSpan.innerHTML = cantidad;
//     calcularTotal();
// }

// Función para decrementar la cantidad
// function decrementarCantidad() {
//     if (cantidad > 0) {
//         cantidad--;
//         cantidadSpan.innerHTML = cantidad;
//         calcularTotal();
//     }
// }

// Función para calcular el total a pagar
// function calcularTotal() {
//     const total = precio * cantidad;
//     totalSpan.innerHTML = total;
// }

// Inicializar el precio inicial
// precioSpan.innerHTML = precio;