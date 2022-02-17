// getting input html elements
let incomeField = document.querySelector('#income');
let foodField = document.querySelector('#food');
let rentField = document.querySelector('#rent');
let clothesField = document.querySelector('#clothes');

let btnCalculate = document.querySelector('#calculate');
let displayCost = document.querySelector('#total-expenses');
let displayBalance = document.querySelector('#balance');

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
    return parseFloat(str);
}


//display
function display(where,amount){
    where.innerHTML=amount
}


//Input Field value
let income = foodCost = rentCost = clothCost = totalCost = balance = saving = 0;
balance = income;


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
    }
    if(rentField.value==''){
        rentCost=0;
    }else{
        rentCost = stringToNumber(rentField.value);
    }
    if(clothesField.value==''){
        clothCost=0;
    }else{
        clothCost = stringToNumber(clothesField.value);
    }
    if(savingField.value==''){
        saving=0;
    }else{
        saving = stringToNumber(savingField.value);
    }
}
//set default value;
updateInput();
//Calculate & Display using calculate button
btnCalculate.addEventListener('click',function (){
    updateInput();
    console.log(income);
    // if(incomeField.value===''){
    //     incomeField.setCustomValidity("This field can't be empty");
    // }
    totalCost = foodCost+rentCost+clothCost;
    balance = income-totalCost;
    //call displayExpenses Function for display total cost & Balance
    display(displayCost,totalCost);
    display(displayBalance,balance);
});

// Seving Section Work Start From Here 
btnSave.addEventListener('click', function(){
    updateInput();
    seving=saving/100;
    let sevingAmmount = income * seving;
    display(displaySaving, sevingAmmount);
    let remainingBalance =balance-sevingAmmount;
    display(displayRemaining, remainingBalance );
})