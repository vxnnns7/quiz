const quizData = [
    {
        question: 'What does SQL stand for?',
        a: 'Structured Query Language',
        b: 'Sequential Query Language',
        c: 'System Query Language',
        d: 'Structured Question Language',
        correct: 'a'
    },
    {
        question: 'Which keyword is used to retrieve data from a SQL database?',
        a: 'FETCH',
        b: 'RETRIEVE',
        c: 'SELECT',
        d: 'GET',
        correct: 'c'
    },
    {
        question: 'Which SQL clause is used to filter rows based on a specified condition?',
        a: 'FILTER',
        b: 'HAVING',
        c: 'WHERE',
        d: 'CONDITION',
        correct: 'c'
    },
    {
        question: 'Which SQL statement is used to insert new data into a database?',
        a: 'ADD',
        b: 'INSERT',
        c: 'CREATE',
        d: 'UPDATE',
        correct: 'b'
    },
    {
        question: 'Which SQL command is used to change data in a database?',
        a: 'MODIFY',
        b: 'CHANGE',
        c: 'ALTER',
        d: 'UPDATE',
        correct: 'd'
    },
    {
        question: 'Which SQL function is used to return the current date and time in a database?',
        a: 'NOW()',
        b: 'CURRENT_DATE()',
        c: 'GETDATE()',
        d: 'DATE()',
        correct: 'a'
    },
    {
        question: 'What is the result of the SQL expression 5 + NULL?',
        a: '5',
        b: 'NULL',
        c: 'Error',
        d: '0',
        correct: 'b'
    },
    {
        question: 'Which SQL keyword is used to sort the result set in ascending order?',
        a: 'ORDER BY ASC',
        b: 'ASCENDING',
        c: 'ASC',
        d: 'SORT ASCENDING',
        correct: 'c'
    },
    {
        question: 'Which SQL operator is used to combine the result set of two or more SELECT statements?',
        a: 'UNION',
        b: 'COMBINE',
        c: 'MERGE',
        d: 'JOIN',
        correct: 'a'
    },
    {
        question: 'Which SQL command is used to delete all records from a table without removing the table itself?',
        a: 'CLEAR',
        b: 'DELETE',
        c: 'REMOVE',
        d: 'TRUNCATE',
        correct: 'd'
    },
    {
        question: 'Which SQL keyword is used to retrieve only unique values?',
        a: 'DISTINCT',
        b: 'UNIQUE',
        c: 'ONLY',
        d: 'SINGLE',
        correct: 'a'
    },
    {
        question: 'What is the purpose of the GROUP BY clause in SQL?',
        a: 'To filter rows based on a specified condition',
        b: 'To perform calculations on grouped data',
        c: 'To sort the result set',
        d: 'To join tables',
        correct: 'b'
    },
    {
        question: 'Which SQL function is used to count the number of rows in a result set?',
        a: 'COUNT()',
        b: 'SUM()',
        c: 'TOTAL()',
        d: 'ROWS()',
        correct: 'a'
    },
    {
        question: 'Which SQL command is used to change the structure of a table?',
        a: 'ALTER TABLE',
        b: 'CHANGE TABLE',
        c: 'MODIFY TABLE',
        d: 'UPDATE TABLE',
        correct: 'a'
    },
    {
        question: 'What is the primary key in a SQL table?',
        a: 'A key that uniquely identifies each row in a table',
        b: 'A key that is used for sorting data in a table',
        c: 'A key that is used to join multiple tables',
        d: 'A key that is used to index data in a table',
        correct: 'a'
    },
    {
        question: 'Which SQL command is used to retrieve data from multiple tables?',
        a: 'SELECT',
        b: 'JOIN',
        c: 'COMBINE',
        d: 'MERGE',
        correct: 'b'
    },
    {
        question: 'Which SQL clause is used to specify a condition for grouping rows when using the GROUP BY clause?',
        a: 'HAVING',
        b: 'GROUP CONDITION',
        c: 'GROUP BY CONDITION',
        d: 'WHERE',
        correct: 'a'
    },
    {
        question: 'Which SQL function is used to return the largest value of a selected column?',
        a: 'MAX()',
        b: 'LARGEST()',
        c: 'TOP()',
        d: 'BIGGEST()',
        correct: 'a'
    },
    {
        question: 'Which SQL command is used to add a new column to a table?',
        a: 'ADD COLUMN',
        b: 'ALTER TABLE',
        c: 'INSERT COLUMN',
        d: 'NEW COLUMN',
        correct: 'a'
    },
    {
        question: 'What is the result of the SQL expression 10 / 0?',
        a: 'Error',
        b: 'Infinity',
        c: '0',
        d: 'NULL',
        correct: 'a'
    },
    {
        question: 'Which SQL command is used to create a new database?',
        a: 'CREATE DATABASE',
        b: 'NEW DATABASE',
        c: 'ADD DATABASE',
        d: 'MAKE DATABASE',
        correct: 'a'
    },
    {
        question: 'What is the purpose of the WHERE clause in SQL?',
        a: 'To specify the columns to be retrieved',
        b: 'To filter rows based on a specified condition',
        c: 'To sort the result set',
        d: 'To group rows based on a specified condition',
        correct: 'b'
    },
    {
        question: 'Which SQL operator is used to specify multiple conditions in a WHERE clause?',
        a: 'OR',
        b: 'AND',
        c: 'BOTH',
        d: 'PLUS',
        correct: 'b'
    },
    {
        question: 'Which SQL keyword is used to rename a table?',
        a: 'RENAME TABLE',
        b: 'ALTER TABLE',
        c: 'CHANGE TABLE',
        d: 'RENAME',
        correct: 'a'
    },
    {
        question: 'Which SQL command is used to delete a table?',
        a: 'DELETE TABLE',
        b: 'DROP TABLE',
        c: 'REMOVE TABLE',
        d: 'DELETE',
        correct: 'b'
    },
    {
        question: 'What does the SQL statement "SELECT * FROM table_name" do?',
        a: 'Selects all columns from the table',
        b: 'Selects only the first row from the table',
        c: 'Selects the last row from the table',
        d: 'Selects a specific column from the table',
        correct: 'a'
    },
    {
       

 question: 'Which SQL command is used to modify data in a table?',
        a: 'UPDATE',
        b: 'MODIFY',
        c: 'ALTER',
        d: 'CHANGE',
        correct: 'a'
    },
    {
        question: 'What is the result of the SQL expression 5 = "5"?',
        a: 'TRUE',
        b: 'FALSE',
        c: 'ERROR',
        d: 'NULL',
        correct: 'a'
    },
    {
        question: 'Which SQL function is used to return the smallest value of a selected column?',
        a: 'MIN()',
        b: 'SMALLEST()',
        c: 'BOTTOM()',
        d: 'TINIEST()',
        correct: 'a'
    },
    {
        question: 'What is the purpose of the ORDER BY clause in SQL?',
        a: 'To filter rows based on a specified condition',
        b: 'To group rows based on a specified condition',
        c: 'To sort the result set',
        d: 'To join tables',
        correct: 'c'
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