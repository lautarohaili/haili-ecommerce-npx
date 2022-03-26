import swal from "sweetalert";

export const carritoVacio = (carrito) => {
  if (carrito.length === 0) {
    swal
      .fire({
        html: '<img src="public/imagenes/carrito-vacio.png" style= "width: 175px"/>',
        title: "Carrito vacío",
        timerProgressBar: true,
        timer: 1500,
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
      })
      .then(function () {
        window.location = "./index.html";
      });
  }
};
