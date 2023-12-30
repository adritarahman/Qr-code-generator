let imgbox=document.querySelector("#ImgBox");
let qrImg=document.querySelector("#qrImg");
let qrtext=document.querySelector("#qrtext");
let button=document.querySelector("#button");

function generateQR(){
    if(qrtext.value.length>0){
    qrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
    imgbox.classList.add("show-img");
    }
    else{
       /* imgbox.InnerHTML="<div> need some input to generate QR Code</div>";
        imgbox.innerText="need some input to generate QR Code";
        imgbox.classList.add("show-img");
        imgbox.style.backgroundColor="black";
        imgbox.style.color="white";
        imgbox.style.padding="3px";*/
        qrtext.classList.add("error");
        setTimeout(()=>{
            qrtext.classList.remove("error");
        },1000);
    }
}

button.addEventListener(("click"),()=>{
    generateQR();
})
