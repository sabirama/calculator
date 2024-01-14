const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operators');
const equalsTo = document.querySelector('.calculate');

let currNum = "";
let prevNum = "";
let operation;
let prevOperation = '+';
let answer = 0;

const displayPrev = document.querySelector('.prev');
const displayOperation =  document.querySelector('.op');
const displayCurrent = document.querySelector('.curr');
const displayAnswer = document.querySelector('.ans');

numbers.forEach(button => {
    button.addEventListener('click', (e)=> {
        currNum += e.target.name;
        displayCurrent.textContent = currNum;
    })
});

operators.forEach((button) => {
    button.addEventListener('click', (e)=> {
        operation = e.target.name;
        answer = calculate(prevOperation,prevNum,currNum);
        prevOperation = operation;
        prevNum = answer;
        displayPrev.textContent = prevNum;
        displayOperation.textContent = operation;
        displayCurrent.textContent = "";
        displayAnswer.textContent = answer;
        currNum = "";
    })
});

equalsTo.addEventListener('click', ()=> {
    if (prevOperation) {
        calculate(prevOperation,prevNum,currNum);
        prevOperation = operation;
        displayPrev.textContent = prevNum;
        prevNum = answer;
        displayOperation.textContent = operation;
        displayCurrent.textContent = currNum;
        displayAnswer.textContent = answer;
        currNum = 1;
    } else {
        displayAnswer.textContent = "ERROR"
    }
   
})

document.querySelector(".delete").addEventListener('click', () => {
    currNum = currNum.slice(0, -1);
    console.log(currNum);
    displayCurrent.textContent = currNum;
});

document.querySelector('.clear').addEventListener('click', ()=> {
    currNum = "";
    prevNum = "";
    operation = "";
    displayCurrent.textContent = "";
    displayOperation.textContent = "";
    displayPrev.textContent = "";
    displayAnswer.textContent = ""; 
});

function calculate(Operation, PrevNum, CurrNum) {
    switch (Operation) {
        case '+' :
            return answer = Number(PrevNum) + Number(CurrNum);
            break;
        case '-' :
            return answer = Number(PrevNum) - Number(CurrNum);
            break;
        case 'x':
            return answer = Number(PrevNum) * Number(CurrNum);
            break;
        case '÷':
            return answer = Number(PrevNum) / Number(CurrNum);
            break;
        default:
            return answer = 0;
    }
}