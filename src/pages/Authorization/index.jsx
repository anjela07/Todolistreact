import { useState } from "react";
import "./Auth.css";
export const Login = () => {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Что такое программирование?",
      options: [
        { id: 0, text: "наука о компьютерах", isCorrect: false },
        { id: 1, text: "сайт", isCorrect: false },
        { id: 2, text: "новое сленговое слово", isCorrect: false },
        {
          id: 3,
          text: "процесс создание компьютерной программы",
          isCorrect: true,
        },
      ],
    },
    {
      text: "В чем разница между confirm u prompt?",
      options: [
        {
          id: 0,
          text: "propmt- вызывает диалоговое окно с полем для ввода, confirm-окно с потверждением",
          isCorrect: true,
        },
        { id: 1, text: "ничем не отличаются", isCorrect: false },
        {
          id: 2,
          text: "confirm- вызывает диалоговое окно с полем для ввода, propmt-окно с потверждением",
          isCorrect: false,
        },
        { id: 3, text: "незнаю ", isCorrect: false },
      ],
    },
    {
      text: "Расшифруйте аббревиатуру DOM",
      options: [
        { id: 0, text: "Document Object Model", isCorrect: true },
        { id: 1, text: "Digital Optocal Modulation", isCorrect: false },
        { id: 2, text: "Donn't know", isCorrect: false },
        { id: 3, text: "Domestic Object Mode", isCorrect: false },
      ],
    },
    {
      text: "Какой оператор завершает выполнение текущей функции и возвращает ее значение?",
      options: [
        { id: 0, text: "break", isCorrect: false },
        { id: 1, text: "return", isCorrect: true },
        { id: 2, text: "case", isCorrect: false },
        { id: 3, text: "const", isCorrect: false },
      ],
    },
    {
      text: "Чем отличается const и let ?",
      options: [
        {
          id: 0,
          text: "const  не является частью JavaScript",
          isCorrect: false,
        },
        {
          id: 1,
          text: "переменные, обьявленные через const, находятся в глобальной видимости",
          isCorrect: false,
        },
        {
          id: 2,
          text: "обявление const создает константу, тоесть значение, которое нельзя менять",
          isCorrect: true,
        },
        { id: 3, text: "Ничем", isCorrect: false },
      ],
    },
    {
      text: " Какое ключевое слово позволяет создавать объекты общего вида?",
      options: [
        { id: 0, text: "this", isCorrect: false },
        { id: 1, text: "prototype", isCorrect: false },
        { id: 2, text: "object", isCorrect: true },
        { id: 3, text: "while", isCorrect: false },
      ],
    },
    {
      text: "Какие конструкции для циклов есть в javascript ?",
      options: [
        { id: 0, text: "c только одна: for", isCorrect: false },
        { id: 1, text: "return,break", isCorrect: false },
        { id: 2, text: "три: for, while и do…while", isCorrect: true },
        { id: 3, text: "только две: for и while.", isCorrect: false },
      ],
    },
    {
      text: "В React все является ____ ?",
      options: [
        {
          id: 0,
          text: "модулем",
          isCorrect: false,
        },
        {
          id: 1,
          text: "пакетам",
          isCorrect: false,
        },
        {
          id: 2,
          text: "компонентом",
          isCorrect: true,
        },
        { id: 3, text: "классем", isCorrect: false },
      ],
    },
    {
      text: "Массивы всегда начинаются с порядкового номера... ?",
      options: [
        {
          id: 0,
          text: "1",
          isCorrect: false,
        },
        {
          id: 1,
          text: "2",
          isCorrect: false,
        },
        {
          id: 2,
          text: "0",
          isCorrect: true,
        },
        { id: 3, text: "с любого числа", isCorrect: false },
      ],
    },
    {
      text: "Сколько значений может иметь массив?",
      options: [
        {
          id: 0,
          text: "одно",
          isCorrect: false,
        },
        {
          id: 1,
          text: "массив не имеет значений",
          isCorrect: false,
        },
        {
          id: 2,
          text: "множество",
          isCorrect: true,
        },
        { id: 3, text: "только два", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <div className="container">
        <span>Q</span>
        <span>U</span>
        <span>I</span>
        <span>Z</span>
      </div>

      {/* 2. текущий счет  */}

      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button className="btn2" onClick={() => restartGame()}>
            Restart game
          </button>
        </div>
      ) : (
        <div className="question-card">
          <h2 className="lengthQuies">
            {currentQuestion + 1} / {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <div className="answerBlock">
                  <button
                    className="answerBtn"
                    key={option.id}
                    onClick={() => optionClicked(option.isCorrect)}
                  >
                    {option.text}
                  </button>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
