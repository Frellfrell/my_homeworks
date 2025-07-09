import React, { useState } from 'react';

import './App.css';
import './homework3/rating.css';
import './homework3/list.css';
import Rating from './homework3/rating';
import List from './homework3/list';

import Homework4CityCards from './homework4/Homework4CityCards';
import Homework4MatQuiz from './homework4_1/Homework4MatQuiz';

function App() {
  const [activeHomework, setActiveHomework] = useState('homework3');

  const renderHomework = () => {
    switch (activeHomework) {
      case 'homework3':
  return (
    <div className="App">
      <h1>Оцени наш сервис</h1>
      <Rating />
       <section>
        <h2>Список приглашённых</h2>
        <List />
      </section>
    </div>
  );
   case 'homework4':
        return <Homework4CityCards />;
   case 'homework4_1':
      return <Homework4MatQuiz />;
      default:
        return <p>Выберите домашнее задание</p>;
    }
  };

return (
    <div className="App">
      <label htmlFor="homework-select" className="homework-label">
        Выберите домашнее задание:
      </label>
      <select
        id="homework-select"
        value={activeHomework}
        onChange={(e) => setActiveHomework(e.target.value)}
         className="homework-select"
      >
        <option value="homework3">homework 3</option>
        <option value="homework4">homework 4 City Cards</option>
        <option value="homework4_1">homework 4.1 Math Quiz</option>
      </select>

      {renderHomework()}
    </div>
  );
}



export default App;


