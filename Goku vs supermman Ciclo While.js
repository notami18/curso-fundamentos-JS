let vidaGoku = 100;
let vidaSuperman = 100;

const MIN_POWER = 5;
const MAX_POWER = 12;

const ambosSiguenVivos = () => vidaGoku > 0 && vidaSuperman > 0;

const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);

let gokuSigueVivo = () => vidaGoku > 0;

let round = 0;

while(ambosSiguenVivos()){
	round++
	console.log(`Round ${round}`);

	const golpeGoku = calcularGolpe();
	const golpeSuperman = calcularGolpe();

	if (golpeGoku > golpeSuperman) {
		// Ataca Goku
		console.log(`Goku ataca a Superman con un solo golpe de ${golpeGoku}`);
		vidaSuperman -= golpeGoku; 
		console.log(`Superman queda en ${vidaSuperman} vida.`);
	}else{
		// Ataca Superman
		console.log(`Superman ataca a Goku con un solo golpe de ${golpeSuperman}`);
		vidaGoku -= golpeSuperman; 
		console.log(`Goku queda en ${vidaGoku} puntos de vida.`);
	}
}

if (gokuSigueVivo()) {
	console.log(`Goku ganó la pelea. Su vida es de ${vidaGoku}`);
}else{
	console.log(`Superman ganó la pelea. Su vida es de ${vidaSuperman}`);
}
