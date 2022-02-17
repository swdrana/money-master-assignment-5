// getting input html elements
let incomeField = document.querySelector('#income');
let foodField = document.querySelector('#food');
let rentField = document.querySelector('#rent');
let clothesField = document.querySelector('#clothes');

let btnCalculate = document.querySelector('#calculate');
let displayCost = document.querySelector('#total-expenses');
let displayBalance = document.querySelector('#balance');
let balanceError = document.querySelector('#balanceError');

let savingField = document.querySelector('#save');
let btnSave = document.querySelector('#btn-save');
let displaySaving = document.querySelector('#saving-value');
let displayRemaining = document.querySelector('#remaining-value');

//clear input field
function clearInput(){
    incomeField.value = foodField.value = rentField.value = clothesField.value = displayCost.innerHTML = displayBalance.innerHTML = savingField.value = displaySaving.innerHTML = displayRemaining.innerHTML = '';
    incomeField.setAttribute('placeholder','0');
    foodField.setAttribute('placeholder','0');
    rentField.setAttribute('placeholder','0');
    clothesField.setAttribute('placeholder','0');
    savingField.setAttribute('placeholder','0');
    displayCost.innerHTML='0';
    displayBalance.innerHTML='0';
    displaySaving.innerHTML='0';
    displayRemaining.innerHTML='0';
}
clearInput();

//text to number
function stringToNumber(str){
    let num = parseFloat(str);
    return num;
}

//display
function display(where,amount){
    where.innerHTML=amount
}

//Input Field value
let income = foodCost = rentCost = clothCost = totalCost = balance = saving = 0;
balance = income;

//check negative positive and produce error
function validationError(field,cost){
    if(cost>=0){
        field.setCustomValidity("");
    }else if(cost<0){
        field.setCustomValidity("Can't be Negative");
    }else{
        field.setCustomValidity("The field must be a number");
    }
}

//updateInput
function updateInput(){
    if(incomeField.value==''){
        income=0;
    }else{ 
        income = stringToNumber(incomeField.value);
    }

    if(foodField.value==''){
        foodCost=0;
    }else{
        foodCost = stringToNumber(foodField.value);
        validationError(foodField,foodCost);
    }

    if(rentField.value==''){
        rentCost=0;
    }else{
        rentCost = stringToNumber(rentField.value);
        validationError(rentField,rentCost);
    }

    if(clothesField.value==''){
        clothCost=0;
    }else{
        clothCost = stringToNumber(clothesField.value);
        validationError(clothesField,clothCost);
    }
    if(savingField.value==''){
        saving=0;
    }else{
        saving = stringToNumber(savingField.value);
        validationError(savingField,saving);
    }
}
//set default value;
updateInput();
//Calculate & Display using calculate button
btnCalculate.addEventListener('click',function (){
    updateInput();
    if(!Number.isNaN(income)){
        if(income>=0){
        totalCost = foodCost+rentCost+clothCost;
        balance = income-totalCost;
        display(displayCost,totalCost);

        if(income>=totalCost){
            display(displayBalance,balance);
            displayBalance.style.color = "black";
        }else{
            display(displayBalance, `${balance}, Error: The budget is less than your expenses.`);
            displayBalance.style.color = "#ff4f5a";
        }
        incomeField.setCustomValidity('');
        }else{
            incomeField.setCustomValidity("Can't be Negative No.");
        }
    }else if(Number.isNaN(income)){
        incomeField.setCustomValidity("The field must be a number");
    }
});

// Seving Section Work Start From Here 
btnSave.addEventListener('click', function(){
    updateInput();
    balance=income-totalCost;
    seving=saving/100;
    let sevingAmmount = income * seving;
    display(displaySaving, sevingAmmount);
    let remainingBalance =balance-sevingAmmount;
    if(remainingBalance>=0){
        display(displayRemaining, remainingBalance );
        displayRemaining.style.color = "black";
        savingField.setCustomValidity('');
    }else{
        display(displayRemaining, `${remainingBalance} Error: Please lower the savings rate.` );
        displayRemaining.style.color = "#ff4f5a";
        savingField.setCustomValidity('Please lower the savings rate.');
    }
});