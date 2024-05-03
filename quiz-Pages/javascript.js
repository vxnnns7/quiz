const quizData = [
  {
    question: "What is the result of the following code snippet? console.log(2 + '2' - 1);",
    a: "22",
    b: "3",
    c: "21",
    d: "NaN",
    correct: "b"
  },
  {
    question: "What does NaN stand for?",
    a: "Not a Number",
    b: "Null and None",
    c: "Number and Null",
    d: "Now and Never",
    correct: "a"
  },
  {
    question: "What is the output of the following code snippet? console.log(typeof typeof 1);",
    a: "'number'",
    b: "'string'",
    c: "'object'",
    d: "'undefined'",
    correct: "b"
  },
  {
    question: "What is the purpose of the 'let' keyword in JavaScript?",
    a: "To declare a variable with block scope",
    b: "To declare a variable with global scope",
    c: "To declare a constant variable",
    d: "To declare a variable with function scope",
    correct: "a"
  },
  {
    question: "Which of the following statements is true about JavaScript?",
    a: "JavaScript is a statically typed language",
    b: "JavaScript cannot be used to manipulate HTML elements",
    c: "JavaScript is an object-oriented language",
    d: "JavaScript code runs on the server-side only",
    correct: "c"
  },
  {
    question: "What does the 'typeof' operator in JavaScript return when used on an array?",
    a: "'array'",
    b: "'object'",
    c: "'array'",
    d: "'undefined'",
    correct: "b"
  },
  {
    question: "What is the output of the following code snippet? console.log(0.1 + 0.2);",
    a: "0.3",
    b: "0.30000000000000004",
    c: "0.2",
    d: "0.1",
    correct: "b"
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    a: "To refer to the current function",
    b: "To refer to the global object",
    c: "To refer to the parent object",
    d: "To refer to the current object",
    correct: "d"
  },
  {
    question: "Which operator is used to concatenate strings in JavaScript?",
    a: "+",
    b: "-",
    c: "*",
    d: "/",
    correct: "a"
  },
  {
    question: "What is the output of the following code snippet? console.log('2' == 2);",
    a: "true",
    b: "false",
    c: "undefined",
    d: "NaN",
    correct: "a"
  },
  {
    question: "What does the 'isNaN' function in JavaScript do?",
    a: "Checks if a value is not a number",
    b: "Checks if a value is a number",
    c: "Converts a value to a number",
    d: "Checks if a value is undefined",
    correct: "a"
  },
  {
    question: "Which method is used to remove the last element from an array in JavaScript?",
    a: "pop()",
    b: "shift()",
    c: "splice()",
    d: "slice()",
    correct: "a"
  },
  {
    question: "What is the purpose of the 'new' keyword in JavaScript?",
    a: "To create a new function",
    b: "To create a new object",
    c: "To create a new variable",
    d: "To create a new array",
    correct: "b"
  },
  {
    question: "What is the output of the following code snippet? console.log(typeof(null));",
    a: "'object'",
    b: "'null'",
    c: "'undefined'",
    d: "'number'",
    correct: "a"
  },
  {
    question: "What does the '!=='' operator in JavaScript mean?",
    a: "Equal value and equal type",
    b: "Not equal value or not equal type",
    c: "Equal value but not equal type",
    d: "Not equal value but equal type",
    correct: "b"
  },
  {
    question: "What is the output of the following code snippet? console.log(3 > 2 > 1);",
    a: "true",
    b: "false",
    c: "TypeError",
    d: "undefined",
    correct: "b"
  },
  {
    question: "What is the output of the following code snippet? console.log(5 + '5');",
    a: "55",
    b: "10",
    c: "25",
    d: "Error",
    correct: "a"
  },
  {
    question: "What is the purpose of the 'bind' method in JavaScript?",
    a: "To attach an event handler to an element",
    b: "To merge two or more arrays",
    c: "To create a new array with the results of calling a provided function on every element in the calling array",
    d: "To create a new function with a specified 'this' value and initial arguments",
    correct: "d"
  },
  {
    question: "What is the output of the following code snippet? console.log(1 + '1' == 11);",
    a: "true",
    b: "false",
    c: "undefined",
    d: "NaN",
    correct: "a"
  },
  {
    question: "What is the purpose of the 'slice' method in JavaScript?",
    a: "To remove the last element from an array",
    b: "To create a shallow copy of an array",
    c: "To add one or more elements to the end of an array",
    d: "To iterate over the elements of an array",
    correct: "b"
  },
  {
    question: "What is the output of the following code snippet? console.log(2 * '2');",
    a: "4",
    b: "22",
    c: "NaN",
    d: "Error",
    correct: "a"
  },
  {
    question: "What does the 'splice' method do in JavaScript?",
    a: "Adds one or more elements to the end of an array",
    b: "Removes the last element from an array",
    c: "Removes elements from an array and, if necessary, inserts new elements in their place",
    d: "Creates a new array with the results of calling a provided function on every element in the calling array",
    correct: "c"
  },
  {
    question: "What is the output of the following code snippet? console.log(typeof NaN);",
    a: "'number'",
    b: "'NaN'",
    c: "'undefined'",
    d: "'object'",
    correct: "a"
  },
  {
    question: "What is the purpose of the 'map' method in JavaScript?",
    a: "To remove elements from an array",
    b: "To add elements to the beginning of an array",
    c: "To iterate over the elements of an array and modify them",
    d: "To create a new array with the results of calling a provided function on every element in the calling array",
    correct: "d"
  },
  {
    question: "What is the output of the following code snippet? console.log('hello'.toUpperCase());",
    a: "'HELLO'",
    b: "'hello'",
    c: "'Hello'",
    d: "Error",
    correct: "a"
  },
  {
    question: "What is the purpose of the 'filter' method in JavaScript?",
    a: "To remove elements from an array",
    b: "To add elements to the beginning of an array",
    c: "To create a new array with all elements that pass the test implemented by the provided function",
    d: "To iterate over the elements of an array and modify them",
    correct: "c"
  },
  {
    question: "What is the output of the following code snippet? console.log(Boolean('false'));",
    a: "true",
    b: "false",
    c: "TypeError",
    d: "undefined",
    correct: "a"
  },
  {
    question: "What is the purpose of the 'reduce' method in JavaScript?",
    a: "To remove elements from an array",
    b: "To execute a reducer function on each element of the array, resulting in a single output value",
    c: "To create a new array with the results of calling a provided function on every element in the calling array",
    d: "To add elements to the beginning of an array",
    correct: "b"
  },
  {
    question: "What is the output of the following code snippet? console.log(4 ** 3);",
    a: "12",
    b: "64",
    c: "81",
    d: "12",
    correct: "c"
  },
  {
    question: "What is the purpose of the 'forEach' method in JavaScript?",
    a: "To remove elements from an array",
    b: "To add elements to the beginning of an array",
    c: "To execute a provided function once for each array element",
    d: "To create a new array with the results of calling a provided function on every element in the calling array",
    correct: "c"
  }
];



let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function () {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);