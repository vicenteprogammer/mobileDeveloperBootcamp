
const mainPrompt = [
    {
        name: 'select',
        description: 'Escolha o que você quer gerarr (1 - QR-Code) (2- Password)',
        pattern: /^[1-2]+$/,
        message: 'Digite apenas 1 ou 2!!!',
        required: true
    }
]
export default mainPrompt