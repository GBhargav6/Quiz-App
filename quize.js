let quizData=[
    {
        question:"which lunguage runs in your webrowser",
        a:"java",
        b:"python",
        c:"c",
        d:"javascript",
        correct: "d",
    },
    {
        question:"what does CSS stand for",
        a:"Cenntral style sheets",
        b:"cascading style sheets",
        c:"cascading simple sheets",
        d:"cars SUVs sailboats",
        correct: "b"
    },
    {
        question:"what does HTML stand for",
        a:"Hypertext Markup Language",
        b:"Hypertext Markdoen Language",
        c:"Hyperloop Machine Language",
        d:"Helicopers Terminals Motorboats lamborginis",
        correct: "a"
    },
    {
        question:"which year was javascript launched",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"none",
        correct: "b",
    },
    
];
 let quiz=document.getElementById("quiz")
 let answerEls=document.querySelectorAll(".answer")
 let questionEl=document.getElementById("question")
 let a_text=document.getElementById("a_text")
 let b_text=document.getElementById("b_text")
 let c_text=document.getElementById("c_text")
 let d_text=document.getElementById("d_text")
 let submitBtn=document.getElementById("submit")

 let currentQuiz=0;
 let score=0;

 loadQuiz()
 function loadQuiz(){
    deselectAnswers()
    let currentQuizData=quizData[currentQuiz]
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d
 }
 function deselectAnswers(){
    answerEls.forEach(answerEl=>answerEl.checked=false)
 }
 function getSelected(){
    let answer
    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer
 }
 submitBtn.addEventListener("click",()=>{
    let answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++
        if(currentQuiz<quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML=`
            <h2>you answered ${score}/${quizData.length} question correctly</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
 })