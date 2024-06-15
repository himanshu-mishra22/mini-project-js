const questions = [
    {
        question:"Which is the larget animal in the world?",
        ans:[
            {text:"Shark", correct: false},
            {text:"Giraffe", correct: false},
            {text:"Blue whale", correct: true},
            {text:"Elephant", correct: false},
        ]
    },
    {
        question:"Which is the larget desert in the world?",
        ans:[
            {text:"Antartica", correct: true},
            {text:"Sahara", correct: false},
            {text:"Gobi", correct: false},
            {text:"Kalahari", correct: false},
        ]
    },
    {
        question:"Which is the smallest continent in the world?",
        ans:[
            {text:"Asia", correct: false},
            {text:"Australia", correct: true},
            {text:"Artic", correct: false},
            {text:"Africa", correct: false},
        ]
    },
    {
        question:"Which is the smallest country in the world?",
        ans:[
            {text:"Bhutan", correct: false},
            {text:"Nepal", correct: false},
            {text:"Sri lanka", correct: false},
            {text:"Vatican City", correct: true},
        ]
    }
];

const ques = document.getElementById("ques");
const ansBtn = document.getElementById("ansBtns");
const nxtBtn = document.getElementById("nxtBtn");

let currentQuesIdx =0;
let score = 0;

function strt(){
    currentQuesIdx =0;
    score = 0;
    nxtBtn.innerHTML = "Next";
    showQues();
}
function showQues(){
    resetState();
    let currQues = questions[currentQuesIdx];
    let quesNum = currentQuesIdx + 1;
    ques.innerHTML = quesNum+" . " + currQues.question;

    currQues.ans.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansBtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAns);
    });
}


function resetState(){
    nxtBtn.style.display = "none";
    while(ansBtn.firstChild){
        ansBtn.removeChild(ansBtn.firstChild);
    }
}

function selectAns(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(ansBtn.children).forEach(button =>{
        if(button.dataset.correct === 'true'){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nxtBtn.style.display = "block";
};

nxtBtn.addEventListener("click", ()=>{
    if(currentQuesIdx < questions.length){
        handleNxtBtn();
    }else{
        strt();
    }
});

function handleNxtBtn(){
    currentQuesIdx++;
    if(currentQuesIdx < questions.length){
        showQues();
    }else{
        showScore();
    }
};

function showScore(){
    resetState();
    ques.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nxtBtn.innerHTML = "Play Again";
    nxtBtn.style.display = "block";
}

strt();