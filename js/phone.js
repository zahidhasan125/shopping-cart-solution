function amountUpdate(isUpdate) {
    const getInputValue = document.getElementById('item-phone-quantity');
    const inputValueString = getInputValue.value;
    const inputValue = parseInt(inputValueString);
    
    let phoneUpdateNumber = 0;

    if (isUpdate) {
        phoneUpdateNumber = inputValue + 1;
    }
    else if (inputValue > 0) {
        phoneUpdateNumber = inputValue - 1;
    }
    getInputValue.value = phoneUpdateNumber;
    
    return phoneUpdateNumber;
}

function updatePhoneTotalPrice(newPhoneQuantity){
    const phoneTotalPrice = newPhoneQuantity * 1219;
    const getTextOfElement = document.getElementById('phone-total-amount');
    getTextOfElement.innerText = phoneTotalPrice;
}



document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const phoneQuantity = amountUpdate(true);
    updatePhoneTotalPrice(phoneQuantity);
    calculateTotals()    
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const phoneQuantity = amountUpdate(false);
    updatePhoneTotalPrice(phoneQuantity);
    calculateTotals()

})