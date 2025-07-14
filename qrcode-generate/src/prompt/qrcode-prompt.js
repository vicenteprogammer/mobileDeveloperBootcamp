
import chalk from "chalk";

const qrcodePrompt = [
    {
        name: 'link',
        desription: chalk.blue('Digite o link para o seu gerar o seu QR-CODE')
    },
    {
        name: 'type',
        description: chalk.blue('Digite com você quer gerar (1 - Terminal) (2 - Imagem)'),
        pattern: /^[1-2]+$/,
        message: chalk.red('Digite apenas 1 ou 2!!!'),
        required: true
    }
]

export default qrcodePrompt