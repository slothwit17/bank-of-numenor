//login button event handler
document.getElementById('loginBtn').addEventListener('click', function(){
    const loginArea = document.getElementById('login-part');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})

//deposit button event handler

const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function(){
    const depositNumber = getInputNumber("deposit-amount");

    updateAmount("current-deposit", depositNumber);
    updateAmount("current-balance", depositNumber);

    document.getElementById('deposit-amount').value = "";
})

// withdraw button event handler
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function(){
    const withdrawNumber = getInputNumber("withdraw-amount");
    updateAmount("current-withdraw", withdrawNumber);
    updateAmount("current-balance", -1*withdrawNumber);
    document.getElementById('withdraw-amount').value = "";
})

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}
function updateAmount(id, depositNumber ){
    const current= document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}