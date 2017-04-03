const nombre = 'Carlos'
const dias = [
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
  'domingo'
]

function correr(){
  const min = 5;
  const max = 15;
  return Math.round(Math.random() * (max - min) + min)  // Un valor entre 5 y 15
}

let totalKms = 0
const length = dias.length;
for (let i = 0; i < dias.length; i++) {
  const kms =  correr();
  totalKms += kms
  console.log(`El día ${dias[i]} ${nombre} corrió ${kms} Kms`);
}

const promedioKms = totalKms / length;

console.log(`En promedio, ${nombre} corrio ${promedioKms.toFixed(2)} Kms`);