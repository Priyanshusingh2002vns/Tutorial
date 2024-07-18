const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Which of the following is not a type of Constructor in C++?',
    answers: [
      { text: 'Friend constructor', correct: true },
      { text: 'copy constructor', correct: false },
      { text: 'Default constructor', correct: false },
      { text: 'Parameterized constructor', correct: false }
    ]
  },
  {
    question: 'Who invented C++?',
    answers: [
      { text: 'Dennis Ritchie', correct: false },
      { text: 'Ken Thompson', correct: false },
      { text: 'Brain Kernighan', correct: false },
      { text: 'Bjarne Stroustrup', correct: true }
    ]
  },
  {
    question: 'Used for comments in C++?',
    answers: [
      { text: '/*comment*/', correct: false },
      { text: '//comment*/', correct: false },
      { text: '//coment', correct: false },
      { text: 'both // and /*..*/', correct: true }
    ]
  },
  {
    question: 'Which of the following user-define header file used in C++?',
    answers: [
      { text: 'cpp', correct: false },
      { text: 'hg', correct: false },
      { text: 'hf', correct: false },
      { text: 'h', correct: true }
    ]
  }
]