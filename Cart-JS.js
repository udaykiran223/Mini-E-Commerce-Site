
let data=JSON.parse(localStorage.getItem("data"));
let productCounts=JSON.parse(localStorage.getItem("productCounts"));

showCart();
function showCart(){
    let bills=[];
    let bill=0;

    let mainDiv=document.getElementById("content-div");
    mainDiv.innerHTML="";

    let cartDiv=document.createElement("div");
    mainDiv.appendChild(cartDiv);
    cartDiv.className="m-3 ";
    cartDiv.innerHTML="";

    cartTable(mainDiv,bills);

    // console.log(bills);
    bills.forEach((sum)=>{
        bill+=sum;
    })
    let totalBill=document.createElement("p");
    mainDiv.appendChild(totalBill);
    totalBill.innerHTML=`<span style="text-decoration:underline;" class="fw-medium">Total Bill : </span> $ <h4 class="d-inline-block"> ${bill.toFixed(2)} </h4 >`;
    totalBill.style="float:right; margin:0 10% 0 0;";

let checkoutDiv=document.createElement("div");
mainDiv.appendChild(checkoutDiv);
checkoutDiv.className="mx-auto w-50 text-center mb-5 ";
checkoutDiv.innerHTML=`<button onclick="homePage()" class="btn btn-success mx-auto w-50 ">Check Out </button>`;

};

function cartTable(mainDiv,bills){
    let table=document.createElement("table");
    mainDiv.appendChild(table);
    table.className="m-3 ";

    let tBody=document.createElement("tbody");
    table.appendChild(tBody);

    let thr=document.createElement("tr");
    tBody.appendChild(thr);
    let chartHeaders=["Title","Product Image" , "Price" , "Quantity" , "Product Total Sum"];

    chartHeaders.forEach((u)=>{
        let th=document.createElement("th");
        thr.appendChild(th);
        th.innerHTML=u;
    });

let keys=Object.keys(productCounts);
for (const product of data) {
    // console.log(product.id);
    for(let i=0; i<keys.length;i++){
    if(keys[i] == product.id && productCounts[product.id] >0){

        let tr=document.createElement("tr");
        tBody.appendChild(tr);
     
        let title=document.createElement("td");
        tr.appendChild(title);
        title.innerHTML=product.title;
        title.className="w-25 ";

        let imagesDiv=document.createElement("td");
        tr.appendChild(imagesDiv);

        let image=document.createElement("img");
        imagesDiv.appendChild(image);
        image.src=product.image;
        image.className=" images-fit "

        let price=document.createElement("td");
        tr.appendChild(price);
        price.innerHTML=" $ "+product.price ;

        let productCount=document.createElement("td");
        tr.appendChild(productCount);
        if(productCounts[product.id]){
           var quantity=productCounts[product.id];
            productCount.innerHTML=quantity;
        }else{
            productCount.innerHTML=quantity;
        }
        let productSum=document.createElement("td");
        tr.appendChild(productSum);
        let totalsum=product.price * quantity;
        bills.push(totalsum);
        productSum.innerHTML=" $ "+totalsum;
    }
}
}
}

function homePage(){
    alert("Thank You For Shopping \n Visit us Again...!");
    localStorage.removeItem("productCounts");
    window.location.href="./dashBoard.html";
}

