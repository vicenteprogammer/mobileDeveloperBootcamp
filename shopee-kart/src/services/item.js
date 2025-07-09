//Criar item
async function createItem(name, price, amount ) {
    return{
        name,
        price,
        amount,
        subtotal : price * amount
    }
}

export default createItem