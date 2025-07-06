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

async function playRaceEngine(character1, character2) {}

(async function main() {
    console.log(`🏁 🏎️  ${player1.name} e ${player2.name} começaram uma corrida...\n `)

    await playRaceEngine(player1, player2)
})()

