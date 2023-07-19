let button = document.querySelectorAll('.but');
let screen = document.querySelector('#screenDisplay');
let clear = document.querySelector('#clear');
let add = document.querySelector('#add');
let operator = document.querySelectorAll('.operatorButton');
let equal = document.querySelector('#equals');
let firstNum = 0;
let secondNum = 0;
let op = 0;
let result = 0;

//Event listeners
button.forEach((item)  => {
    item.addEventListener('click', () => {
        screen.innerText += item.innerText;
    });
});

clear.addEventListener('click', () => {
    screen.innerText = "";
    result = 0;
})

operator.forEach((but) => {
    but.addEventListener('click', () => {
        firstNum = parseInt(screen.innerText);
        screen.innerText = "";
        console.log(firstNum);
        op = but.innerText;
        console.log(op);
    })
})

equal.addEventListener('click', () => {
    secondNum = parseInt(screen.innerText);
    if(op == '+') {
        sum(firstNum,secondNum);
        console.log(result);
    } else if(op == '-') {
        rest(firstNum,secondNum);
        console.log(result);
    } else if (op == 'X') {
        multiply(firstNum,secondNum)
        console.log(result);
    } else if (op == '/') {
        divide(firstNum,secondNum);
        console.log(result);
    }
    
})

//Functions
function sum (firstNum,secondNum) {
    return result = firstNum + secondNum;
}

function rest (firstNum,secondNum) {
    return result = firstNum - secondNum;
}

function multiply (firstNum, secondNum) {
    return result = firstNum * secondNum;
}

function divide (firstNum, secondNum) {
    return result = firstNum / secondNum;
}

//Need to add multiple operations at once functionality