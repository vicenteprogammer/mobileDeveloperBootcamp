async function conncetToBase(dataName){
    console.log(`Concectado ao banco ${dataName}`)
}

async function disconnect(){
    console.log('database desconectado')
}

export {
    conncetToBase,
    disconnect
}