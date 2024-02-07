//PRESTAMOS
let usuario = "0";
let password = "0";
const IVA = 1.16;
let intereses = 1.25;
let acceso = false;

//3 intentos de loggin en cuenta regresiva (2,1,0)
for (let i = 2; i >= 0; i--) {
  let ingresoUsuario = prompt("Ingresa tu usuario");
  let ingresoPassword = prompt("Ingresa tu contraseña");
  if (ingresoUsuario == usuario && ingresoPassword == password) {
    acceso = true;
    alert("Bienvenido a Prestamos Inmediatos " + usuario);
    break;
  } else {
    alert("Usuario o contraseña incorrectos. Tienes " + i + " intentos");
  }
}

if (acceso) {
  let cantidad = prompt(
    "ELige una cantidad entre 5000 y 20000 pesos con un interes del 25% + IVA.   \nPara salir presiona x"
  );
  function calcular(cantidad, IVA, intereses) {
    prestamo = cantidad * IVA * intereses;
    return prestamo;
  }
  let prestamo = cantidad * IVA * intereses;
  console.log(cantidad);
  console.log(prestamo);

  if (cantidad == "x") {
    alert("Hasta pronto " + usuario);
  } else if (cantidad != "x" && cantidad >= 5000 && cantidad <= 20000) {
    alert("Has elegido un prestamo de $" + cantidad);
    alert("El total del prestamo con intereses es: $" + prestamo + 0.0);
    let meses = prompt("Elige 3 o 6 meses para pagar");
    console.log(prestamo);
    console.log(meses);
    console.log(cantidad);

    alert("Tu mensualidad es: $" + prestamo / meses);
    alert("Gracias por confiar en nosotros");
  } else {
    alert("Opcion no valida");
  }
} else {
  alert("Cuenta bloqueada");
}
