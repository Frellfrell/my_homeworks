import React, { useState } from 'react';
import Answer from './Answer';

function MatQuiz() {
  const [a, setA] = useState(generateNumber());
  const [b, setB] = useState(generateNumber());
  const [points, setPoints] = useState(0);

  function generateNumber() {
    return Math.floor(Math.random() * 10) + 1; // от 1 до 10
  }

  const handleAnswer = (userAnswer) => {
    const correct = a + b;
    if (parseInt(userAnswer) === correct) {
      setPoints(points + 1);
    } else {
      setPoints(points - 1);
    }
    // Сгенерировать новые числа после ответа
    setA(generateNumber());
    setB(generateNumber());
  };

  return (
    <div className="quiz-container">
      <p className="question">Сколько будет <strong>{a} + {b}</strong>?</p>
      <p className="score">Текущий счёт: {points}</p>
      <Answer onSubmit={handleAnswer} />
    </div>
  );
}

export default MatQuiz;

