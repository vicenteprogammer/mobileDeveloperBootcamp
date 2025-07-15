import prompt from "prompt";
import mainPrompt from "./prompt/main-prompt.js";
import createQrCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
    prompt.get(mainPrompt, async (error, result)=>{
        if(result.select == 1){
            console.log('Escolhou o qr-code...')
            await createQrCode()
        }else if(result.select == 2){
            console.log('Escolheu password....')
            await createPassword();
        }
    })

    prompt.start();
}

main();