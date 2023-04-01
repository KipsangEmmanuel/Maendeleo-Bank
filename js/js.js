
let acc_balance = document.getElementById('acc_balance');
let input = document.getElementById('input-box');
let prevBalance = 0;
// will get the balance from the json server
// set the account balance in our element

function setBalance() {
    let url = 'http://localhost:3000/Balance/0';
    fetch(url, {method: 'GET'})
    .then((response) => response.json())
    .then((data) => {
        acc_balance.innerText = `Balance: ${data.amount}`;
    })
}

// get the dom element
// get the amount of the to deposit
// check to confirm if the amount is correct
// post the request to deposit the amount
function handleDeposit(){
    let amount = input.value;
    let d = new Date(Date.now())
    if(amount <= 0 || amount === "") {
        alert('The amount should be greater than zero.')
        return;
    }

    let data = {
            "date": d,
            "transaction_type": "Deposit",
            "amount": amount,
            "balance": prevBalance     
    }
    data = JSON.stringify(data);

    let url = 'http://localhost:3000/transaction_history'
    fetch(url, {
        method: 'POST', 
        body: data, 
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((data) => {
        input.value = "";
        alert('Amount Deposited')
    })

}


setBalance();