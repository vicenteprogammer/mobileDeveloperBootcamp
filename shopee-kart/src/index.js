import createItem from './services/item.js'
import * as cart from './services/cart.js'
const userCart = [];
console.log('Welcome shopee cart 🛒')
const item1 = await createItem('Violão', 200, 2);
const item2 = await createItem('Guitarra', 1000, 1);

console.log(userCart) 

cart.addItem(userCart, item1)
cart.addItem(userCart, item2)
cart.addItem(userCart, item1)
cart.addItem(userCart, item1)
console.log(userCart);

cart.removeItem(userCart, item1)
console.log(userCart)

cart.deleteItem(userCart, 'Violão')
console.log(userCart)


cart.calculateTotal(userCart)