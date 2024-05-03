const quizData = [
    {
        question: 'What does JSX stand for in React?',
        a: 'JavaScript XML',
        b: 'JavaScript Extensible',
        c: 'JavaScript Xcode',
        d: 'Java Syntax Extension',
        correct: 'a'
    },
    {
        question: 'Which lifecycle method is invoked immediately after a component is inserted into the DOM?',
        a: 'componentDidMount',
        b: 'componentWillMount',
        c: 'componentDidUpdate',
        d: 'componentWillReceiveProps',
        correct: 'a'
    },
    {
        question: 'What is React?',
        a: 'A framework for building user interfaces',
        b: 'A programming language',
        c: 'A JavaScript library for building user interfaces',
        d: 'A tool for server-side rendering',
        correct: 'c'
    },
    {
        question: 'Which of the following is used to pass data to a component in React?',
        a: 'props',
        b: 'state',
        c: 'setData',
        d: 'setState',
        correct: 'a'
    },
    {
        question: 'In React, what is the purpose of the render() method?',
        a: 'To update the state of the component',
        b: 'To render the component to the DOM',
        c: 'To initialize the component',
        d: 'To handle user events',
        correct: 'b'
    },
    {
        question: 'What is the default port number for React development server?',
        a: '3000',
        b: '8080',
        c: '5000',
        d: '4000',
        correct: 'a'
    },
    {
        question: 'Which of the following is NOT a valid lifecycle method in React?',
        a: 'componentDidUpdate',
        b: 'componentWillUnMount',
        c: 'componentShouldUpdate',
        d: 'componentWillReceiveProps',
        correct: 'c'
    },
    {
        question: 'What is the purpose of propTypes in React?',
        a: 'To validate props',
        b: 'To define default props',
        c: 'To specify the type of props',
        d: 'All of the above',
        correct: 'd'
    },
    {
        question: 'Which method is used to change the state in React?',
        a: 'setState()',
        b: 'changeState()',
        c: 'updateState()',
        d: 'modifyState()',
        correct: 'a'
    },
    {
        question: 'What is React Router?',
        a: 'A built-in feature of React for routing',
        b: 'A separate library for routing in React',
        c: 'A method for server-side rendering in React',
        d: 'A tool for state management in React',
        correct: 'b'
    },
    {
        question: 'What is the purpose of the key attribute in React lists?',
        a: 'To specify a unique identifier for each list item',
        b: 'To define the order of list items',
        c: 'To filter the list items',
        d: 'To style the list items',
        correct: 'a'
    },
    {
        question: 'What is the virtual DOM in React?',
        a: 'A representation of the actual DOM in memory',
        b: 'A separate DOM used for server-side rendering',
        c: 'A method for creating dynamic DOM elements',
        d: 'A component for displaying virtual elements',
        correct: 'a'
    },
    {
        question: 'Which of the following is NOT a valid way to define a component in React?',
        a: 'Class component',
        b: 'Function component',
        c: 'Stateless component',
        d: 'Element component',
        correct: 'd'
    },
    {
        question: 'What is the purpose of the ref attribute in React?',
        a: 'To reference another component',
        b: 'To define a reference to a DOM element',
        c: 'To set the default props of a component',
        d: 'To render conditional content',
        correct: 'b'
    },
    {
        question: 'What is the purpose of the shouldComponentUpdate() method in React?',
        a: 'To update the component state',
        b: 'To render the component to the DOM',
        c: 'To determine if the component should re-render',
        d: 'To handle user input events',
        correct: 'c'
    },
    {
        question: 'Which of the following is used to handle forms in React?',
        a: 'onChange',
        b: 'onSubmit',
        c: 'onClick',
        d: 'onFormSubmit',
        correct: 'b'
    },
    {
        question: 'What is the purpose of the dangerouslySetInnerHTML attribute in React?',
        a: 'To set the HTML content of a component',
        b: 'To render HTML elements dynamically',
        c: 'To prevent XSS attacks',
        d: 'To escape HTML characters',
        correct: 'a'
    },
    {
        question: 'What is the purpose of the componentDidCatch() method in React?',
        a: 'To catch errors during component rendering',
        b: 'To update the component state',
        c: 'To handle user input events',
        d: 'To render the component to the DOM',
        correct: 'a'
    },
    {
        question: 'What is the purpose of the static keyword in React?',
        a: 'To define static methods for a component',
        b: 'To create static HTML elements',
        c: 'To prevent re-rendering of a component',
        d: 'To set static props for a component',
        correct: 'a'
    },
    {
        question: 'What is the purpose of the setState() method in React?',
        a: 'To update the component state',
        b: 'To render the component to the DOM',
        c: 'To define the initial state of a component',
        d: 'To handle user input events',
        correct: 'a'
    },
    {
        question: 'Which of the following is NOT a way to conditionally render components in React?',
        a: 'Using the && operator',
        b: 'Using the ? : operator',
        c: 'Using the if-else statement',
        d: 'Using the switch statement',
        correct: 'd'
    },
    {
        question: 'What is the purpose of the componentDidMount() method in React?',
        a: 'To update the component state',
        b: 'To render the component to the DOM',
        c: 'To initialize the component',
        d: 'To handle user input events',
        correct: 'c'
    },
    {
        question: 'What is the purpose of the componentWillUnmount() method in React?',
        a: 'To update the component state',
        b: 'To render the component to the DOM',
        c: 'To initialize the component',
        d: 'To perform cleanup before the component is removed',
        correct: 'd'
    },
    {
        question: 'What is the purpose of the componentWillMount() method in React?',
        a: 'To update the component state',
        b: 'To render thecomponent to the DOM',
        c: 'To initialize the component',
        d: 'To handle user input events',
        correct: 'c'
    },
    {
        question: 'What is the purpose of the componentWillReceiveProps() method in React?',
        a: 'To update the component state',
        b: 'To render the component to the DOM',
        c: 'To initialize the component',
        d: 'To update the component state based on new props',
        correct: 'd'
    },
    {
        question: 'What is the purpose of the componentDidUpdate() method in React?',
        a: 'To update the component state',
        b: 'To render the component to the DOM',
        c: 'To initialize the component',
        d: 'To perform actions after the component is updated',
        correct: 'd'
    },
    {
        question: 'What is the purpose of the componentDidUpdate() method in React?',
        a: 'To update the component state',
        b: 'To render the component to the DOM',
        c: 'To initialize the component',
        d: 'To perform actions after the component is updated',
        correct: 'd'
    },
    {
        question: 'What is the purpose of the shouldComponentUpdate() method in React?',
        a: 'To update the component state',
        b: 'To render the component to the DOM',
        c: 'To determine if the component should re-render',
        d: 'To handle user input events',
        correct: 'c'
    },
    {
        question: 'What is the purpose of the componentDidCatch() method in React?',
        a: 'To catch errors during component rendering',
        b: 'To update the component state',
        c: 'To handle user input events',
        d: 'To render the component to the DOM',
        correct: 'a'
    },
    {
        question: 'Which of the following is used to handle forms in React?',
        a: 'onChange',
        b: 'onSubmit',
        c: 'onClick',
        d: 'onFormSubmit',
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