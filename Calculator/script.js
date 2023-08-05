const OPERATORS = ['+', '-', '/', '*'];
const NBS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const RESULTS = ['=', 'CLEAR', 'DELETE'];

let number1 = '';
let number2 = '';
let operator = '';

const currentEq = document.querySelector('#currentEq');
const res = document.querySelector('#result');

function onClickFunctions() {
    const NBS = document.querySelectorAll('.NUMBER');
    NBS.forEach((btn) => btn.addEventListener('click', (b) => {
        if (operator ==='') {
            number1 += btn.innerHTML;
            res.innerHTML = number1; // res
        } else {
            number2 += btn.innerHTML;
            res.innerHTML = number2;
        }
    }))

    const OPS = document.querySelectorAll('.OPERATOR');
    OPS.forEach((btn) => btn.addEventListener('click', (b) => {
        if (operator ==='' || number2 ==='') {
            operator = btn.innerHTML;
            currentEq.innerHTML = number1 + ' ' + operator + ' ';
        } else {
            calculateResult();
            operator = btn.innerHTML;
            currentEq.innerHTML = number1 + ' ' + operator + ' ';
            number2 = '';
        }
    }))

    const EQUAL = document.querySelector('.EQUAL');
    EQUAL.addEventListener('click', (b) => {
        currentEq.innerHTML += number2;
        if (number1 && number2 && operator) {
            currentEq.innerHTML += ' =';
            calculateResult();
            operator = '';
            number2 = '';

        }
    })

    const CLEAR = document.querySelector('.CLEAR');
    CLEAR.addEventListener('click', (b) => {
        currentEq.innerHTML = '';
        res.innerHTML = '';
        number1 = '';
        number2 = '';
        operator = '';
    })

    const DELETE = document.querySelector('.DELETE');
    DELETE.addEventListener('click', () => {
        if (operator === '') {
            number1 = number1.slice(0, -1);
            res.innerHTML = number1;
        } else {
            number2 = number2.slice(0, -1);
            res.innerHTML = number2;
        }
    });

}

function calculateResult() {
    if (number1 && number2 && operator) {
        if (operator === '+') {
            number1 = Number(number1) + Number(number2);
        } else if (operator === '-') {
            number1 = Number(number1) - Number(number2);
        } else if (operator === '*') {
            number1 = Number(number1) * Number(number2);
        } else if (operator === '/') {
            number1 = Number(number1) / Number(number2);
        }
        number1 = String(number1);
        res.innerHTML = number1;
    }
}

// ... (rest of the code)


onClickFunctions()