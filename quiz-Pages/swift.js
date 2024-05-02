const quizData = [
    {
        question: 'What is Swift?',
        a: 'A programming language developed by Google',
        b: 'A programming language developed by Apple',
        c: 'A scripting language for web development',
        d: 'A database management system',
        correct: 'b'
    },
    {
        question: 'Which of the following statements is true about Optionals in Swift?',
        a: 'Optionals can only contain nil values',
        b: 'Optionals must be explicitly unwrapped to access their value',
        c: 'Optionals can represent a value that is either present or absent',
        d: 'Optionals are not supported in Swift',
        correct: 'c'
    },
    {
        question: 'What keyword is used to define a constant in Swift?',
        a: 'let',
        b: 'var',
        c: 'const',
        d: 'final',
        correct: 'a'
    },
    {
        question: 'Which data type in Swift is used to store a single character?',
        a: 'Char',
        b: 'Character',
        c: 'String',
        d: 'Byte',
        correct: 'b'
    },
    {
        question: 'What does the "guard" statement do in Swift?',
        a: 'Creates a loop',
        b: 'Unwraps an Optional value',
        c: 'Exits the current scope if a condition is not met',
        d: 'Defines a closure',
        correct: 'c'
    },
    {
        question: 'What is the purpose of an initializer in Swift?',
        a: 'To define methods',
        b: 'To allocate memory',
        c: 'To set initial values for properties',
        d: 'To declare variables',
        correct: 'c'
    },
    {
        question: 'What is a closure in Swift?',
        a: 'A control flow statement',
        b: 'A function without a name',
        c: 'A block of code that can be passed around and executed later',
        d: 'A data structure',
        correct: 'c'
    },
    {
        question: 'Which Swift keyword is used to start a loop?',
        a: 'for',
        b: 'loop',
        c: 'while',
        d: 'repeat',
        correct: 'a'
    },
    {
        question: 'What is the purpose of the "defer" keyword in Swift?',
        a: 'To execute a block of code only if a condition is true',
        b: 'To delay the execution of a block of code until the end of the current scope',
        c: 'To stop the execution of a loop',
        d: 'To define a constant',
        correct: 'b'
    },
    {
        question: 'What is the purpose of the "break" statement in Swift?',
        a: 'To exit a loop or switch statement',
        b: 'To resume execution at the next iteration of a loop',
        c: 'To jump to a specific label within a loop',
        d: 'To terminate the program',
        correct: 'a'
    },
    {
        question: 'Which Swift data type is used to store a collection of ordered values?',
        a: 'Array',
        b: 'Set',
        c: 'Dictionary',
        d: 'Tuple',
        correct: 'a'
    },
    {
        question: 'What is the purpose of the "enum" keyword in Swift?',
        a: 'To define a class',
        b: 'To define a structure',
        c: 'To define an enumeration',
        d: 'To define a protocol',
        correct: 'c'
    },
    {
        question: 'What is a protocol in Swift?',
        a: 'A collection of properties and methods that describe a particular task or functionality',
        b: 'A block of code that can be passed around and executed later',
        c: 'A keyword used to define an object',
        d: 'A special kind of class',
        correct: 'a'
    },
    {
        question: 'Which Swift keyword is used to indicate that a property or method can be overridden in a subclass?',
        a: 'override',
        b: 'virtual',
        c: 'extend',
        d: 'super',
        correct: 'a'
    },
    {
        question: 'What does the "super" keyword refer to in Swift?',
        a: 'The base class',
        b: 'The current class',
        c: 'The derived class',
        d: 'The parent class',
        correct: 'd'
    },
    {
        question: 'What is the purpose of the "extension" keyword in Swift?',
        a: 'To create a new subclass',
        b: 'To add functionality to an existing class, structure, enumeration, or protocol',
        c: 'To define a closure',
        d: 'To handle errors',
        correct: 'b'
    },
    {
        question: 'What is the syntax for creating a function in Swift?',
        a: 'func functionName() -> ReturnType { }',
        b: 'function functionName() -> ReturnType { }',
        c: 'def functionName() -> ReturnType { }',
        d: 'method functionName() -> ReturnType { }',
        correct: 'a'
    },
    {
        question: 'What is the purpose of the "inout" keyword in Swift function parameters?',
        a: 'To indicate that a parameter can be modified by the function',
        b: 'To indicate that a parameter cannot be modified by the function',
        c: 'To indicate that a parameter is optional',
        d: 'To indicate that a parameter is required',
        correct: 'a'
    },
    {
        question: 'Which Swift keyword is used to handle errors?',
        a: 'error',
        b: 'try',
        c: 'catch',
        d: 'throw',
        correct: 'b'
    },
    {
        question: 'What is the purpose of the "as" keyword in Swift?',
        a: 'To create an alias for a type',
        b: 'To cast an instance to a different type',
        c: 'To define a closure',
        d: 'To define a protocol',
        correct: 'b'
    },
    {
        question: 'What is the purpose of the "subscript" keyword in Swift?',
        a: 'To access elements of a collection using index values',
        b: 'To define a new subclass',
        c: 'To handle errors',
        d: 'To override a property or method',
        correct: 'a'
    },
    {
        question: 'What is the purpose of the "associatedtype" keyword in Swift?',
        a: 'To define an associated value for an enumeration case',
        b: 'To define a typealias for a type',
        c: 'To define a generic type constraint',
        d: 'To define an associated type for a protocol',
        correct: 'd'
    },
    {
        question: 'What is the purpose of the "mutating" keyword in Swift?',
        a: 'To indicate that a method can modify the properties of a value type',
        b: 'To indicate that a method cannot modify the properties of a value type',
        c: 'To indicate that a method can modify the properties of a reference type',
        d: 'To indicate that a method cannot modify the properties of a reference type',
        correct: 'a'
    },
    {
        question: 'Which Swift keyword is used to prevent a property from being overridden in a subclass?',
        a: 'final',
        b: 'override',
        c: 'static',
        d: 'const',
        correct: 'a'
    },
    {
        question: 'What is the purpose of the "weak" keyword in Swift?',
        a: 'To indicate that a reference to an object can become nil',
        b: 'To prevent a reference cycle in closures',
        c: 'To indicate that a reference to an object cannot be modified',
        d: 'To define a weakly referenced variable',
        correct: 'a'
    },
    {
        question: 'What is the purpose of the "unowned" keyword in Swift?',
        a: 'To indicate that a reference to an object can become nil',
        b: 'To prevent a reference cycle in closures',
        c: 'To indicate that a reference to an object cannot be modified',
        d: 'To define an unowned reference to an object',
        correct: 'd'
    },
    {
        question: 'What is the purpose of the "lazy" keyword in Swift?',
        a: 'To indicate that a property is only computed once and then cached',
        b: 'To indicate that a property is computed asynchronously',
        c: 'To define a lazy evaluation closure',
        d: 'To indicate that a property is private',
        correct: 'a'
    },
    {
        question: 'What is the purpose of the "protocol composition" in Swift?',
        a: 'To define a protocol extension',
        b: 'To define a union of multiple protocols',
        c: 'To define a type alias for a protocol',
        d: 'To define a nested protocol',
        correct: 'b'
    },
    {
        question: 'Which Swift feature is used to ensure that a piece of code is executed only once?',
        a: 'Singleton',
        b: 'Protocol composition',
        c: 'Computed property',
        d: 'Lazy initialization',
        correct: 'a'
    },
    {
        question: 'What is the purpose of the "guard let" statement in Swift?',
        a: 'To declare a new constant or variable',
        b: 'To unwrap an Optional value safely and continue execution if it contains a value',
        c: 'To define a new closure',
        d: 'To handle errors in asynchronous code',
        correct: 'b'
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