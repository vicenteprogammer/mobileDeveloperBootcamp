import qr from 'qrcode-terminal'

async function handle(err, result) {
    if(err){
        console.log('error on aplicattion');
        return;
    }

    let isSmall = result.type == 1;

    qr.generate(result.link,{small: isSmall},(qrcode)=>{
        console.log('QR-CODE gerado com sucesso');
        console.log(qrcode);
    })
}
export default handle