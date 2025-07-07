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


async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function logRollDice(character, block, diceResult, atributt) {
    console.log(`${character} rolou um dado de ${block} ${diceResult} + ${atributt} = ${diceResult + atributt}`)
}

async function getRandomBlock() {
    let random = Math.random()

    let result = ''

    switch (true) {
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
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round} começou...`);

        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);

        let diceRoll1 = await rollDice();
        let diceRoll2 = await rollDice();

        let totalSkill1 = 0;
        let totalSkill2 = 0;

        if (block === 'RETA') {
            totalSkill1 = diceRoll1 + player1.speed;
            totalSkill2 = diceRoll2 + player2.speed;

            await logRollDice(player1.name, 'velocidade', diceRoll1, player1.speed)

            await logRollDice(player2.name, 'velocidade', diceRoll2, player2.speed)

            if (totalSkill1 > totalSkill2) {
                console.log(`${player1.name} ganhou a rodada e marcou um ponto...`);
                player1.points++;
            } else {
                console.log(`${player2.name} ganhou a rodada e marcou um ponto...`);
                player2.points++;
            }
        } else if (block === 'CURVA') {
            totalSkill1 = diceRoll1 + player1.maneuverability;
            totalSkill2 = diceRoll2 + player2.maneuverability;

            await logRollDice(player1.name, 'maneuverability', diceRoll1, player1.maneuverability)

            await logRollDice(player2.name, 'maneuverability', diceRoll2, player2.speed)

            if (totalSkill1 > totalSkill2) {
                console.log(`${player1.name} ganhou a rodada e marcou um ponto...`);
                player1.points++;
            } else {
                console.log(`${player2.name} ganhou a rodada e marcou um ponto...`);
                player2.points++;
            }
        } else {
            let powerResult1 = diceRoll1 + player1.power;
            let powerResult2 = diceRoll2 + player2.power;

            console.log(`${player1.name} confrontou ${player2.name}...`);

            await logRollDice(player1.name, 'power', diceRoll1, player1.power);

            await logRollDice(player2.name, 'power', diceRoll2, player2.power);

           if(powerResult1 > powerResult2 && powerResult2 > 0){
            console.log(`${player1.name} ganhou o confronto! ${player2.name} perde 1 ponto!`);
            player2.points--;
           }

           if(powerResult2 > powerResult1 && powerResult1 > 0){
            console.log(`${player2.name} ganhou o confronto! ${player1.name} perde 1 ponto!`);
            player1.points--;
           }
            console.log(
                powerResult1 === powerResult2
                    ? 'Confronto empatado. Nenhum ponto foi perdido '
                    : ''
            )
        }


        console.log('---------------------------------')
    }

}

(async function main() {
    console.log(`🏁 🏎️  ${player1.name} e ${player2.name} começaram uma corrida...\n `)

    await playRaceEngine(player1, player2)
})()

