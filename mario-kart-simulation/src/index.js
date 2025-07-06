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

        let diceRoll1 = await rollDice();
        let diceRoll2 = await rollDice();

        let totalSkill1 = 0;
        let totalSkill2 = 0;

        if(block == 'RETA'){
            totalSkill1 = diceRoll1 + player1.speed;
            totalSkill2 = diceRoll2 + player2.speed;
        }else if(block == 'CURVA'){
            totalSkill1 = diceRoll1 + player1.maneuverability;
            totalSkill2 = diceRoll2 + player2.maneuverability;
        }else{
            totalSkill1 = diceRoll1 + player1.power;
            totalSkill2 = diceRoll2 + player2.power
        }
    }

}

(async function main() {
    console.log(`🏁 🏎️  ${player1.name} e ${player2.name} começaram uma corrida...\n `)

    await playRaceEngine(player1, player2)
})()

