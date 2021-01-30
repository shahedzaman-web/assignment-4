var firstClassInput=document.getElementById("firstClassInput").value;
var economyClassInput=document.getElementById("economyClassInput").value;
var subTotal=parseFloat(document.getElementById("subTotal").innerText);
var vat=parseFloat(document.getElementById("vat").innerText);
var total=parseFloat(document.getElementById("total").innerText);
const firstClassPrice=150;
const economyClassPrice=100;
const vatMultiply=0.10;

function tickerCalculation(price){
    subTotal+=price;
    document.getElementById("subTotal").innerText=subTotal;
    vat=subTotal*vatMultiply;
    document.getElementById("vat").innerText=vat;
    total=subTotal+vat;
    document.getElementById("total").innerText=total;
    
}

document.getElementById("firstPlusBtn").addEventListener("click",function (){
    firstClassInput++;
    
    document.getElementById("firstClassInput").value=firstClassInput;

    tickerCalculation(firstClassPrice);
    
} )


document.getElementById("firstMinusBtn").addEventListener("click",function(){
    firstClassInput--;
    
    if( firstClassInput<0){
        return alert("Your value is negative. Please input a valid number!");
    }
    else{
         document.getElementById("firstClassInput").value=firstClassInput;
         tickerCalculation(firstClassPrice*-1);
    }
    
} )

document.getElementById("economyPlusBtn").addEventListener("click",function(){
    economyClassInput++;
    document.getElementById("economyClassInput").value=economyClassInput;
    tickerCalculation(economyClassPrice);

})

document.getElementById("economyMinusBtn").addEventListener("click",function(){
    economyClassInput--;
    if( economyClassInput<0){
        return alert("Your value is negative. Please input a valid number!"); 
    }
    else{
    
    document.getElementById("economyClassInput").value=economyClassInput;
    tickerCalculation(economyClassPrice*-1);

    }
})

// Book Now button event handler
        const bookingButtonBtn = document.getElementById("bookNowBtn");
        bookingButtonBtn.addEventListener("click", function() {
            const bookingArea = document.getElementById("bookingArea");
            bookingArea.style.display = "none";
            const confirmBookingDisplay = document.getElementById("confirmBooking");
            confirmBookingDisplay.style.display = "block";
        })