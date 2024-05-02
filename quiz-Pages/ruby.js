const quizdata = [
  {
    question: 'What is Ruby?',
    a: 'A gemstone',
    b: 'A programming language',
    c: 'A web framework',
    d: 'A database management system',
    correct: 'b'
  },
  {
    question: 'Which keyword is used to define a class in Ruby?',
    a: 'class',
    b: 'def',
    c: 'function',
    d: 'method',
    correct: 'a'
  },
  {
    question: 'What does IRB stand for in Ruby?',
    a: 'Interactive Ruby',
    b: 'Integrated Ruby Build',
    c: 'Internal Ruby Binary',
    d: 'Integrated Ruby Browser',
    correct: 'a'
  },
  {
    question: 'Which symbol is used to denote a comment in Ruby?',
    a: '//',
    b: '#',
    c: '--',
    d: '/* */',
    correct: 'b'
  },
  {
    question: 'What is the output of "puts 5 + 3" in Ruby?',
    a: '8',
    b: '5 + 3',
    c: '53',
    d: 'Error',
    correct: 'a'
  },
  {
    question: 'Which method is used to get user input in Ruby?',
    a: 'input()',
    b: 'getInput()',
    c: 'gets()',
    d: 'read()',
    correct: 'c'
  },
  {
    question: 'What is the result of "puts 10 / 3" in Ruby?',
    a: '3',
    b: '3.33',
    c: '10/3',
    d: 'Error',
    correct: 'a'
  },
  {
    question: 'Which of the following is NOT a valid data type in Ruby?',
    a: 'Integer',
    b: 'String',
    c: 'Character',
    d: 'Array',
    correct: 'c'
  },
  {
    question: 'What does the .each method do in Ruby?',
    a: 'Iterates over each element of an array',
    b: 'Performs a loop',
    c: 'Returns the first element of an array',
    d: 'None of the above',
    correct: 'a'
  },
  {
    question: 'What is the result of "puts "hello".capitalize" in Ruby?',
    a: 'Hello',
    b: 'HELLO',
    c: 'hello',
    d: 'Error',
    correct: 'a'
  },
  {
    question: 'What is the purpose of the .length method in Ruby?',
    a: 'To return the length of a string',
    b: 'To reverse a string',
    c: 'To capitalize a string',
    d: 'To convert a string to uppercase',
    correct: 'a'
  },
  {
    question: 'What is the output of "puts "ruby" * 3" in Ruby?',
    a: 'ruby',
    b: 'rubyrubyruby',
    c: '3',
    d: 'Error',
    correct: 'b'
  },
  {
    question: 'What does the .sort method do in Ruby?',
    a: 'Sorts elements in ascending order',
    b: 'Sorts elements in descending order',
    c: 'Reverses the order of elements',
    d: 'None of the above',
    correct: 'a'
  },
  {
    question: 'Which of the following is NOT a valid way to define a string in Ruby?',
    a: '"Hello, World!"',
    b: "'Hello, World!'",
    c: "puts 'Hello, World!'",
    d: '"""Hello, World!"""',
    correct: 'c'
  },
  {
    question: 'What is the result of "puts 5 == 5.0" in Ruby?',
    a: 'true',
    b: 'false',
    c: 'Error',
    d: 'TypeError',
    correct: 'a'
  },
  {
    question: 'What does the .times method do in Ruby?',
    a: 'Performs a loop a specified number of times',
    b: 'Multiplies two numbers',
    c: 'Returns the current time',
    d: 'None of the above',
    correct: 'a'
  },
  {
    question: 'What is the purpose of the .map method in Ruby?',
    a: 'Transforms each element of an array',
    b: 'Performs a loop',
    c: 'Returns the first element of an array',
    d: 'None of the above',
    correct: 'a'
  },
  {
    question: 'What is the output of "puts [1, 2, 3].join(", ")" in Ruby?',
    a: '1, 2, 3',
    b: '123',
    c: '1 2 3',
    d: 'Error',
    correct: 'a'
  },
  {
    question: 'What is the purpose of the .include? method in Ruby?',
    a: 'Checks if an element is included in an array',
    b: 'Includes a module in a class',
    c: 'Checks if a file exists',
    d: 'None of the above',
    correct: 'a'
  },
  {
    question: 'What is the result of "puts "hello world".split(" ")" in Ruby?',
    a: '["hello", "world"]',
    b: '["hello world"]',
    c: '"hello world"',
    d: 'Error',
    correct: 'a'
  },
  {
    question: 'What is the purpose of the .reverse method in Ruby?',
    a: 'Reverses the order of elements in an array',
    b: 'Reverses the characters in a string',
    c: 'Returns the last element of an array',
    d: 'None of the above',
    correct: 'a'
  },
  {
    question: 'What is the output of "puts (1..5).to_a" in Ruby?',
    a: '[1, 2, 3, 4, 5]',
    b: '(1..5)',
    c: '1 2 3 4 5',
    d: 'Error',
    correct: 'a'
  },
  {
    question: 'What is the purpose of the .uniq method in Ruby?',
    a: 'Removes duplicate elements from an array',
    b: 'Returns unique elements from an array',
    c: 'Returns the length of an array',
    d: 'None of the above',
    correct: 'a'
  },
  {
    question: 'What is the result of "puts 5 % 2" in Ruby?',
    a: '2.5',
    b: '3',
    c: '2',
    d: 'Error',
    correct: 'c'
  },
  {
    question: 'What is the purpose of the .gsub method in Ruby?',
    a: 'Replaces a substring in a string with another substring',
   

 b: 'Adds a substring to the beginning of a string',
    c: 'Removes a substring from a string',
    d: 'None of the above',
    correct: 'a'
  },
  {
    question: 'What is the output of "puts 1 + 1 == 2 && 2 + 2 == 4" in Ruby?',
    a: 'true',
    b: 'false',
    c: 'Error',
    d: 'TypeError',
    correct: 'a'
  },
  {
    question: 'What is the purpose of the .compact method in Ruby?',
    a: 'Removes nil elements from an array',
    b: 'Removes empty elements from an array',
    c: 'Removes duplicate elements from an array',
    d: 'None of the above',
    correct: 'a'
  },
  {
    question: 'What is the result of "puts 3 ** 2" in Ruby?',
    a: '9',
    b: '6',
    c: '32',
    d: 'Error',
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