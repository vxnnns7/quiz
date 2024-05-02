const quizData = [
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Creative Style Sheets",
        c: "Computer Style Sheets",
        d: "Colorful Style Sheets",
        correct: "a"
    },
    {
        question: "Which property is used to change the background color of an element?",
        a: "background-color",
        b: "color",
        c: "bgcolor",
        d: "background-style",
        correct: "a"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        a: "text-color",
        b: "font-color",
        c: "color",
        d: "text-style",
        correct: "c"
    },
    {
        question: "Which CSS property controls the text size?",
        a: "font-size",
        b: "text-style",
        c: "font-style",
        d: "text-size",
        correct: "a"
    },
    {
        question: "What is the correct CSS syntax for making all the <p> elements bold?",
        a: "p {font-weight:bold;}",
        b: "p {text-style:bold;}",
        c: "p {font: bold;}",
        d: "p {bold: true;}",
        correct: "a"
    },
    {
        question: "How do you display hyperlinks without an underline?",
        a: "a {underline:none;}",
        b: "a {text-decoration:none;}",
        c: "a {no-decoration:underline;}",
        d: "a {decoration:none;}",
        correct: "b"
    },
    {
        question: "Which property is used to change the font of an element?",
        a: "font-family",
        b: "font-style",
        c: "font-weight",
        d: "font-size",
        correct: "a"
    },
    {
        question: "How do you select an element with id 'demo'?",
        a: "#demo",
        b: ".demo",
        c: "demo",
        d: "*demo",
        correct: "a"
    },
    {
        question: "How do you select elements with class name 'test'?",
        a: ".test",
        b: "#test",
        c: "*test",
        d: "test",
        correct: "a"
    },
    {
        question: "How do you group selectors?",
        a: "Separate each selector with a comma",
        b: "Wrap all selectors in curly braces",
        c: "Use the & operator",
        d: "Use the * operator",
        correct: "a"
    },
    {
        question: "Which property is used to add shadows to text?",
        a: "text-shadow",
        b: "shadow",
        c: "box-shadow",
        d: "text-effect",
        correct: "a"
    },
    {
        question: "Which CSS property is used to control the space between lines of text?",
        a: "spacing",
        b: "line-height",
        c: "text-spacing",
        d: "text-line",
        correct: "b"
    },
    {
        question: "Which property is used to control the order of elements?",
        a: "order",
        b: "display-order",
        c: "element-order",
        d: "arrange",
        correct: "a"
    },
    {
        question: "Which property is used to change the width of an element?",
        a: "size",
        b: "width",
        c: "height",
        d: "dimension",
        correct: "b"
    },
    {
        question: "How do you make a list that lists its items with squares?",
        a: "list-type: square;",
        b: "list-style-type: square;",
        c: "list: square;",
        d: "list-style: square;",
        correct: "b"
    },
    {
        question: "Which property is used to set the background image of an element?",
        a: "image",
        b: "background-image",
        c: "bg-image",
        d: "background",
        correct: "b"
    },
    {
        question: "How do you make the text bold using CSS?",
        a: "font-style: bold;",
        b: "text-decoration: bold;",
        c: "font-weight: bold;",
        d: "text-style: bold;",
        correct: "c"
    },
    {
        question: "How do you select all p elements inside a div element?",
        a: "div p",
        b: "div + p",
        c: "div > p",
        d: "div ~ p",
        correct: "c"
    },
    {
        question: "Which CSS property is used to make text italic?",
        a: "font-style",
        b: "italic",
        c: "text-style",
        d: "font-italic",
        correct: "a"
    },
    {
        question: "What is the default value of the position property in CSS?",
        a: "relative",
        b: "absolute",
        c: "fixed",
        d: "static",
        correct: "d"
    },
    {
        question: "How do you make an element float to the left?",
        a: "float: left;",
        b: "align: left;",
        c: "position: left;",
        d: "align: float;",
        correct: "a"
    },
    {
        question: "How do you make text appear exactly in the middle of an element?",
        a: "text-align: center;",
        b: "align: middle;",
        c: "text-middle: center;",
        d: "align: center;",
        correct: "a"
    },
    {
        question: "Which property is used to add space outside the borders of an element?",
        a: "margin",
        b: "padding",
        c: "border-spacing",
        d: "spacing",
        correct: "a"
    },
    {
        question: "Which property is used to create rounded corners on an element?",
        a: "border-radius",
        b: "corner-radius",
        c: "border-style",
        d: "radius",
        correct: "a"
    },
    {
        question: "How do you make the text underlined?",
        a: "text-decoration: underline;",
        b: "decoration: underline;",
        c: "underline: text;",
        d: "decoration: text-underline;",
        correct: "a"
    },
    {
        question: "Which property is used to control the spacing between cells in a table?",
        a: "table-spacing",
        b: "cell-spacing",
        c: "border-spacing",
        d: "spacing",
        correct: "c"
    },
    {
        question: "How do you make each word in a text start with a capital letter?",
        a: "text-transform: capitalize;",
        b: "transform: uppercase;",
        c: "text-style: capitalize;",
        d: "style: uppercase;",
        correct: "a"
    },
    {
        question: "Which CSS property is used to set the transparency of an element?",
        a: "opacity",
        b: "transparent",
        c: "visibility",
        d: "transparency",
        correct: "a"
    },
    {
        question: "What is the correct CSS syntax for making all the <p> elements bold and red?",
        a: "p {font-weight:bold;color:red;}",
        b: "p {font-weight:bold;color:#FF0000;}",
        c: "p {font:bold;color:red;}",
        d: "p {bold:red;}",
        correct: "a"
    },
    {
        question: "Which CSS property is used to control the spacing between letters in a text?",
        a: "letter-spacing",
        b: "word-spacing",
        c: "text-spacing",
        d: "line-spacing",
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