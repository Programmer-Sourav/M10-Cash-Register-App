//const { NONAME } = require("dns")

const bill_amount = document.querySelector("#bill-amount")
const cash_given = document.querySelector("#cash-given")
const check_button = document.querySelector("#check-button")
const next_button = document.querySelector("#next-button")
const error_message = document.querySelector("#error-message")
const cash_given_label = document.querySelector("#cash-given-label")
const numberOfNotesTable = document.querySelectorAll(".no_of_notes")

const availabeNotes = [2000, 500, 100, 20, 10, 5, 1]

next_button.addEventListener("click", function validateAndShowCheck(){
if(bill_amount.value>0){    
check_button.style.display = "block"
cash_given_label.style.display= "block"
cash_given.style.display = "block"
}
else{
    errorMsg = "Bill Amount should be more than Zero"
    showErrorMessage(errorMsg)
}

});

check_button.addEventListener("click", function validateAndShow(){

    error_message.style.display = "none"
  
    if(bill_amount.value>0){

        next_button.style.display = "block"
        
        if(Number(cash_given.value)> Number(bill_amount.value)){

           const amount_to_be_returned = Number(cash_given.value) - Number(bill_amount.value)
           calculateChange(amount_to_be_returned)
           var infoMsg = "Amount to be returned "+amount_to_be_returned
           showInfoMessage(infoMsg)

        }
        else{
            balance = Number(bill_amount.value) - Number(cash_given.value)
            var balMsg = "Customer need to pay more Rs. "+balance;
            showErrorMessage(balMsg)
        }

    }
    else{
        errorMsg = "Bill Amount should be more than Zero"
        showErrorMessage(errorMsg)
    }

});

function showErrorMessage(errorMessage){
    error_message.style.display = "block"
    error_message.innerText = errorMessage
}

function showInfoMessage(infoMessage){
    error_message.style.display = "block"
    error_message.innerText = infoMessage
}

function calculateChange(amount_to_be_returned){
    for(let i = 0; i<availabeNotes.length; i++){
        const numberOfNotes = Math.trunc(amount_to_be_returned/availabeNotes[i])
        amount_to_be_returned = amount_to_be_returned % availabeNotes[i]
        numberOfNotesTable[i].innerText = numberOfNotes;


    }

}