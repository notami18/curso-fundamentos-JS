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
  return Math.floor(Math.random() * (max - min) + min)  // Un valor entre 5 y 15
}

let totalKms = 0

for (let i = 0; i < dias.length; i++) {
  const kms =  correr();
  totalKms += kms
  console.log(`El día ${dias[i]} ${nombre} corrió ${kms}KMS/H`);
}
