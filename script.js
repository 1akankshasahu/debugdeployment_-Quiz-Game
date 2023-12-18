const questions= [
    {
        'que': 'Which of the following is markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'Which of these elements in HTML can be used for making a text bold?',
        'a': '<a>',
        'b': '<pre>',
        'c': '<br>',
        'd': '<b>',
        'correct': 'd'
    },
    {
        'que':'Which tag do we use in HTML for inserting a line-break?',
        'a': '<a>',
        'b': '<br>',
        'c': '<b>',
        'd': '<pre>',
        'correct': 'b'
    },
    {
       'que': 'Which tag do we use to define the options present in the drop-down selection lists?',
       'a': '<list>',
        'b': '<option>',
        'c': '<dropdown>',
        'd': '<select>',
        'correct': 'c'
    }   
]
let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if (index === total){
        return endQuiz()
    }
    reset()
    const data = questions[index]
    console.log(data)
    quesBox.innerText= ` ${index+1}. ${data.que}`;
    optionInputs[0].nextElementSibling.innerText =data.a;
    optionInputs[1].nextElementSibling.innerText =data.b;
    optionInputs[2].nextElementSibling.innerText =data.c;
    optionInputs[3].nextElementSibling.innerText =data.d;
} 
const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    console.log(ans,data.correct)
    if (ans == data.correct){
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return; 
}  

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked){
                answer = input.value;
                
            }

        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () => {
    document.getElementsByClassName("main")[0].innerHTML = `
    <div class="box">
     <h1> Thank you for playing✌️</h1>
     <h2> Your Score(${right} / ${total})</h2>
     <button class="btn" onclick="location.reload()">Play Again</button>
    `
    
}

loadQuestion();
