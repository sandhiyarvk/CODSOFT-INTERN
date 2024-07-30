const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let operator = '';
let firstOperand = null;
let secondOperand = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (button.id === 'clear') {
            clearDisplay();
        } else if (button.id === 'equals') {
            calculateResult();
        } else if (button.classList.contains('operator')) {
            setOperator(value);
        } else {
            appendNumber(value);
        }
    });
});

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    secondOperand = null;
    display.textContent = '0';
}

function calculateResult() {
    if (firstOperand !== null && operator !== '') {
        secondOperand = parseFloat(currentInput);
        let result = 0;

        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
        }

        display.textContent = result;
        currentInput = result.toString();
        firstOperand = null;
        operator = '';
    }
}

function setOperator(op) {
    if (currentInput === '' && display.textContent !== '0') {
        currentInput = display.textContent;
    }
    firstOperand = parseFloat(currentInput);
    operator = op;
    currentInput = '';
}

function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number;
    display.textContent = currentInput;
}
