async function connectToDatabase(user, password) {
    if(user === process.env.USER && password === process.env.PASSWORD){
        console.log('Conexão com o banco estabelecida')
    }else{
        console.log('Falha no login, erro nas credenciais')
    }
}

export default connectToDatabase