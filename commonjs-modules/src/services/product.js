async function getFullName(codeId, productName) {
    console.log('\n');
    console.log('Product:' + codeId + ' -- ' + productName);
}

async function productName(productName) {
    console.log('Product: ' + productName);
}

module.exports ={
    getFullName,
    productName,
}