const questions = [
    {
        question: "Chi ha scritto il racconto 'Canto di Natale'?",
        options: ["Charles Dickens", "Jane Austen", "Victor Hugo", "Mark Twain"],
        correct: 0
    },
    {
        question: "Quale paese ha iniziato la tradizione dell'albero di Natale?",
        options: ["Germania", "Francia", "Norvegia", "Stati Uniti"],
        correct: 0
    },
    {
        question: "Quando \u00e8 nato il Babbo Natale moderno come lo conosciamo oggi?",
        options: ["1820", "1931", "1850", "1900"],
        correct: 1
    },
    {
        question: "Chi ha contribuito alla creazione dell'immagine moderna di Babbo Natale?",
        options: ["Un pubblicitario della Coca Cola", "Charles Dickens", "Walt Disney", "Un artista francese"],
        correct: 0
    },
    {
        question: "Qual \u00e8 il collegamento tra Babbo Natale e il camino?",
        options: [
            "Santa Claus vive vicino a un camino magico",
            "\u00c8 stato il modo scelto per consegnare doni a tre ragazze povere",
            "Rappresenta il calore del Natale",
            "Simbolizza il passaggio tra i mondi"
        ],
        correct: 1
    },
    {
        question: "Qual \u00e8 stata la prima canzone cantata nello spazio?",
        options: ["Silent Night", "Jingle Bells", "White Christmas", "Deck the Halls"],
        correct: 1
    },
    {
        question: "Qual \u00e8 stato il regalo di Natale pi\u00f9 grande mai ricevuto?",
        options: [
            "Un enorme albero decorato",
            "La Statua della Libert\u00e0",
            "Un palazzo reale",
            "Un dirigibile"
        ],
        correct: 1
    },
    {
        question: "Chi \u00e8 stato il primo artista a disegnare una stella cometa con la coda?",
        options: ["Leonardo da Vinci", "Giotto", "Michelangelo", "Raffaello"],
        correct: 1
    },
    {
        question: "Qual era il materiale usato per creare i primi alberi di Natale artificiali in Germania?",
        options: [
            "Piume d'oca tinte di verde",
            "Carta pesta",
            "Legno dipinto",
            "Foglie di palma"
        ],
        correct: 0
    },
    {
        question: "Qual \u00e8 il curioso elemento aggiunto nei presepi catalani?",
        options: [
            "Una statuina di un drago",
            "Un Babbo Natale accucciato",
            "Una renna parlante",
            "Una fontana di cioccolato"
        ],
        correct: 1
    },
    {
        question: "Quale figura accompagna San Nicola nella tradizione tedesca per punire i bambini cattivi?",
        options: ["Krampus", "Perchta", "Befana", "L'elfo scuro"],
        correct: 0
    },
    {
        question: "Dove lascia Babbo Natale i regali in Francia?",
        options: ["Sotto il letto", "Nelle scarpe dei bambini", "Sul tavolo della cucina", "Sulle finestre"],
        correct: 1
    },
    {
        question: "Perch\u00e9 a Natale si scambiano i regali?",
        options: [
            "Per una tradizione dell'antica Roma durante i Saturnali",
            "Per ricordare i doni dei Re Magi",
            "Per celebrare la fine dell'anno",
            "Per onorare il culto del Sole"
        ],
        correct: 1
    },
    {
        question: "Quante portate prevede tradizionalmente il pranzo natalizio in Polonia?",
        options: ["8", "10", "12", "14"],
        correct: 2
    },
    {
        question: "Qual \u00e8 il nome della piazza dove si trova il famoso albero di Natale a New York?",
        options: ["Times Square", "Union Square", "Rockefeller Plaza", "Bryant Park"],
        correct: 2
    },
    {
        question: "In quale paese si trova la citt\u00e0 di Rovaniemi, considerata la 'casa ufficiale' di Babbo Natale?",
        options: ["Norvegia", "Svezia", "Finlandia", "Danimarca"],
        correct: 2
    },
    {
        question: "Perch\u00e9 secondo un'antica leggenda si usa baciarsi sotto il vischio?",
        options: [
            "Perch\u00e9 il vischio protegge dal male e porta fortuna",
            "Perch\u00e9 una madre, felice del ritorno in vita del figlio, baci\u00f2 chiunque passasse sotto un albero con il vischio",
            "Perch\u00e9 un eroe lo scelse come simbolo d'amore eterno",
            "Perch\u00e9 il vischio era considerato una pianta sacra nei riti invernali"
        ],
        correct: 1
    }
];


let askedToContinue = false;


let currentQuestionIndex = 0;
let correctAnswers = 0;

const introPage = document.getElementById("intro-page");
const quizPage = document.getElementById("quiz-page");
const resultPage = document.getElementById("result-page");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextQuestionButton = document.getElementById("next-question");
const resultText = document.getElementById("result-text");
const startQuizButton = document.getElementById("start-quiz");
const restartQuizButton = document.getElementById("restart-quiz");

startQuizButton.addEventListener("click", startQuiz);
nextQuestionButton.addEventListener("click", showNextQuestion);
restartQuizButton.addEventListener("click", restartQuiz);

function startQuiz() {
    introPage.style.display = "none";
    quizPage.style.display = "block";
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("button");
        button.addEventListener("click", () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });

    nextQuestionButton.style.display = "none";
}



function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizPage.style.display = "none";
    resultPage.style.display = "block";
    const passMark = Math.ceil(questions.length * 0.6);
    if (correctAnswers >= passMark) {
        resultText.textContent = "Complimenti! Hai aiutato Matilde a tornare a casa per Natale!";
    } else {
        resultText.textContent = "Oh no! Mati \u00E8 ancora dispersa!";
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    resultPage.style.display = "none";
    introPage.style.display = "block";
}

let hasAskedToContinue = false; // Variabile di stato per tenere traccia

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const feedback = document.getElementById("feedback");

    // Disabilita i bottoni delle opzioni
    document.querySelectorAll(".button").forEach(button => {
        button.disabled = true;
    });

    // Verifica la risposta e mostra il messaggio
    if (selectedIndex === currentQuestion.correct) {
        correctAnswers++;
        feedback.textContent = "Corretto!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = `Sbagliato! La risposta corretta era: ${currentQuestion.options[currentQuestion.correct]}`;
        feedback.style.color = "red";
    }

    feedback.style.display = "block"; // Mostra il messaggio

    // Controlla se il giocatore ha raggiunto 12 risposte corrette
    if (correctAnswers >= 12 && !hasAskedToContinue) {
        hasAskedToContinue = true; // Imposta il flag a true
        const wantsToContinue = confirm("Hai raggiunto 12 risposte corrette! Vuoi continuare?");
        if (wantsToContinue) {
            nextQuestionButton.style.display = "block"; // Mostra il pulsante "Prossima domanda"
        } else {
            showResult(); // Mostra il risultato e termina il quiz
        }
    } else {
        nextQuestionButton.style.display = "block"; // Mostra il pulsante "Prossima domanda"
    }
}



function showNextQuestion() {
    // Nascondi il messaggio di feedback prima di passare alla prossima domanda
    const feedback = document.getElementById("feedback");
    feedback.style.display = "none";

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}




