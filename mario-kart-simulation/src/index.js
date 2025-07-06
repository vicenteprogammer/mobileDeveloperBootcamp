const player1 = {
    name: 'Mario',
    speed: 4,
    maneuverability: 3,
    power: 3,
    points: 0
};

const player2 = {
    name: 'Peach',
    speed: 3,
    maneuverability: 4,
    power: 2,
    points: 0
}


async function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random() 

    let result = '' 

    switch (true){
        case random < 0.33:
            result = 'CURVA';
            break;
        case random < 0.66:
            result = 'RETA';
            break;
        default:
            result = 'CONFRONTO';
            break;
    }

    return result
}

async function playRaceEngine(character1, character2) {
    for(let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada ${round} começou...`);
         
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);
    }

}

(async function main() {
    console.log(`🏁 🏎️  ${player1.name} e ${player2.name} começaram uma corrida...\n `)

    await playRaceEngine(player1, player2)
})()

