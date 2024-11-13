// validation code
// const form = document.getElementsByClassName("form")
const item =  document.getElementById("item");
const price = document.getElementById("price");
const avail = document.getElementById("avail");

const iw = document.getElementById("iw")
const pw = document.getElementById("pw")
const aw = document.getElementById("aw")

const dairee = document.getElementById("liquid")
const cdrinks = document.getElementById("liquid2")

  

let button = document.getElementById("btn")

// const product = new Object();
// localStorage.setItem("products",JSON.stringify(product))


const enter = (event)=>{

    event.preventDefault();


    item.style.border = "";
    price.style.border = "";
    avail.style.border = "";

    iw.style.display = "none"
    pw.style.display = "none"
    aw.style.display = "none"



    isValid = true
    
    if(item.value === ""){
        error(item, iw)
        
        isValid = false;
        
    }
    else{
        success(item)
    }
    if(price.value ===""){
        error(price, pw)
        
        isValid = false
        
    }
    else{
        success(price)
    }
    if(avail.value ===""){
        error(avail, aw)
        
        isValid = false;

    }
    else{
        success(avail)
    }
    
    if(isValid){
        const product = {
            name: item.value,
            price: price.value + " rupees",
            avail: avail.value + " kgs"

            }
  
        // let products = [];
        products = JSON.parse(localStorage.getItem("products")) || []
        products.unshift(product);  

        
    
        
        localStorage.setItem("products", JSON.stringify(products));
        console.log("Saved:", products);


        alert("Succesfully completed the 'Entries'")
        }
        
    
}



button.addEventListener("click",enter)

function error(input,message){
    input.style.border = "1px solid red";
    message.style.display = "block";

    setTimeout(()=>{
        input.style.border = "";
        message.style.display = "none";
    
        console.log("test")
    },3000) 
}

function success(input){
    input.style.border = "1px solid green";
}






 
// IMAGE CHANGING

const catselect = document.getElementById("selectcat");
const catimg = document.getElementById("catimg");

const bevimg = "image copy 2.png"; 
const dairyimg = "image copy.png"; 
const grainimg = "image copy 3.png"; 
const vegimg = "image.png"; 


// Change image function
const changeimg = () => {
      const imageselect = catselect.value.toLowerCase()

    switch (imageselect) {
        case "vegetables":
            catimg.src = vegimg; 
            break;
        case "dairy":
            catimg.src = dairyimg; 
            break;
        case "grains":
            catimg.src = grainimg; 
            break;
        case "beverages":
            catimg.src = bevimg; 
            break;
        
    }
};

catselect.addEventListener("change", changeimg);



// CLEARING THE ITEMS
const clear = document.getElementById("clear");

const clearitems = ()=>{
    item.value = "";
    price.value = "";
    avail.value = "";

    iw.style.display = "none"
    pw.style.display = "none"
    aw.style.display = "none"

    item.style.border = "";
    price.style.border = "";
    avail.style.border = "";
    alert("Are you sure to clear the item")

}
clear.addEventListener("click",clearitems)


// CLEARING THE ENTIRE FORM

const clearform = document.getElementById("clearform");
  
const formclear = ()=>{
    localStorage.clear()
    confirm("You Want to clear the whole items")
}
clearform.addEventListener("click",formclear) 