let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");
let onfocus  = document.getElementById("onfocus");

function generateQR(){
    if(qrText.value.length > 0){
        onfocus.classList.add("showoff");
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("showImg");
    }else{
        qrText.classList.add("error");
        setInterval(()=>{
            qrText.classList.remove("error");
        },1000);
    }
}

//To trigger event addFunc() when enter key is pressed.
qrText.addEventListener("keypress",event => {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});
