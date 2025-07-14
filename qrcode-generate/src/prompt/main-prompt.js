import chalk from "chalk"

const mainPrompt = [
    {
        name: 'select',
        description:  chalk.blue('Escolha o que você quer gerarr (1 - QR-Code) (2- Password)'),
        pattern: /^[1-2]+$/,
        message: chalk.red('Digite apenas 1 ou 2!!!'),
        required: true
    }
]
export default mainPrompt