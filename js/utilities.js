function getElementValue(elementId){
    const getElementTextValue = document.getElementById(elementId);
    const getElementTextString = getElementTextValue.innerText;
    const getElementValue = parseFloat(getElementTextString);

    return getElementValue;
}

function setTextElementById(elementId, newValue){
    const setTextElement = document.getElementById(elementId);
    setTextElement.innerText =newValue;
}

function calculateTotals(){
    const phoneTotalAmount = getElementValue('phone-total-amount');
    const caseTotalAmount = getElementValue('case-total-amount');
    const subTotal = phoneTotalAmount + caseTotalAmount;
    setTextElementById('sub-total', subTotal);
    const taxTotalAmount = subTotal * 0.10;
    const taxTotalDecimal = taxTotalAmount.toFixed(2);
    const taxTotal = parseFloat(taxTotalDecimal);

    setTextElementById('tax-total', taxTotal);
    const grandTotal = subTotal + taxTotal; 
    setTextElementById('grand-total', grandTotal);
}