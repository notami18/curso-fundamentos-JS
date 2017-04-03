const dias =
[
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado"
]

const nacimiento = newDate(0000, 00, 0);
const hoy = newDate();
const tiempomil = hoy - nacimiento
const tiemposeg = tiempomil /1000
const tiempomin = tiemposeg / 60
const tiempohor = tiempomin / 60
const tiempodias = tiempohor / 24
const tiempoyear = tiempodias / 365
const proximo = newDate(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())
console.log(dias[proximo.getDay()])