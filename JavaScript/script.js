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

// phone quantity plus
plusBtnMobile.addEventListener("click", function () {

    quantityMobile = quantityMobile + 1;

    document.getElementsByClassName("quantity")[0].value = parseFloat(quantityMobile)
    let totalMobileAmount = mobileAmount * quantityMobile;
    document.getElementsByTagName("span")[0].innerText = totalMobileAmount;
    return totalMobileAmount

})

// phone case plus
plusBtnCase.addEventListener("click", function () {

    quantityCase = quantityCase + 1;

    document.getElementsByClassName("quantity")[1].value = parseFloat(quantityCase)
    let totalCaseAmount = caseAmount * quantityCase;
    document.getElementsByTagName("span")[1].innerText = totalCaseAmount;
    return totalCaseAmount

})

// phone quantity minus

minusBtnMobile.addEventListener("click", function () {

    quantityMobile = quantityMobile - 1;

    document.getElementsByClassName("quantity")[0].value = parseFloat(quantityMobile)
    let totalMobileAmount = mobileAmount * quantityMobile;
    document.getElementsByTagName("span")[0].innerText = totalMobileAmount;
    return totalMobileAmount

})

// case quantity minus 
minusBtnCase.addEventListener("click", function () {

    quantityCase = quantityCase - 1;

    document.getElementsByClassName("quantity")[1].value = parseFloat(quantityCase);
    let totalCaseAmount = caseAmount * quantityCase;
    document.getElementsByTagName("span")[1].innerText = totalCaseAmount;
    return totalCaseAmount

})





let subTotal = parseFloat(document.getElementById("subtotal")[0, 1].innerText);

subTotal = totalMobileAmount + totalCaseAmount;

document.getElementById("subtotal")[0, 1].innerText = subTotal;

