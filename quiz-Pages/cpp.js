const quizData = [{
    question: "What is the syntax for declaring a variable in C++?",
    a: "variableName = value;",
    b: "var variableName = value;",
    c: "int variableName = value;",
    d: "variableName;",
    correct: "c"
},
{
    question: "Which of the following is NOT a valid data type in C++?",
    a: "float",
    b: "string",
    c: "char",
    d: "double",
    correct: "b"
},
{
    question: "What is the purpose of the cout object in C++?",
    a: "To read input from the user",
    b: "To perform mathematical calculations",
    c: "To display output to the console",
    d: "To define custom functions",
    correct: "c"
},
{
    question: "Which symbol is used for single-line comments in C++?",
    a: "//",
    b: "--",
    c: "/* */",
    d: "##",
    correct: "a"
},
{
    question: "What is the purpose of the cin object in C++?",
    a: "To print output to the console",
    b: "To read input from the user",
    c: "To perform string operations",
    d: "To define custom functions",
    correct: "b"
},
{
    question: "Which of the following is the correct syntax to declare a pointer variable in C++?",
    a: "int ptr;",
    b: "ptr int;",
    c: "pointer int;",
    d: "int *ptr;",
    correct: "d"
},
{
    question: "What is the purpose of the sizeof() operator in C++?",
    a: "To determine the size of a variable or data type",
    b: "To perform arithmetic operations",
    c: "To read input from the user",
    d: "To define custom functions",
    correct: "a"
},
{
    question: "Which header file is used for input and output operations in C++?",
    a: "<iostream>",
    b: "<stdlib.h>",
    c: "<cmath>",
    d: "<cstring>",
    correct: "a"
},
{
    question: "What is the output of the following code snippet?\n\nint x = 5, y = 3;\nstd::cout << (x / y);",
    a: "1",
    b: "1.6667",
    c: "1.5",
    d: "1.0",
    correct: "d"
},
{
    question: "What is the output of the following code snippet?\n\nstd::string str = \"Hello\";\nstd::cout << str.length();",
    a: "5",
    b: "6",
    c: "11",
    d: "10",
    correct: "a"
},
{
    question: "Which of the following statements is true about arrays in C++?",
    a: "Arrays can hold only elements of the same data type",
    b: "Arrays can dynamically resize at runtime",
    c: "Arrays can only store a fixed number of elements",
    d: "Arrays can be initialized without specifying the size",
    correct: "c"
},
{
    question: "What is the purpose of the break statement in C++?",
    a: "To terminate the program execution",
    b: "To skip the current iteration of a loop",
    c: "To return a value from a function",
    d: "To define custom functions",
    correct: "b"
},
{
    question: "Which of the following is the correct syntax for the switch statement in C++?",
    a: "switch (expression) { case constant: statements }",
    b: "switch (expression) { default: statements }",
    c: "switch (expression) { case constant: statements default: statements }",
    d: "switch (expression) { case constant: statements; default: statements; }",
    correct: "a"
},
{
    question: "What is the purpose of the continue statement in C++?",
    a: "To terminate the program execution",
    b: "To skip the current iteration of a loop and continue with the next iteration",
    c: "To return a value from a function",
    d: "To define custom functions",
    correct: "b"
},
{
    question: "What is the output of the following code snippet?\n\nint arr[5];\nstd::cout << arr[0];",
    a: "0",
    b: "Undefined behavior",
    c: "Garbage value",
    d: "5",
    correct: "c"
}, 
{
    question: "What is the purpose of the do-while loop in C++?",
    a: "To execute a block of code repeatedly as long as a condition is true",
    b: "To execute a block of code repeatedly until a condition becomes true",
    c: "To execute a block of code once before checking the condition",
    d: "To define custom functions",
    correct: "a"
},
{
    question: "What is the purpose of the static keyword in C++?",
    a: "To define custom functions",
    b: "To declare variables that are visible only within the function they are defined",
    c: "To allocate memory dynamically",
    d: "To perform arithmetic operations",
    correct: "b"
},
{
    question: "Which of the following is true about functions in C++?",
    a: "Functions can only return a single value",
    b: "Functions cannot call other functions",
    c: "Functions can have multiple return statements",
    d: "Functions cannot have parameters",
    correct: "c"
},
{
    question: "What is the purpose of recursion in C++?",
    a: "To define custom functions",
    b: "To execute a block of code repeatedly until a condition becomes true",
    c: "To call a function from within the same function",
    d: "To allocate memory dynamically",
    correct: "c"
},
{
    question: "What is the purpose of the void data type in C++?",
    a: "To specify that a function does not return any value",
    b: "To declare variables with an unknown data type",
    c: "To define custom functions",
    d: "To perform arithmetic operations",
    correct: "a"
},
{
    question: "What is the output of the following code snippet?\n\nint x = 10;\nint *ptr = &x;\nstd::cout << *ptr;",
    a: "10",
    b: "0",
    c: "Error",
    d: "Undefined behavior",
    correct: "a"
},
{
    question: "What is the purpose of the new keyword in C++?",
    a: "To perform arithmetic operations",
    b: "To allocate memory dynamically",
    c: "To read input from the user",
    d: "To define custom functions",
    correct: "b"
},
{
    question: "What is the purpose of the delete keyword in C++?",
    a: "To perform arithmetic operations",
    b: "To deallocate memory previously allocated by new",
    c: "To read input from the user",
    d: "To define custom functions",
    correct: "b"
},
{
    question: "Which of the following is NOT a standard library function in C++?",
    a: "cin()",
    b: "cout()",
    c: "strlen()",
    d: "input()",
    correct: "d"
},
{
    question: "What is the output of the following code snippet?\n\nint x = 5;\nint *ptr = &x;\nstd::cout << ptr;",
    a: "5",
    b: "0",
    c: "Address of x",
    d: "Undefined behavior",
    correct: "c"
},
{
    question: "What is the purpose of the typedef keyword in C++?",
    a: "To perform arithmetic operations",
    b: "To define custom data types",
    c: "To read input from the user",
    d: "To declare variables with an unknown data type",
    correct: "b"
},
{
    question: "What is the output of the following code snippet?\n\nint x = 5;\nint *ptr = &x;\nstd::cout << ptr;",
    a: "5",
    b: "0",
    c: "Address of x",
    d: "Undefined behavior",
    correct: "c"
},
{
    question: "What is the purpose of the #include directive in C++?",
    a: "To perform arithmetic operations",
    b: "To include the contents of a header file",
    c: "To read input from the user",
    d: "To define custom functions",
    correct: "b"
},
{
    question: "Which of the following is true about structures in C++?",
    a: "Structures cannot contain functions",
    b: "Structures cannot contain other structures",
    c: "Structures cannot have members of different data types",
    d: "Structures can have members of different data types",
    correct: "d"
},
{
    question: "What is the purpose of the const keyword in C++?",
    a: "To define custom functions",
    b: "To declare constants",
    c: "To perform arithmetic operations",
    d: "To allocate memory dynamically",
    correct: "b"
},
// Add more questions here...
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