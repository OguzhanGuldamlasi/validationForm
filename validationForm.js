document.addEventListener('DOMContentLoaded', init, false);
function init(){
    let constButton=document.getElementById("input");
    let fakeButton=document.getElementById("customButton");
    let buttonText=document.getElementById("span5");
    fakeButton.addEventListener("click",function () {
        constButton.click();
    });

    constButton.addEventListener("change",function () {
        if(constButton.value)
            buttonText.innerText=constButton.value;
        else
            buttonText.innerText=constButton.value;
    });
}



function errorMsg(name,span,errorImg) {
    if(name==null||name==""){
        document.getElementById(span).style.display='inline';
        document.getElementById(errorImg).style.display='inline';
    }
}
function submitCheck() {//html file has 4 spans
    let fNameInput=document.getElementById("fname");
    let fName=fNameInput.value;
    errorMsg(fName,"span1","errorImg1");
    let lNameInput=document.getElementById("lname");
    let lName=lNameInput.value;
    errorMsg(lName,"span2","errorImg2");
    let emailInp=document.getElementById("email");
    let email=emailInp.value;
    let fNameCheck,lNameCheck,eMailCheck;
    fNameCheck=(fName!=null&&fName!="");
    lNameCheck=(lName!=null&&lName!="");
    eMailCheck=validateEmail(email);
    auxDisplay(fNameCheck&&lNameCheck&&eMailCheck,4);
    afterSubmit(fNameCheck,lNameCheck,eMailCheck);
    return false;//Solution against the form refresh
    }
function validateEmail(mail){
    let regexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regexp.test(mail)){
        auxDisplay(true,3)
        return true;
    }
    auxDisplay(false,3);
    return false;
}
function afterSubmit(fNameCheck,lNameCheck,eMailCheck){
    auxDisplay(fNameCheck,1);
    auxDisplay(lNameCheck,2);
    auxDisplay(eMailCheck,3);
    if(fNameCheck&&lNameCheck&&eMailCheck){
        location.replace("https://codepen.io/xdaniel26/full/epMZwP");
    }
}
function auxDisplay(bool,number){
    if(bool){
        document.getElementById("span"+number).style.display='none';
        document.getElementById("errorImg"+number).style.display='none';
    }
    else{
        document.getElementById("span"+number).style.display='inline';
        document.getElementById("errorImg"+number).style.display='inline';
    }
}