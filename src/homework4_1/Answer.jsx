import React, { useState } from 'react';

function Answer({ onSubmit }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput('');
  };

  return (
    <form className="answer-form" onSubmit={handleSubmit}>
      <input
        type="number"
        value={input}
        onChange={handleChange}
        placeholder="Введите ответ"
        className="answer-input"
      />
      <button type="submit" className="submit-btn">Ответить</button>
    </form>
  );
}

export default Answer;
