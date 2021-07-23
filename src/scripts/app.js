const billInput = document.getElementById("billInput");
const peopleInput = document.getElementById("peopleInput");

const bucksTexts = document.querySelectorAll(".calculator__bucks");

const resetButton = document.getElementById("resetButton");
const tipButtons = document.querySelectorAll(".tip-button");

const buttonResetTouched = function(event) {
    
    billInput.value = '';
    peopleInput.value = '';

    [...bucksTexts].forEach(text => {
        text.innerHTML = '0.00';
    });

    removeActiveButtonClases();

    event.preventDefault();
    return false;
};

function calcTip(percentage) {
    let billValue = parseInt(billInput.value);
    let peopleValue = parseInt(peopleInput.value);

    if(isNaN(peopleValue) || peopleValue <= 0) {
        peopleValue = 1;
    }
    
    let tipAmount = billValue * percentage;
    let tipTotal = tipAmount * peopleValue;

    [...bucksTexts].forEach(text => {
        if(text == bucksTexts[0]) {
            text.innerHTML = tipAmount;
        }else {
            text.innerHTML = tipTotal;
        }
    });
};

function removeActiveButtonClases(){
    [...tipButtons].forEach(button => {
        button.classList.remove("is-active");
    })
};
[...tipButtons].forEach(button => {
    button.addEventListener('click', () => {
        let tipPercentage = parseInt(button.value) / 100;
        removeActiveButtonClases();
        button.classList.add("is-active");
        calcTip(tipPercentage);
    })
});

resetButton.addEventListener('touchstart', buttonResetTouched, false);
resetButton.addEventListener('mouseup', buttonResetTouched, false);