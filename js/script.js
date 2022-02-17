// getting input html elements
let incomeField = document.querySelector('#income');
let foodField = document.querySelector('#food');
let rentField = document.querySelector('#rent');
let clothesField = document.querySelector('#clothes');

let btnCalculate = document.querySelector('#calculate');
let displayCost = document.querySelector('#total-expenses');
let displayBalance = document.querySelector('#balance');

let saveText = document.querySelector('#save').value;
let btnSave = document.querySelector('#btn-save');
let displaySaving = document.querySelector('#saving-value');
let displayRemaining = document.querySelector('#remaining-value');

//text to number
function stringToNumber(str){
    return parseFloat(str);
}




//display
function display(where,amount){
    where.innerHTML=amount
}
//Calculate & Display using calculate button
btnCalculate.addEventListener('click',function (){
    let Income = stringToNumber(incomeField.value);

    let foodCost = stringToNumber(foodField.value);
    let rentCost = stringToNumber(rentField.value);
    let clothCost = stringToNumber(clothesField.value);
    let totalCost = foodCost+rentCost+clothCost;
    let balance = Income-totalCost;
    //call displayExpenses Function for display total cost & Balance
    display(displayCost,totalCost);
    display(displayBalance,balance);
});

// Seving Section Work Start From Here 
