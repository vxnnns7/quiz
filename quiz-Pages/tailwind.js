
const quizData = [
    {
        question: 'What is Tailwind CSS?',
        a: 'A JavaScript framework',
        b: 'A CSS preprocessor',
        c: 'A utility-first CSS framework',
        d: 'A server-side rendering library',
        correct: 'c'
    },
    {
        question: 'Which utility class is used to set the font size in Tailwind CSS?',
        a: 'text-size',
        b: 'font-size',
        c: 'text-xl',
        d: 'text-font',
        correct: 'c'
    },
    {
        question: 'What does the utility class "p-4" do in Tailwind CSS?',
        a: 'Sets padding to 4px',
        b: 'Sets padding to 16px',
        c: 'Sets padding to 8px',
        d: 'Sets padding to 20px',
        correct: 'b'
    },
    {
        question: 'Which Tailwind CSS utility class is used to set the background color?',
        a: 'bg-color',
        b: 'bg-background',
        c: 'bg-gray-500',
        d: 'bg-primary',
        correct: 'c'
    },
    {
        question: 'How do you add a border to an element in Tailwind CSS?',
        a: 'Using the "border" utility class',
        b: 'Using the "border-style" utility class',
        c: 'Using the "border-width" utility class',
        d: 'Using the "border-color" utility class',
        correct: 'a'
    },
    {
        question: 'Which utility class is used to create rounded corners in Tailwind CSS?',
        a: 'rounded-corners',
        b: 'rounded',
        c: 'border-radius',
        d: 'rounded-md',
        correct: 'd'
    },
    {
        question: 'What is the purpose of the "flex" utility class in Tailwind CSS?',
        a: 'To apply flexbox properties',
        b: 'To set the font weight',
        c: 'To adjust the line height',
        d: 'To create text shadows',
        correct: 'a'
    },
    {
        question: 'Which Tailwind CSS class is used to hide an element visually?',
        a: 'hidden',
        b: 'invisible',
        c: 'hide',
        d: 'display-none',
        correct: 'a'
    },
    {
        question: 'How do you center an element horizontally in Tailwind CSS?',
        a: 'Using the "text-center" utility class',
        b: 'Using the "align-center" utility class',
        c: 'Using the "justify-center" utility class',
        d: 'Using the "center-x" utility class',
        correct: 'c'
    },
    {
        question: 'What is the purpose of the "hover" prefix in Tailwind CSS?',
        a: 'To apply styles only when an element is in a hovered state',
        b: 'To apply styles only when an element is focused',
        c: 'To apply styles only when an element is active',
        d: 'To apply styles only when an element is visited',
        correct: 'a'
    },
    {
        question: 'Which Tailwind CSS class is used to set the width of an element?',
        a: 'w-size',
        b: 'width',
        c: 'w-full',
        d: 'width-full',
        correct: 'c'
    },
    {
        question: 'What is the purpose of the "transition" utility class in Tailwind CSS?',
        a: 'To create smooth transitions between different states',
        b: 'To apply a transition effect to text',
        c: 'To adjust the transition timing function',
        d: 'To transition between different pages',
        correct: 'a'
    },
    {
        question: 'Which utility class is used to set the opacity of an element in Tailwind CSS?',
        a: 'opacity',
        b: 'opacity-50',
        c: 'opacity-full',
        d: 'transparent',
        correct: 'a'
    },
    {
        question: 'How do you add a shadow to an element in Tailwind CSS?',
        a: 'Using the "shadow" utility class',
        b: 'Using the "box-shadow" utility class',
        c: 'Using the "text-shadow" utility class',
        d: 'Using the "drop-shadow" utility class',
        correct: 'd'
    },
    {
        question: 'What does the "cursor-pointer" utility class do in Tailwind CSS?',
        a: 'Changes the cursor to a pointer when hovering over the element',
        b: 'Hides the cursor',
        c: 'Adds a pointer icon to the element',
        d: 'Applies a shadow effect to the cursor',
        correct: 'a'
    },
    {
        question: 'Which Tailwind CSS class is used to set the height of an element?',
        a: 'h-height',
        b: 'height',
        c: 'h-full',
        d: 'height-full',
        correct: 'b'
    },
    {
        question: 'What is the purpose of the "z-10" utility class in Tailwind CSS?',
        a: 'To set the z-index of an element to 10',
        b: 'To create a zoom effect',
        c: 'To add a background blur',
        d: 'To adjust the zoom level of an element',
        correct: 'a'
    },
    {
        question: 'Which Tailwind CSS class is used to set the margin on the top and bottom of an element?',
        a: 'm-x',
        b: 'm-y',
        c: 'm-tb',
        d: 'm-xy',
        correct: 'b'
    },
    {
        question: 'What does the "uppercase" utility class do in Tailwind CSS?',
        a: 'Converts text to uppercase',
        b: 'Sets the text alignment to uppercase',
        c: 'Adds an underline to the text',
        d: 'Changes the font to uppercase',
        correct: 'a'
    },
    {
        question: 'Which utility class is used to set the padding on the left side of an element?',
        a: 'p-l',
        b: 'p-x',
        c: 'p-lr',
        d: 'p-lx',
        correct: 'b'
    },
    {
        question: 'What is the purpose of the "border-b" utility class in Tailwind CSS?',
        a: 'To add a border to the bottom of an element',
        b: 'To add a border to the left side of an element',
        c: 'To add a border to the right side of an element',
        d: 'To add a border to the top of an element',
        correct: 'a'
    },
    {
        question: 'Which Tailwind CSS class is used to set the font weight?',
        a: 'font-weight',
        b: 'font-bold',
        c: 'bold',
        d: 'fw-bold',
        correct: 'b'
    },
    {
        question: 'What is the purpose of the "hover:bg-gray-200" utility class in Tailwind CSS?',
        a: 'To apply a gray background color to an element only when it is hovered over',
        b: 'To apply a gray background color to an element only when it is focused',
        c: 'To apply a gray background color to an element only when it is active',
        d: 'To apply a gray background color to an element only when it is visited',
        correct: 'a'
    },    
    {
        question: 'What is the purpose of the "bg-opacity-50"utility class in Tailwind CSS?',
        a: 'To set the background color to black with 50% opacity',
        b: 'To set the background color to white with 50% opacity',
        c: 'To adjust the background opacity to 50%',
        d: 'To set the background color to transparent with 50% opacity',
        correct: 'c'
    },
    {
        question: 'Which utility class is used to set the text color?',
        a: 'color',
        b: 'text-color',
        c: 'text-white',
        d: 'text-black',
        correct: 'c'
    },
    {
        question: 'What is the purpose of the "divide-x" utility class in Tailwind CSS?',
        a: 'To add a vertical divider between flexbox items',
        b: 'To add a horizontal divider between flexbox items',
        c: 'To add a divider to the left side of an element',
        d: 'To add a divider to the right side of an element',
        correct: 'a'
    },
    {
        question: 'Which Tailwind CSS class is used to set the line height?',
        a: 'line-height',
        b: 'leading',
        c: 'lh',
        d: 'line',
        correct: 'b'
    },
    {
        question: 'What does the "truncate" utility class do in Tailwind CSS?',
        a: 'Truncates text that is too long to fit within the container',
        b: 'Adds ellipsis (...) to text that is too long to fit within the container',
        c: 'Prevents text from wrapping to the next line',
        d: 'Adds a fade effect to overflowing text',
        correct: 'b'
    },
    {
        question: 'Which Tailwind CSS class is used to set the opacity to fully transparent?',
        a: 'opacity-0',
        b: 'opacity-none',
        c: 'transparent',
        d: 'opacity-full',
        correct: 'a'
    },
    {
        question: 'What is the purpose of the "from-blue-500" utility class in Tailwind CSS?',
        a: 'To set the background color to blue',
        b: 'To create a linear gradient background starting from blue',
        c: 'To set the text color to blue',
        d: 'To set the border color to blue',
        correct: 'b'
    }
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