function computerPlay () {
    let num = Math.floor(Math.random()*3);
    if (num === 1) return 'Piedra';
    else if (num === 2) {
        return 'Papel';
    }
  else return 'Tijera';
                         }
//computerPlay();

function playRound(playerSelection, computerSelection) {
    // your code here!
    let opciones = ["PIEDRA","PAPEL","TIJERA"];
    let PS = playerSelection.toUpperCase();
    let CS = computerSelection.toUpperCase();
    if (!opciones.includes(PS)) return alert("Debe ingresar un valor válido");
    if (PS == "PIEDRA" && CS == "PAPEL") return "You Lose! Papel le gana Piedra";
    if (PS == "PIEDRA" && CS == "TIJERA") return "You Win! Piedra beats Tijera";
    if (PS == "PIEDRA" && CS == "PIEDRA") return "EMPATE!";
    if (PS == "PAPEL" && CS == "PAPEL") return "EMPATE";
    if (PS == "PAPEL" && CS == "PIEDRA") return "You Win! Papel le gana Piedra";
    if (PS == "PAPEL" && CS == "TIJERA") return "You Lose! Tijera le gana a Papel";
    if (PS == "TIJERA" && CS == "PAPEL") return "You Win! Tijera le gana a Papel";
    if (PS == "TIJERA" && CS == "PIEDRA") return "You Lose! Piedra beats Tijera";
    if (PS == "TIJERA" && CS == "TIJERA") return "EMPATE";
    else return alert("Algo no estuvo bien");
  }
  
function game () {
  let wh, wc;
  wh = 0;
  wc = 0;
  let playerSelection;
  let computerSelection;
  let resultronda;
  let valido = ["PIEDRA", "PAPEL",  "TIJERA"];
  for (let i = 0; i < 5; i++) {

    console.log(`Ronda ${i+1}`);
    for (let y = 0;y=1;) {
      playerSelection = prompt("Piedra, Papel o Tijera, 1,2,3","");
      playerSelection = playerSelection.toUpperCase();
    if (!valido.includes(playerSelection)) {
      alert("Otra vez!");}
    else {
      y=1;
    break;}
    }
    computerSelection = computerPlay();
    resultronda = playRound(playerSelection, computerSelection);
    if (resultronda.includes("You Win!")) {
      wh++;
      console.log(resultronda + `\nHumano:${wh} : Computadora:${wc}\n`);
    } else if (resultronda.includes("You Lose!")) {
      wc++;
      console.log(resultronda + `\nHumano:${wh} : Computadora:${wc}\n`);
    } else {
      console.log(resultronda + "\n");
    }
  }
console.log ("\n****************RESULTADO FINAL DEL JUEGO*************\n");
if (wh > wc) return console.log(`Eres un experto! le has ganado la computadora ${wh} a ${wc}`); 
if (wh < wc) return console.log(`Lo siento, la computadora te ganó ${wc} a ${wh}`);
if (wh === wc) return console.log(`INCREIBLE, pero cierto ES UN EMPATE!! ${wc} a ${wh}`)


}
game ();

 // const playerSelection = "piedra";
  //const computerSelection = computerPlay();
  //console.log(playRound(playerSelection, computerSelection));