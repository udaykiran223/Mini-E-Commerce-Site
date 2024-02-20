
function routingToReg(){
    window.location.href="./dashBoard.html"
}

// loginVal(email,password);
function loginVal(){
    let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

    let getdata=JSON.parse(localStorage.getItem("regDetails"));

    for(let user of getdata){
        if(user.password == password && user.email == email){
            window.location.href="./dashBoard.html";
            return;
        }
    }
    alert("Incorrect Email or Password");

};