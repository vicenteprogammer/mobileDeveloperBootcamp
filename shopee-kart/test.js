const cart = [
    {
        name: 'Violão'
    },
    {
        name: 'Guitarra'
    }
]
const item1 ={
    name: 'Violão'
}

console.log(cart.findIndex((i) => i.name === 'Violão'))