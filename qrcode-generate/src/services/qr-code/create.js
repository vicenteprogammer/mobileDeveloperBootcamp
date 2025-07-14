import prompt from "prompt";
import qrcodePrompt from "../../prompt/qrcode-prompt.js";
import handle from './handle.js'

async function createQrCode() {
    prompt.get(qrcodePrompt, handle );

    prompt.start();
}

export default createQrCode