const questions = [
  {
    question: "O que é Java?",
    answers: [
      "Uma linguagem de programação orientada a objetos",
      "Um sistema operativo",
      "Um editor de imagens",
      "Uma base de dados"
    ],
    correct: 0,
    explanation: "Java é uma linguagem de programação muito utilizada para criar aplicações."
  },
  {
    question: "O que é um IDE?",
    answers: [
      "Um ambiente integrado para escrever, executar e depurar código",
      "Um tipo de variável",
      "Uma linguagem de marcação",
      "Um componente físico do computador"
    ],
    correct: 0,
    explanation: "IDE significa Integrated Development Environment, ou Ambiente de Desenvolvimento Integrado."
  },
  {
    question: "O que é uma variável?",
    answers: [
      "Um espaço identificado na memória onde se guarda um valor",
      "Uma instrução que termina o programa",
      "Um comentário no código",
      "Um ficheiro executável"
    ],
    correct: 0,
    explanation: "Uma variável guarda um valor que pode ser utilizado e alterado."
  },
  {
    question: "Quais são alguns dos tipos mais comuns em Java?",
    answers: [
      "int, double, char, boolean e String",
      "row, column, table e query",
      "html, css, js e php",
      "folder, file, disk e memory"
    ],
    correct: 0,
    explanation: "Estes tipos representam números, caracteres, valores lógicos e texto."
  },
  {
    question: "Para que serve a classe Scanner em Java?",
    answers: [
      "Para ler dados introduzidos pelo utilizador",
      "Para criar imagens",
      "Para apagar automaticamente variáveis",
      "Para converter Java em HTML"
    ],
    correct: 0,
    explanation: "Scanner é frequentemente usada para ler dados do teclado através de System.in."
  },
  {
    question: "Para que serve o ciclo while?",
    answers: [
      "Para repetir um bloco de código enquanto uma condição for verdadeira",
      "Para declarar uma classe",
      "Para importar uma biblioteca",
      "Para mostrar apenas mensagens de erro"
    ],
    correct: 0,
    explanation: "O while continua a executar enquanto a condição indicada for verdadeira."
  },
  {
    question: "Para que serve a instrução if?",
    answers: [
      "Para executar código quando uma condição é verdadeira",
      "Para criar um ficheiro",
      "Para declarar uma classe",
      "Para ler dados do teclado"
    ],
    correct: 0,
    explanation: "A instrução if permite tomar decisões com base numa condição."
  },
  {
    question: "Qual é a forma correta de usar um ciclo while?",
    answers: [
      "while (condicao) { instrucoes; }",
      "while condicao then instrucoes",
      "repeat (condicao) [instrucoes]",
      "loop while = condicao"
    ],
    correct: 0,
    explanation: "Em Java, a condição fica entre parênteses e o bloco entre chavetas."
  },
  {
    question: "Qual é a forma correta de escrever uma instrução if?",
    answers: [
      "if (condicao) { instrucoes; }",
      "if condicao then instrucoes",
      "if [condicao] instrucoes",
      "if = condicao"
    ],
    correct: 0,
    explanation: "Em Java, a condição do if fica entre parênteses e o bloco entre chavetas."
  },
  {
    question: "O que acontece se a condição de um if for falsa?",
    answers: [
      "O bloco do if não é executado",
      "O programa termina sempre",
      "O bloco é executado duas vezes",
      "Todas as variáveis são apagadas"
    ],
    correct: 0,
    explanation: "Quando a condição é falsa, o bloco associado ao if é ignorado."
  },
  {
    question: "Qual destas condições verifica se a idade é maior ou igual a 18?",
    answers: [
      "idade >= 18",
      "idade = 18",
      "idade => 18",
      "idade < 18"
    ],
    correct: 0,
    explanation: "O operador >= significa maior ou igual."
  },
  {
    question: "Quais são os valores possíveis do tipo boolean?",
    answers: [
      "true e false",
      "0, 1 e 2",
      "sim, não e talvez",
      "positivo e negativo"
    ],
    correct: 0,
    explanation: "Um boolean representa apenas verdadeiro ou falso: true ou false."
  },
  {
    question: "Que símbolo termina normalmente uma instrução em Java?",
    answers: [
      "Ponto e vírgula (;)",
      "Dois pontos (:)",
      "Vírgula (,)",
      "Ponto final (.)"
    ],
    correct: 0,
    explanation: "A maioria das instruções simples em Java termina com ponto e vírgula."
  },
  {
    question: "Qual destas opções declara corretamente uma variável inteira?",
    answers: [
      "int idade = 20;",
      "idade int = 20;",
      "integer: idade = 20",
      "var idade := vinte;"
    ],
    correct: 0,
    explanation: "int é o tipo, idade é o nome da variável e 20 é o valor atribuído."
  },
  {
    question: "Qual tipo é normalmente usado para guardar texto?",
    answers: [
      "String",
      "int",
      "boolean",
      "double"
    ],
    correct: 0,
    explanation: "String é usado para guardar texto, como nomes e frases."
  },
  {
    question: "Qual tipo é usado para guardar números inteiros?",
    answers: [
      "int",
      "String",
      "boolean",
      "char"
    ],
    correct: 0,
    explanation: "O tipo int guarda números inteiros, como 5, 20 ou -3."
  },
  {
    question: "Qual tipo é adequado para guardar um número decimal?",
    answers: [
      "double",
      "boolean",
      "char",
      "String"
    ],
    correct: 0,
    explanation: "double é usado para números com casas decimais."
  },
  {
    question: "Qual tipo guarda apenas um carácter?",
    answers: [
      "char",
      "String",
      "int",
      "Scanner"
    ],
    correct: 0,
    explanation: "char guarda um único carácter, como 'A' ou '7'."
  },
  {
    question: "O que faz System.out.println()?",
    answers: [
      "Mostra uma mensagem ou valor na consola e muda de linha",
      "Lê um valor do teclado",
      "Cria uma nova classe",
      "Fecha o programa imediatamente"
    ],
    correct: 0,
    explanation: "System.out.println() escreve informação na consola e muda de linha."
  },
  {
    question: "Qual operador verifica se dois valores são iguais em Java?",
    answers: [
      "==",
      "=",
      "!=",
      "++"
    ],
    correct: 0,
    explanation: "== compara dois valores. O operador = é usado para atribuição."
  },
  {
    question: "Qual operador significa diferente de?",
    answers: [
      "!=",
      "==",
      "=",
      ">="
    ],
    correct: 0,
    explanation: "O operador != verifica se dois valores são diferentes."
  },
  {
    question: "Qual operador é usado para atribuir um valor a uma variável?",
    answers: [
      "=",
      "==",
      "!=",
      ">="
    ],
    correct: 0,
    explanation: "O operador = atribui um valor a uma variável."
  },
  {
    question: "Como se escreve um comentário de uma linha em Java?",
    answers: [
      "// comentário",
      "<!-- comentário -->",
      "# comentário",
      "** comentário **"
    ],
    correct: 0,
    explanation: "Em Java, // inicia um comentário que termina no fim da linha."
  },
  {
    question: "Qual método de Scanner pode ler um número inteiro?",
    answers: [
      "nextInt()",
      "readNumber()",
      "getInteger()",
      "scanIntValue()"
    ],
    correct: 0,
    explanation: "O método nextInt() lê um valor inteiro introduzido pelo utilizador."
  },
  {
    question: "Qual palavra é usada para criar uma classe em Java?",
    answers: [
      "class",
      "newClass",
      "object",
      "define"
    ],
    correct: 0,
    explanation: "A palavra-chave class é usada para declarar uma classe."
  },
  {
    question: "Java distingue letras maiúsculas de minúsculas?",
    answers: [
      "Sim, Java é sensível a maiúsculas e minúsculas",
      "Não, nunca distingue",
      "Apenas dentro de comentários",
      "Apenas em números"
    ],
    correct: 0,
    explanation: "Em Java, nome e Nome são identificadores diferentes."
  }
];

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

const questionCount = document.getElementById("question-count");
const progressText = document.getElementById("progress-text");
const scoreText = document.getElementById("score-text");
const progressFill = document.getElementById("progress-fill");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const feedback = document.getElementById("feedback");
const resultText = document.getElementById("result-text");
const resultMessage = document.getElementById("result-message");

let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let shuffledQuestions = [];
let currentAnswers = [];

questionCount.textContent = questions.length;

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", showNextQuestion);
restartButton.addEventListener("click", startQuiz);

function shuffleArray(items) {
  const shuffled = [...items];

  shuffled.forEach((item, index) => {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  });

  return shuffled;
}

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  answered = false;
  shuffledQuestions = shuffleArray(questions);

  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  showQuestion();
}

function showQuestion() {
  answered = false;
  nextButton.classList.add("hidden");
  feedback.textContent = "";
  feedback.className = "feedback";
  answerButtons.innerHTML = "";

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  currentAnswers = shuffleArray(
    currentQuestion.answers.map((answer, index) => ({
      text: answer,
      isCorrect: index === currentQuestion.correct
    }))
  );

  progressText.textContent =
    `Pergunta ${currentQuestionIndex + 1} de ${shuffledQuestions.length}`;
  scoreText.textContent = `Pontuação: ${score}`;
  progressFill.style.width =
    `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%`;
  questionText.textContent = currentQuestion.question;

  currentAnswers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.textContent = answer.text;
    button.type = "button";
    button.addEventListener("click", () => selectAnswer(index, button));
    answerButtons.appendChild(button);
  });
}

function selectAnswer(selectedIndex, selectedButton) {
  if (answered) return;

  answered = true;

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const selectedAnswer = currentAnswers[selectedIndex];
  const buttons = [...answerButtons.children];

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (currentAnswers[index].isCorrect) {
      button.classList.add("correct");
    }
  });

  if (selectedAnswer.isCorrect) {
    score++;
    selectedButton.classList.add("correct");
    feedback.textContent = `Correto! ${currentQuestion.explanation}`;
    feedback.classList.add("correct-feedback");
  } else {
    selectedButton.classList.add("wrong");
    feedback.textContent = `Incorreto. ${currentQuestion.explanation}`;
    feedback.classList.add("wrong-feedback");
  }

  scoreText.textContent = `Pontuação: ${score}`;
  nextButton.textContent =
    currentQuestionIndex === shuffledQuestions.length - 1
      ? "Ver resultado"
      : "Próxima pergunta";
  nextButton.classList.remove("hidden");
}

function showNextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < shuffledQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  const percentage = Math.round((score / shuffledQuestions.length) * 100);
  resultText.textContent =
    `Acertaste ${score} de ${shuffledQuestions.length} perguntas (${percentage}%).`;

  if (percentage === 100) {
    resultMessage.textContent = "Excelente! Dominas muito bem estes conceitos.";
  } else if (percentage >= 70) {
    resultMessage.textContent = "Muito bom! Tens uma base sólida de Java.";
  } else if (percentage >= 50) {
    resultMessage.textContent = "Bom esforço. Revê os conceitos em que tiveste dúvidas.";
  } else {
    resultMessage.textContent = "Continua a praticar. Vais melhorar rapidamente.";
  }
}
