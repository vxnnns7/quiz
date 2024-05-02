const quizData = [{
    question: "What is Java?",
    a: "A database management system",
    b: "A programming language",
    c: "An operating system",
    d: "A web browser",
    correct: "b"
},
{
    question: "Which keyword is used to define a class in Java?",
    a: "class",
    b: "struct",
    c: "interface",
    d: "void",
    correct: "a"
},
{
    question: "Which data type is used to represent whole numbers in Java?",
    a: "float",
    b: "double",
    c: "int",
    d: "char",
    correct: "c"
},
{
    question: "What is the correct way to declare a constant variable in Java?",
    a: "const int x = 10;",
    b: "final int x = 10;",
    c: "var x = 10;",
    d: "let x = 10;",
    correct: "b"
},
{
    question: "Which operator is used to compare two values in Java?",
    a: "==",
    b: "!=",
    c: "<>",
    d: "><",
    correct: "a"
},
{
    question: "What is the output of the following code snippet?\n\nSystem.out.println(5 + 3 + \"Java\");",
    a: "8",
    b: "5 + 3 + \"Java\"",
    c: "8Java",
    d: "53Java",
    correct: "c"
},
{
    question: "Which loop is guaranteed to execute at least one time in Java?",
    a: "while loop",
    b: "do-while loop",
    c: "for loop",
    d: "foreach loop",
    correct: "b"
},
{
    question: "What is the purpose of the break statement in Java?",
    a: "To terminate the program execution",
    b: "To skip the current iteration of a loop",
    c: "To return a value from a function",
    d: "To define custom functions",
    correct: "b"
},
{
    question: "Which keyword is used to define a method in Java?",
    a: "method",
    b: "define",
    c: "function",
    d: "void",
    correct: "d"
},
{
    question: "What is the output of the following code snippet?\n\nint x = 5;\nint y = x++;\nSystem.out.println(y);",
    a: "5",
    b: "6",
    c: "4",
    d: "Undefined",
    correct: "a"
},
{
    question: "Which of the following is NOT a valid access modifier in Java?",
    a: "public",
    b: "protected",
    c: "private",
    d: "global",
    correct: "d"
},
{
    question: "What is the correct way to create an object of a class in Java?",
    a: "new MyClass;",
    b: "MyClass obj = new();",
    c: "MyClass obj = new MyClass();",
    d: "MyClass obj = MyClass();",
    correct: "c"
},
{
    question: "What does the keyword 'static' mean in Java?",
    a: "The method can be called without creating an instance of the class",
    b: "The method can only be accessed by other methods in the same class",
    c: "The method cannot be overridden",
    d: "The method is not accessible outside the class",
    correct: "a"
},
{
    question: "What is the purpose of the 'this' keyword in Java?",
    a: "To refer to the current object",
    b: "To create a new object",
    c: "To call a method in another class",
    d: "To declare a constant",
    correct: "a"
},
{
    question: "Which keyword is used to prevent a method from being overridden in Java?",
    a: "override",
    b: "final",
    c: "static",
    d: "private",
    correct: "b"
},
{
    question: "What is the purpose of the 'super' keyword in Java?",
    a: "To call the superclass constructor",
    b: "To refer to the current object",
    c: "To declare a constant",
    d: "To prevent method overriding",
    correct: "a"
},
{
    question: "Which statement is used to exit a loop in Java?",
    a: "break",
    b: "exit",
    c: "return",
    d: "continue",
    correct: "a"
},
{
    question: "Which data structure is used to store key-value pairs in Java?",
    a: "Array",
    b: "List",
    c: "Map",
    d: "Set",
    correct: "c"
},
{
    question: "What is the purpose of the 'implements' keyword in Java?",
    a: "To implement an interface",
    b: "To inherit from a superclass",
    c: "To create a new class",
    d: "To declare a constant",
    correct: "a"
},
{
    question: "What is the correct way to declare a multi-dimensional array in Java?",
    a: "int[] array;",
    b: "int[][] array;",
    c: "int array[];",
    d: "array[][] int;",
    correct: "b"
},
{
    question: "What is the output of the following code snippet?\n\nString str1 = \"hello\";\nString str2 = \"hello\";\nSystem.out.println(str1 == str2);",
    a: "true",
    b: "false",
    c: "Compilation error",
    d: "Runtime error",
    correct: "a"
},
{
    question: "Which of the following is NOT a valid Java identifier?",
    a: "my_variable",
    b: "_myVariable",
    c: "3myVariable",
    d: "myVariable_",
    correct: "c"
},
{
    question: "What is the output of the following code snippet?\n\nString str = \"Java\";\nSystem.out.println(str.substring(1, 3));",
    a: "Jav",
    b: "ava",
    c: "va",
    d: "av",
    correct: "c"
},
{
    question: "Which Java keyword is used to create a new instance of a class?",
    a: "instance",
    b: "create",
    c: "new",
    d: "allocate",
    correct: "c"
},
{
    question: "What is the output of the following code snippet?\n\nint x = 10;\nSystem.out.println(x > 5 ? \"Yes\" : \"No\");",
    a: "Yes",
    b: "No",
    c: "True",
    d: "False",
    correct: "a"
},
{
    question: "What is the purpose of the 'extends' keyword in Java?",
    a: "To extend the functionality of a superclass",
   

 b: "To implement an interface",
    c: "To create a new class",
    d: "To declare a constant",
    correct: "a"
},
{
    question: "Which Java keyword is used to prevent a variable from being modified?",
    a: "final",
    b: "const",
    c: "static",
    d: "immutable",
    correct: "a"
},
{
    question: "What is the output of the following code snippet?\n\nint x = 5;\nSystem.out.println(x++);",
    a: "5",
    b: "6",
    c: "4",
    d: "Undefined",
    correct: "a"
},
{
    question: "Which of the following is NOT a valid Java data type?",
    a: "boolean",
    b: "string",
    c: "byte",
    d: "double",
    correct: "b"
},
{
    question: "What is the output of the following code snippet?\n\nint[] arr = {1, 2, 3, 4, 5};\nfor (int i = 0; i < arr.length; i++) {\n    System.out.print(arr[i] + \" \");\n}",
    a: "1 2 3 4 5",
    b: "5 4 3 2 1",
    c: "0 1 2 3 4",
    d: "Error",
    correct: "a"
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