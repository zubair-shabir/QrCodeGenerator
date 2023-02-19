const form = document.getElementById('generate-form')
const qr = document.getElementById('qrcode')



form.addEventListener('submit', (e) => {
    clearUi();
    const url = document.getElementById('url').value;
  const size = document.getElementById('size').value;
    e.preventDefault();
    if(url === ''){
        alert('Please enter a URL')
    }else{
        showSpinner();
        

        setTimeout(() => {
            hideSpinner();
            generateQrCode(url, size);
            setTimeout(() => {
                const saveUrl = qr.querySelector('img').src;
                clearSaveBtn(saveUrl)
            }, 50);
        }, 2000);
    }
})


const showSpinner = () =>{
    document.getElementById('spinner').style.display = 'block';
}
const hideSpinner = () =>{
    document.getElementById('spinner').style.display = 'none';
}

const clearUi = () => {
    qr.innerHTML = '';
    const saveBtn = document.getElementById('save-link');
    if(saveBtn){
        saveBtn.remove();
    }

}

const clearSaveBtn = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'bg-blue-500 hover:bg-blue-800 text-white font-bold p-2 rounded w-1/3 m-auto my-5 cursor-pointer';
    link.href = saveUrl,
    link.download = 'qrcode'
    link.innerHTML = 'Save Image';
    document.getElementById('generated').appendChild(link)
}

const generateQrCode = (url, size) => {
const qrcode = new QRCode('qrcode',{
    text: url,
    width: size,
    height: size
})
}
hideSpinner();