const {getFullName, productName} = require('./services/product.js')
const op = require('./services/options.js')

async function main() {
    getFullName('33', 'Teclado');
    productName('Mouse')
    console.log(op.devArea.name)
}

main();