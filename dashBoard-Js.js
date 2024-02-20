
let cartspan=document.getElementById("cart-span");
let chartCount=0;
let checkout;
const productCounts = {};
let xhr=new XMLHttpRequest;
xhr.open('GET' ,'https://fakestoreapi.com/products' );
xhr.send();

xhr.onload= function (){
    let data=this.response;
localStorage.setItem("data", data);
}

let data=JSON.parse(localStorage.getItem("data"));
console.log(data);

showData();

// function to show data
function showData(){

    let mainDiv=document.getElementById("content-div");
    mainDiv.innerHTML="";
    let contentDiv=document.createElement("div");
    mainDiv.appendChild(contentDiv);
    contentDiv.innerHTML=" ";
    contentDiv.className="div-flex p-3 bg-light ";

    // looping over data
    for(let i=0; i< data.length;i++){
    let imagesDiv=document.createElement("div");
    contentDiv.appendChild(imagesDiv);
    imagesDiv.innerHTML="";
    imagesDiv.className="d-inline-block p-2  bg-white text-center item-flexwrap ";

    let images=document.createElement("img");
    imagesDiv.appendChild(images);
    images.src=data[i].image;
    images.className="images-fit   ";

    let add=document.createElement("button");
    imagesDiv.appendChild(add);
    add.innerHTML="Add to Cart";
    add.className="btn my-3 d-block mx-auto add-Btn ";
    add.setAttribute("onclick" , "addToCart("+JSON.stringify(data[i].id)+")");

    let remove=document.createElement("button");
    imagesDiv.appendChild(remove);
    remove.innerHTML="remove from Cart";
    remove.className="btn btn-danger my-3 d-block mx-auto ";
    remove.setAttribute("onclick" , "removeFromCart("+JSON.stringify(data[i].id)+")");

    let title=document.createElement("h5");
    imagesDiv.appendChild(title);
    title.innerHTML="Title : "+data[i].title;

    let category=document.createElement("p");
    imagesDiv.appendChild(category);
    category.innerHTML=`<span class="fw-medium ">Category : </span> ${data[i].category}`

    let description=document.createElement("p");
    imagesDiv.appendChild(description);
    description.innerHTML=`<span class="fw-medium ">Description : </span> ${data[i].description}`;
    description.className="product-description ";
    description.title=data[i].description;

    let price=document.createElement("h5");
    imagesDiv.appendChild(price);
    price.innerHTML="Price : " + " $"+data[i].price;

    let count=document.createElement("span");
    imagesDiv.appendChild(count);
    count.innerHTML=data[i].rating.count+" Members rated :";

    let rating=document.createElement("span");
    imagesDiv.appendChild(rating);
    rating.innerHTML=" "+data[i].rating.rate+" ⭐";
 
}
}

// Function to add a product to the cart
function addToCart(productId) {
        chartCount++;
        cartspan.innerHTML=chartCount;
    if (productCounts[productId]) {
        // If the product exists in the object, increment its count by 1
        productCounts[productId]++;
        console.log(productCounts);
    } else {
        // If the product doesn't exist, initialize its count to 1
        productCounts[productId] = 1;
    }
    console.log(productCounts);
}

// Function to remove a product from the cart
function removeFromCart(productId) {
    if (productCounts[productId] && productCounts[productId] > 0) {
        // Decrement the count of the product by 1
        productCounts[productId]--;
        console.log(productCounts);
        if(productCounts[productId] ==0){
            delete productCounts[productId];
            console.log(productCounts);
        }
                chartCount--;
        cartspan.innerHTML=chartCount;
    }else if(productCounts.length==0){
         cartspan.innerHTML=0;
    }
}

function showCart(){
    localStorage.setItem("productCounts" , JSON.stringify(productCounts));
    window.location.href="./cart.html";
}

// function showCart(){
//     let bills=[];
//     let bill=0;
//     let cartBtn=document.getElementById("cartBtn");
//     cartBtn.className=" d-none ";

//     let mainDiv=document.getElementById("content-div");
//     mainDiv.innerHTML="";

//     let cartDiv=document.createElement("div");
//     mainDiv.appendChild(cartDiv);
//     cartDiv.className="m-3 ";
//     cartDiv.innerHTML="";

//     cartTable(mainDiv,bills);

//     // console.log(bills);
//     bills.forEach((sum)=>{
//         bill+=sum;
//     })
//     let totalBill=document.createElement("p");
//     mainDiv.appendChild(totalBill);
//     totalBill.innerHTML=`<span class="fw-medium">Total Bill : </span> $ ${bill.toFixed(2)} `;

// let checkoutDiv=document.createElement("div");
// mainDiv.appendChild(checkoutDiv);
// checkoutDiv.className="mx-auto w-50 text-center mt-3";
// checkoutDiv.innerHTML=`<button onclick="homePage()" class="btn btn-success mx-auto w-25 ">Check Out </button>`;

// };

// function cartTable(mainDiv,bills){
//     let table=document.createElement("table");
//     mainDiv.appendChild(table);

//     let tBody=document.createElement("tbody");
//     table.appendChild(tBody);

//     let thr=document.createElement("tr");
//     tBody.appendChild(thr);
//     let chartHeaders=["Title","Product Image" , "Price" , "Quantity" , "Product Total Sum"];

//     chartHeaders.forEach((u)=>{
//         let th=document.createElement("th");
//         thr.appendChild(th);
//         th.innerHTML=u;
//     });

// let keys=Object.keys(productCounts);
// for (const product of data) {
//     // console.log(product.id);
//     for(let i=0; i<keys.length;i++){
//     if(keys[i] == product.id && productCounts[product.id] >0){

//         let tr=document.createElement("tr");
//         tBody.appendChild(tr);
     
//         let title=document.createElement("td");
//         tr.appendChild(title);
//         title.innerHTML=product.title;
//         title.className="w-25 ";

//         let imagesDiv=document.createElement("td");
//         tr.appendChild(imagesDiv);

//         let image=document.createElement("img");
//         imagesDiv.appendChild(image);
//         image.src=product.image;
//         image.className=" images-fit "

//         let price=document.createElement("td");
//         tr.appendChild(price);
//         price.innerHTML=" $ "+product.price ;

//         let productCount=document.createElement("td");
//         tr.appendChild(productCount);
//         if(productCounts[product.id]){
//            var quantity=productCounts[product.id];
//             productCount.innerHTML=quantity;
//         }else{
//             productCount.innerHTML=quantity;
//         }

//         let productSum=document.createElement("td");
//         tr.appendChild(productSum);
//         let totalsum=product.price * quantity;
//         bills.push(totalsum);
//         productSum.innerHTML=" $ "+totalsum;
//     }
// }
// }
// }

