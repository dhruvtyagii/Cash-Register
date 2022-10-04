const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-button");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector("#error-message")
const noOfNotes = document.querySelectorAll(".no-of-notes");

var numberOfNotes = [0,0,0,0,0,0,0];
checkButton.addEventListener("click", validateBillAndCashAmount);

function validateBillAndCashAmount() {
    
    if (billAmount.value > 0){
        if (cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);

        }
        else{
            showMessage("The cash provided should be atleast equal to the bill amount");
        }
    } 

    else {

        showMessage("Invalid Bill Amount");
    }

}

function calculateChange(amountToBeReturned){

    var notes = [2000, 500, 100, 20, 10, 5, 1];
  

    for (let i = 0; i <= notes.length; i++){

        const numberOfNotes = Math.trunc(
            amountToBeReturned / notes[i]
        );

        amountToBeReturned %= notes[i];
        noOfNotes[i].innerText = numberOfNotes;
        
    }



}

function showMessage(msg) {

    message.innerText = msg;

}
