let constButton=document.getElementById("input");
let fakeButton=document.getElementById("customBotton");
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

function submitCheck() {
    let fNameInput=document.getElementById("fname");
    let fName=fNameInput.value;
    if(fName==null||fName==""){
        document.getElementById("span1").style.display='inline';
        document.getElementById("errorImg1").style.display='inline';
    }

    let lNameInput=document.getElementById("lname");
    let lName=lNameInput.value;
    if(lName==null||lName==""){
        document.getElementById("span2").style.display='inline';
        document.getElementById("errorImg2").style.display='inline';
    }
    let emailInp=document.getElementById("email");
    let email=emailInp.value;
    if(!ValidateEmail(email)){
        document.getElementById("span3").style.display='inline';
        document.getElementById("errorImg3").style.display='inline';
    }
    let bool1,bool2,bool3;
    bool1=(fName!=null&&fName!="");
    bool2=(lName!=null&&lName!="");
    if(!bool1&&!bool2){
        document.getElementById("span4").style.display='inline';
        document.getElementById("errorImg4").style.display='inline';
    }
    bool3=ValidateEmail(email);
    if(bool1&&bool2&&bool3){
        document.getElementById("span4").style.display='none';
        document.getElementById("errorImg4").style.display='none';
    }
    afterSubmit(bool1,bool2,bool3);
    return false;

}
function ValidateEmail(mail){
    let regexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regexp.test(mail)){
        return true;
    }
    return false;
}
function afterSubmit(bool1,bool2,bool3){
    if(bool1){
        document.getElementById("span1").style.display='none';
        document.getElementById("errorImg1").style.display='none';
    }
    if(bool2){
        document.getElementById("span2").style.display='none';
        document.getElementById("errorImg2").style.display='none';
    }
    if(bool3){
        document.getElementById("span3").style.display='none';
        document.getElementById("errorImg3").style.display='none';
    }
    if(bool1&&bool2&&bool3){
        location.replace("https://codepen.io/xdaniel26/full/epMZwP");
        return false;
    }
}
