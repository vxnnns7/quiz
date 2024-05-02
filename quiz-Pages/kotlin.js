const quizData = [
    {
        question: 'Which of the following is the correct way to declare a variable in Kotlin?',
            a: 'variableName = value',
            b: 'var variableName = value',
            c: 'int variableName = value',
            d: 'variableName',
        correct: 'b'
    },
    {
        question: 'What is the purpose of the "public" access modifier in Kotlin?',
            a: 'To restrict access to the class',
            b: 'To make the class accessible only within the same package',
            c: 'To make the class accessible from any other class',
            d: 'To make the class abstract',
        correct: 'c'
    },
    {
        question: 'Which of the following is NOT a valid data type in Kotlin?',
            a: 'Double',
            b: 'String',
            c: 'Char',
            d: 'Float*',
        correct: 'd'
    },
    {
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    val x = 5\n    val y = 2\n    println(x % y)\n}',
            a: '1',
            b: '2',
            c: '2.5',
            d: '3',
        correct: 'a'
    },
    {
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    val str = "Hello World!"\n    println(str.substring(6))\n}',
            a: 'World!',
            b: 'Hello',
            c: 'World!Hello',
            d: 'World',
        correct: 'a'
    },
    {
        question: 'What is the purpose of the "private" access modifier in Kotlin?',
            a: 'To restrict access to the class',
            b: 'To make the class accessible only within the same package',
            c: 'To make the class accessible from any other class',
            d: 'To restrict access to the members within the same class',
        correct: 'd'
    },
    {
        question: 'Which of the following statements is true about Kotlin interfaces?',
            a: 'Interfaces can contain implementations of methods',
            b: 'Classes can implement multiple interfaces with the same method signatures',
            c: 'Interfaces can extend multiple classes',
            d: 'Interfaces can be instantiated using the new keyword',
        correct: 'b'
    },
    {
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    val str = "Hello"\n    println(str.concat(" World"))\n}',
            a: 'Hello',
            b: 'Hello World',
            c: 'World',
            d: 'null',
        correct: 'a'
    },
    {
        question: 'Which keyword is used to prevent method overriding in Kotlin?',
            a: 'override',
            b: 'final',
            c: 'static',
            d: 'private',
        correct: 'b'
    },
    {
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    val arr = arrayOf(1, 2, 3, 4, 5)\n    println(arr.size)\n}',
            a: '5',
            b: '4',
            c: 'Compilation error',
            d: '0',
        correct: 'a'
    },
    {
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    var x = 10\n    if (x > 5) {\n        println("x is greater than 5")\n    } else {\n        println("x is less than or equal to 5")\n    }\n}',
            a: 'x is greater than 5',
            b: 'x is less than 5',
            c: 'x is less than or equal to 5',
            d: 'Compilation error',
        correct: 'a'
    },
    {
        question: 'Which of the following statements is true about Kotlin packages?',
            a: 'A package can contain only classes',
            b: 'A package can contain both classes and functions',
            c: 'A package can only be defined at the top level of a Kotlin file',
            d: 'A package can have a private visibility modifier',
        correct: 'b'
    },
    {
        question: 'What is the purpose of the "lateinit" modifier in Kotlin?',
            a: 'To specify that a variable cannot be reassigned',
            b: 'To specify that a variable will be initialized later',
            c: 'To specify that a variable cannot be accessed from outside the class',
            d: 'To specify that a variable cannot be null',
        correct: 'b'
    },
    {
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    val num: Int? = null\n    println(num ?: 0)\n}',
            a: 'null',
            b: '0',
            c: 'Compilation error',
            d: '1',
        correct: 'b'
    },
    {
        question: 'What is the purpose of the "init" block in Kotlin?',
            a: 'To define the main function',
            b: 'To initialize properties of a class',
            c: 'To handle exceptions',
            d: 'To define a companion object',
        correct: 'b'
    },
    {
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    val list = listOf(1, 2, 3, 4, 5)\n    println(list[5])\n}',
            a: '1',
            b: '5',
            c: 'IndexOutOfBoundsException',
            d: 'Compilation error',
        correct: 'c'
    },
    {
        question: 'What is the purpose of the "internal" visibility modifier in Kotlin?',
            a: 'To restrict access to the class',
            b: 'To make the class accessible only within the same package',
            c: 'To make the class accessible from any other class',
            d: 'To make the class accessible from any other class within the same module',
        correct: 'd'
    },
    {
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    val str = "Hello"\n    val result = str.removePrefix("Hel")\n    println(result)\n}',
            a: 'Hello',
            b: 'lo',
            c: 'Hel',
            d: 'Compilation error',
        correct: 'b'
    },
    {
        question: 'What is the purpose of the "sealed" modifier in Kotlin?',
            a: 'To specify that a class cannot be subclassed',
            b: 'To specify that a class cannot be instantiated',
            c: 'To restrict access to the class',
            d: 'To specify that a class can have only one instance',
        correct: 'a'
    },
    {
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    val list = listOf(1, 2, 3, 4, 5)\n    println(list.getOrElse(10) { 0 })\n}',
            a: '0',
            b: '10',
            c: '5',
            d: 'Compilation error',
        correct: 'a'
    },
    {
        question: 'What is the purpose of the "const" keyword in Kotlin?',
            a: 'To define a constant property',
            b: 'To specify that a property cannot be reassigned',
            c: 'To define a static method',
            d: 'To specify that a class cannot be subclassed',
        correct: 'a'
    },
    {
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    val str = "Hello"\n    val result = str.capitalize()\n    println(result)\n}',
            a: 'hello',
            b: 'HELLO',
            c: 'Hello',
            d: 'Compilation error',
        correct: 'c'
    },
    {
        question: 'Which of the following statements is true about Kotlin lambdas?',
            a: 'Kotlin lambdas always return a value',
            b: 'Kotlin lambdas can capture variables from the surrounding scope',
            c: 'Kotlin lambdas must have explicit return types',
            d: 'Kotlin lambdas cannot be passed as arguments to functions',
        correct: 'b'
    },
    {
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    val str = "Hello"\n    val result = str.reversed()\n    println(result)\n}',
            a: 'Hello',
            b: 'olleH',
            c: 'null',
            d: 'Compilation error',
        correct: 'b'
    },
    {
        question: 'What is the purpose of the "this" keyword in Kotlin?',
            a: 'To refer to the current instance of a class',
            b: 'To refer to the superclass of a class',
            c: 'To create a new instance of a class',
            d: 'To refer to the class itself',
        correct: 'a'
    },
    {
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    val x = 5\n    val y = 2\n    println("$x + $y = ${x + y}")\n}',
            a: '5 + 2 = 7',
            b: '7',
            c: 'Compilation error',
            d: '"5 + 2 = 7"',
        correct: 'a'
    },
    {
        question: 'What is the purpose of the "tailrec" modifier in Kotlin?',
            a: 'To specify that a function is tail-recursive',
            b: 'To specify that a function can only be called from tail positions',
            c: 'To specify that a function cannot be tail-recursive',
            d: 'To specify that a function cannot have more than one parameter',
        correct: 'a'
    },
    {
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    val str1 = "Hello"\n    val str2 = "Hello"\n    println(str1 === str2)\n}',
            a: 'true',
            b: 'false',
            c: 'Compilation error',
            d: 'null',
        correct: 'a'
    },
    {
        question: 'What is the purpose of the "lazy" keyword in Kotlin?',
            a: 'To define a property that is initialized only when accessed for the first time',
            b: 'To define a property that cannot be reassigned',
            c: 'To specify that a property cannot be null',
            d: 'To define a property that can only be accessed from within the class',
        correct: 'a'
    },
    {
        question: 'What is the output of the following code snippet?\n\nfun main() {\n    val list = mutableListOf(1, 2, 3, 4, 5)\n    list.add(6)\n    println(list.size)\n}',
            a: '6',
            b: '5',
            c: 'Compilation error',
            d: 'null',
        correct: 'a'
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