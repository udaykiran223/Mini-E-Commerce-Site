
function routingToLogin(){
    window.location.href="./index.html";
}

function submitRegDetails(){


    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let confirmPassword=document.getElementById("confirmPassword").value;

    let regDetails={
        name : name,
        email : email,
        password : password,
        confirmPassword : confirmPassword
    }
    
    regFormValidation(name,email,password,confirmPassword, regDetails);



}

function regFormValidation(name,email,password,confirmPassword, regDetails){

    let validation=false
    if((name.length || email.length || password.length || confirmPassword.length) <= 0 ){
        alert("Please Enter Details Before Submission");
      return  validation=false;
    }else if((!email.includes('@')) || (!email.includes("."))){
        alert("Not a Valid Email");  
       return validation=false;
    }else if(password !== confirmPassword){
        alert("passwords didn't match please try again");
       return validation=false;

    }else{
setLocal(regDetails);
window.location.href="./index.html";
 }
};

function setLocal(obj){

    let resultArray=JSON.parse(localStorage.getItem("regDetails"));

    if(localStorage.getItem("regDetails") ==null){
        let resultArray=[];
        resultArray.push(obj);
        let data=JSON.stringify(resultArray);
        localStorage.setItem("regDetails" , data);
    }else{
        resultArray.push(obj);
        let data=JSON.stringify(resultArray);
        localStorage.setItem("regDetails" , data);

    }
}