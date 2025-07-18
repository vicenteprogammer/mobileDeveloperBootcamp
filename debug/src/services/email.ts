async function sendEmail(message:string) {
    const base = `Olá, quero tratar desse ${message}`
    return base;
}

export {sendEmail}