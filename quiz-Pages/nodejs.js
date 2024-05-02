const quizData = [
    {
        question: 'What is Node.js?',
            a: 'A frontend framework',
            b: 'A server-side JavaScript runtime',
            c: 'A relational database',
            d: 'A programming language',
        correct: 'b'
    },
    {
        question: 'Which event-driven architecture is used by Node.js?',
            a: 'Observer pattern',
            b: 'Pub/Sub pattern',
            c: 'Singleton pattern',
            d: 'Factory pattern',
        correct: 'b'
    },
    {
        question: 'What is npm?',
            a: 'Node Package Manager',
            b: 'Node Programming Module',
            c: 'Node Package Module',
            d: 'Node Project Manager',
        correct: 'a'
    },
    {
        question: 'Which built-in module is used to create a web server in Node.js?',
            a: 'http',
            b: 'fs',
            c: 'path',
            d: 'net',
        correct: 'a'
    },
    {
        question: 'What is the purpose of package.json in a Node.js application?',
            a: 'To store the application code',
            b: 'To manage project dependencies and configurations',
            c: 'To define routing rules',
            d: 'To handle database connections',
        correct: 'b'
    },
    {
        question: 'What is the purpose of require() function in Node.js?',
            a: 'To define variables',
            b: 'To include external modules',
            c: 'To handle HTTP requests',
            d: 'To create event listeners',
        correct: 'b'
    },
    {
        question: 'What is the purpose of module.exports in Node.js?',
            a: 'To export global variables',
            b: 'To import external modules',
            c: 'To export functions or objects from a module',
            d: 'To define routing rules',
        correct
    },
    {
        question: 'Which command is used to install dependencies listed in package.json?',
            a: 'npm install',
            b: 'npm init',
            c: 'npm start',
            d: 'npm run build',
        correct
    },
    {
        question: 'What is the purpose of the fs module in Node.js?',
            a: 'To create a web server',
            b: 'To handle file system operations',
            c: 'To perform HTTP requests',
            d: 'To manage database connections',
        correct
    },
    {
        question: 'What is the purpose of process.argv in Node.js?',
            a: 'To store command line arguments',
            b: 'To access environment variables',
            c: 'To execute shell commands',
            d: 'To manage child processes',
        correct: 'a'
    },
    {
        question: 'Which method is used to handle asynchronous operations in Node.js?',
            a: 'sync()',
            b: 'await()',
            c: 'async()',
            d: 'callback()',
        correct: 'd'
    },
    {
        question: 'What is the purpose of EventEmitter in Node.js?',
            a: 'To handle HTTP requests',
            b: 'To manage database connections',
            c: 'To implement observer pattern for event-driven architecture',
            d: 'To define routing rules',
        correct: 'c'
    },
    {
        question: 'Which tool is used to manage Node.js processes in production?',
            a: 'npm',
            b: 'nodemon',
            c: 'PM2',
            d: 'Webpack',
        correct: 'c'
    },
    {
        question: 'What is the purpose of Buffer in Node.js?',
            a: 'To handle streams of data',
            b: 'To store binary data',
            c: 'To manage database connections',
            d: 'To define routing rules',
        correct: 'b'
    },
    {
        question: 'Which module is used to handle streams in Node.js?',
            a: 'http',
            b: 'fs',
            c: 'stream',
            d: 'net',
        correct: 'c'
    },
    {
        question: 'What is the purpose of util module in Node.js?',
            a: 'To handle HTTP requests',
            b: 'To manage database connections',
            c: 'To provide utility functions',
            d: 'To define routing rules',
        correct: 'c'
    },
    {
        question: 'Which module is used to handle child processes in Node.js?',
            a: 'http',
            b: 'child_process',
            c: 'process',
            d: 'net',
        correct: 'b'
    },
    {
        question: 'What is the purpose of global object in Node.js?',
            a: 'To handle HTTP requests',
            b: 'To manage database connections',
            c: 'To provide global variables and functions',
            d: 'To define routing rules',
        correct: 'c'
    },
    {
        question: 'Which version of JavaScript is supported by Node.js?',
            a: 'ES5',
            b: 'ES6',
            c: 'ES7',
            d: 'ES8',
        correct: 'b'
    },
    {
        question: 'What is the purpose of crypto module in Node.js?',
            a: 'To handle HTTP requests',
            b: 'To manage database connections',
            c: 'To provide cryptographic functionality',
            d: 'To define routing rules',
        correct: 'c'
    },
    {
        question: 'What is the purpose of dns module in Node.js?',
            a: 'To handle HTTP requests',
            b: 'To manage database connections',
            c: 'To perform DNS lookups',
            d: 'To define routing rules',
        correct: 'c'
    },
    {
        question: 'What is the purpose of cluster module in Node.js?',
            a: 'To handle HTTP requests',
            b: 'To manage multiple instances of a Node.js process',
            c: 'To manage database connections',
            d: 'To define routing rules',
        correct: 'b'
    },
    {
        question: 'What is the purpose of readline module in Node.js?',
            a: 'To handle HTTP requests',
            b: 'To manage database connections',
            c: 'To read input from the command line',
            d: 'To define routing rules',
        correct: 'c'
    },
    {
        question: 'What is the purpose of timers module in Node.js?',
            a: 'To handle HTTP requests',
            b: 'To manage database connections',
            c: 'To schedule tasks to be executed in the future',
            d: 'To define routing rules',
            correct: 'c'
    },
    {
        question: 'Which event is emitted when an uncaught JavaScript exception occurs?',
            a: 'error',
            b: 'exception',
            c: 'uncaughtException',
            d: 'unhandledRejection',
            correct: 'c'
    },
    {
        question: 'What is the purpose of os module in Node.js?',
            a: 'To handle HTTP requests',
            b: 'To provide operating system-related utility methods',
            c: 'To manage database connections',
            d: 'To define routing rules',
        correct: 'b'
    },
    {
        question: 'What is the purpose of url module in Node.js?',
            a: 'To handle HTTP requests',
            b: 'To manage database connections',
            c: 'To parse URL strings',
            d: 'To define routing rules',
        correct: 'c'
    },
    {
        question: 'What is the purpose of zlib module in Node.js?',
            a: 'To handle HTTP requests',
            b: 'To manage database connections',
            c: 'To provide compression and decompression functionality',
            d: 'To define routing rules',
        correct: 'c'
    },
    {
        question: 'Which method is used to exit from a Node.js process?',
            a: 'exit()',
            b: 'terminate()',
            c: 'end()',
            d: 'stop()',
        correct: 'a'
    },
    {
        question: 'What is the purpose of util.promisify() in Node.js?',
            a: 'To handle HTTP requests',
            b: 'To convert callback-based functions into Promise-based functions',
            c: 'To manage database connections',
            d: 'To define routing rules',
        correct: 'b'
    },
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