const startWars7 = "Start Wars: El Despertar de la Fuerza",
      pgStartWars7 = 13;

const nameCarlos = "Carlos Andres";
let ageCarlos = 24;
const nameAlvaro = "Alvaro";
let ageAlvaro = 12;

/*function canWatchStartWars7(name, age, isWithAdult = false){
  if (age >= pgStartWars7) {
    alert(`${name} puede pasar a ver ${startWars7}`);
  }else if (isWithAdult) {
    alert(`${name} puede pasar a ver ${startWars7}.
      Aunque su edad es de ${age} años, se encuentra acompañado/a de un adulto `)
  } else {
    alert(`${name} no puede pasar a ver ${startWars7}.
      Tiene ${age} años y necesita tener ${pgStartWars7} años.`);
  }
}*/

let canWatchStartWars7 = (name, age, isWithAdult = false) => {
  if (age >= pgStartWars7) {
    alert(`${name} puede pasar a ver ${startWars7}`);
  }else if (isWithAdult) {
    alert(`${name} puede pasar a ver ${startWars7}.
      Aunque su edad es de ${age} años, se encuentra acompañado/a de un adulto `)
  } else {
    alert(`${name} no puede pasar a ver ${startWars7}.
      Tiene ${age} años y necesita tener ${pgStartWars7} años.`);
  }
}

canWatchStartWars7(nameCarlos, ageCarlos);
canWatchStartWars7(nameAlvaro, ageAlvaro, true);
