async function handle() {
    let characters = [];
    const passwordLength = process.env.PASSWORD_LENGTH
    let password = '';
    
    if(process.env.UPPERCASE_LETTERS === 'true'){
        characters.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    }

    if(process.env.LOWERCASE_LETTERS === 'true'){
        characters.push(...'abcdefghijklmnopqrstuvwxyz')
    }

    if(process.env.NUMBERS === 'true'){
        characters.push(...'0123456789')
    }
    
    if(process.env.SPECIAl_CHAR === 'true'){
        characters.push(...'!@#$%¨&*')
    }

    for(let i = 0; i < passwordLength;i++){
        let index = Math.floor(Math.random() * characters.length)

        password += characters[index]
    }

    return password

}


export default handle