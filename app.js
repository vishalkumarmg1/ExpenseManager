const reasonInput = document.querySelector('#input-reason')
const amountInput = document.querySelector('#input-amount')
const cancelButton = document.querySelector('#button-cancel')
const addButton  = document.querySelector('#button-add')
const expenseList  = document.querySelector('#expense-list');
const totalExpenseOutput = document.querySelector('#total-expense'); 
const alertCtrl = document.querySelector('#ion-alert-controller');


let totalExpenses = 0 ;
 
clear = () =>{
    reasonInput.value='';
    amountInput.value='';
};

addButton.addEventListener('click', () =>{
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (
        enteredReason.trim().length<=0 ||
        enteredAmount<=0|| 
        enteredAmount.trim().length<=0
        ) {
        return; 
    }
    
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;

    expenseList.appendChild(newItem);
    totalExpenses += + enteredAmount; 
    totalExpenseOutput.textContent = totalExpenses; 
    clear();

    
});

cancelButton.addEventListener('click',clear);