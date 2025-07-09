//Adiconar item ao carrinho

async function addItem(userCart, item) {
    const verify = userCart.find((i)=> i.name === item.name)
    if (verify === undefined){
        userCart.push(item);
    }else{
        verify.amount += 1
        verify.subtotal = verify.price * verify.amount
    }
}

//Deletar item
async function deleteItem(userCart, name) {
    let verify = userCart.find((i) => i.name === name)

    if(verify === undefined){
        console.log('Item não está no carrinho....')
    }else{
        verify = userCart.findIndex((i) => i.name === name)
        userCart.splice(verify,1 )
    }
}
//Remover item
async function removeItem(userCart, item) {
    let verify = userCart.find((i) => i === item)
    if(verify === undefined){
        console.log('Item não está no carrinho...')
    }else{
        if(verify.amount === 1){
            console.log('Item na sua quantida mínima, delete o item se quiser retirar do carrinho')
        }else{
            verify.amount -= 1
            verify.subtotal = verify.price * verify.amount
        }
    }
}
//Calcular total
async function calculateTotal(userCart) {
    let total = 0
    for(let i = 0; i < userCart.length; i++){
        total += userCart[i].subtotal;
    }

    console.log(`O valor total do seu carrinho é: ${total}`)

}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal
}