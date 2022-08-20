function amountUpdateBtn(isUpdate) {
    const getInputValue = document.getElementById('item-case-quantity');
    const inputValueString = getInputValue.value;
    const inputValue = parseInt(inputValueString);

    let caseUpdateNumber = 0;

    if (isUpdate) {
        caseUpdateNumber = inputValue + 1;
    }
    else if (inputValue > 0) {
        caseUpdateNumber = inputValue - 1;
    }
    getInputValue.value = caseUpdateNumber;
    
    return caseUpdateNumber;
}

function updateCaseTotalPrice(newCaseQuantity){
    const newCasePrice = newCaseQuantity * 59;
    const currentPriceElement = document.getElementById('case-total-amount')
    currentPriceElement.innerText = newCasePrice;
}


document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseItems = amountUpdateBtn(true);
    updateCaseTotalPrice(newCaseItems);
    calculateTotals()

})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseItems = amountUpdateBtn(false);
    updateCaseTotalPrice(newCaseItems);
    calculateTotals()

})
