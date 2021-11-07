// mobile variables
let plusBtnMobile = document.getElementsByClassName("fa-plus")[0];
let minusBtnMobile = document.getElementsByClassName("fa-minus")[0];
let quantityMobile = parseFloat(document.getElementsByClassName("quantity")[0].value);
let mobileAmount = parseFloat(document.getElementsByTagName("span")[0].innerText);


// phone case variables
let plusBtnCase = document.getElementsByClassName("fa-plus")[1];
let minusBtnCase = document.getElementsByClassName("fa-minus")[1];
let quantityCase = parseFloat(document.getElementsByClassName("quantity")[1].value);
let caseAmount = parseFloat(document.getElementsByTagName("span")[1].innerText);

// amount variable
let subTotal = parseFloat(document.getElementById("subtotal").innerText);
let total = parseFloat(document.getElementById("total").innerText);
let tax = parseFloat(document.getElementById("tax").innerText);

// phone quantity plus
plusBtnMobile.addEventListener("click", function phoneQuantityPlus() {

    quantityMobile = quantityMobile + 1;

    document.getElementsByClassName("quantity")[0].value = quantityMobile
    let totalMobileAmount = mobileAmount * quantityMobile;
    document.getElementsByTagName("span")[0].innerText = parseFloat(totalMobileAmount);
    subTotal = subTotal + 1219;
    return document.getElementById("subtotal").innerText = parseFloat(subTotal);



})
plusBtnMobile.addEventListener("click", function phoneQuantityPlus() {

    tax = (subTotal * 15) / 100;
    return document.getElementById("tax").innerText = parseFloat(tax)

})

plusBtnMobile.addEventListener("click", function phoneQuantityPlus() {

    total = subTotal + tax;
    return document.getElementById("total").innerText = parseFloat(total);

})




// phone case plus
plusBtnCase.addEventListener("click", function caseQuantityPlus() {

    quantityCase = quantityCase + 1;

    document.getElementsByClassName("quantity")[1].value = parseFloat(quantityCase)
    let totalCaseAmount = caseAmount * quantityCase;
    document.getElementsByTagName("span")[1].innerText = totalCaseAmount;

    subTotal = subTotal + 59;
    return document.getElementById("subtotal").innerText = parseFloat(subTotal);




})

plusBtnCase.addEventListener("click", function caseQuantityPlus() {

    tax = (subTotal * 15) / 100;
    return document.getElementById("tax").innerText = parseFloat(tax)




})
plusBtnCase.addEventListener("click", function caseQuantityPlus() {

    total = subTotal + tax;
    return document.getElementById("total").innerText = parseFloat(total);




})

// phone quantity minus

minusBtnMobile.addEventListener("click", function phoneQuantityMinus() {

    quantityMobile = quantityMobile - 1;

    document.getElementsByClassName("quantity")[0].value = parseFloat(quantityMobile);
    let totalMobileAmount = mobileAmount * quantityMobile;
    document.getElementsByTagName("span")[0].innerText = totalMobileAmount;
    subTotal = subTotal - 1219;
    return document.getElementById("subtotal").innerText = parseFloat(subTotal);


})
minusBtnMobile.addEventListener("click", function phoneQuantityMinus() {

    tax = (subTotal * 15) / 100;
    return document.getElementById("tax").innerText = parseFloat(tax);


})

minusBtnMobile.addEventListener("click", function phoneQuantityMinus() {

    total = subTotal + tax;
    return document.getElementById("total").innerText = parseFloat(total);


})

// case quantity minus 
minusBtnCase.addEventListener("click", function caseQuantityMinus() {

    quantityCase = quantityCase - 1;

    document.getElementsByClassName("quantity")[1].value = parseFloat(quantityCase);
    let totalCaseAmount = caseAmount * quantityCase;
    document.getElementsByTagName("span")[1].innerText = totalCaseAmount;
    subTotal = subTotal - 59;
    return document.getElementById("subtotal").innerText = parseFloat(subTotal);



})
minusBtnCase.addEventListener("click", function caseQuantityMinus() {

    tax = (subTotal * 15) / 100;
    return document.getElementById("tax").innerText = parseFloat(tax);





})

minusBtnCase.addEventListener("click", function caseQuantityMinus() {

    total = subTotal + tax;
    return document.getElementById("total").innerText = parseFloat(total);

})


