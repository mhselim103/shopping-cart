
function quantity(product, price, isIncreased) {
    const quantity = document.getElementById(product +'-input')
    let updatedQuantity = parseInt(quantity.value);
    if (isIncreased == true) {
        updatedQuantity = updatedQuantity + 1;   
    }

    else if (updatedQuantity > 0){
        updatedQuantity = updatedQuantity - 1;
    }

    quantity.value = updatedQuantity;

    const totalPrice = document.getElementById(product +'-total')
    totalPrice.innerText = updatedQuantity * price;

    calculation();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-input').value;
    return parseFloat(productInput);
}

function calculation() {
    const phonePrice = getInputValue('phone') * 1229;
    const casePrice = getInputValue('case') * 59;
    const subTotal = phonePrice + casePrice;
    const taxAmount = subTotal / 10;
    const totalAmount = subTotal + taxAmount;
    // console.log(subTotal);
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = taxAmount;
    document.getElementById('total-amount').innerText = totalAmount;
}


// phone

document.getElementById('phone-plus').addEventListener('click', function () {
    const inputValue = quantity('phone', 1229, true);

})
document.getElementById('phone-minus').addEventListener('click', function () {
    const inputValue = quantity('phone', 1229, false);
})


// case 

document.getElementById('case-plus').addEventListener('click', function () {
    const inputValue = quantity('case', 59, true);

})
document.getElementById('case-minus').addEventListener('click', function () {
    const inputValue = quantity('case', 59, false);
})