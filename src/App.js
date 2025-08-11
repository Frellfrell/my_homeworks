import React, { useState } from 'react';

import './App.css';
import './homework3/rating.css';
import './homework3/list.css';
import Rating from './homework3/rating';
import List from './homework3/list';

import Homework4CityCards from './homework4/Homework4CityCards';
import Homework4MatQuiz from './homework4_1/Homework4MatQuiz';
import CoolJob from './homework5/CoolJob';
import Hw5Spotifycard from './homework5_1/Hw5Spotifycard';
import UserProfile from './homework6/UserProfile';
import SwitchLanguageApp from './homework7/SwitchLanguageApp';
import PerformanceApp from './homework8/Performance-app';
import Homework9 from './homework9/Homework9';
import CatImage from './homework10/CatImage';

function App() {
  const [activeHomework, setActiveHomework] = useState('homework3');

  const renderHomework = () => { // функция рендерит домашки
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
    case 'homework5_cooljob':
      return <CoolJob />;  
    case 'homework5_1':
      return <Hw5Spotifycard />;
    case 'homework6':
      return <UserProfile />;
      case 'homework7':
        return <SwitchLanguageApp />; 
    case 'homework8':
      return <PerformanceApp />;
  case 'homework9':
    return <Homework9 />;
   case 'catApp': 
        return <CatImage />;
      default:
        return <p>Выберите домашнее задание</p>;
       
    }
  };

return (
    <div className="App">
      <label htmlFor="homework-select" className="homework-label">
        Выберите домашнее задание:
      </label>
      <select /*выбираем домашнее задание*/
        id="homework-select"
        value={activeHomework}
        onChange={(e) => setActiveHomework(e.target.value)}
         className="homework-select"
      >
        <option value="homework3">homework 3</option>
        <option value="homework4">homework 4 City Cards</option>
        <option value="homework4_1">homework 4.1 Math Quiz</option>
        <option value="homework5_cooljob">homework 5 CoolJob</option>
        <option value="homework5_1">homework 5.1 Spotify Card</option>
        <option value="homework6">homework 6 User Profile</option>
        <option value="homework7">homework 7 Switch Language</option>
        <option value="homework8">homework 8 Performance App</option>
        <option value="homework9">homework 9 Dynamic Form</option>
        <option value="catApp">🐱 Cat Image App</option>
      </select>

      {renderHomework()}
    </div>
  );
}



export default App;


