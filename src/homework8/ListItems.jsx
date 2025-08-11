import React, { useState, useEffect  } from 'react';
import './ListItems.css';

const ListItems = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
  console.log('Компонент ListItems был смонтирован');

  //  НАМЕРЕННАЯ ОШИБКА 
 /* try {
    const result = doesNotExist(); // вызовет ReferenceError
    console.log('Результат:', result);
  } catch (error) {
    console.error('Произошла ошибка в useEffect:', error.message);
  }*/
}, []); // ← пустой массив зависимостей = только при монтировании

  const addItem = () => {
    if (inputValue.trim() === '') {
      setHasError(true);
      return;
    }

      setItems([...items, inputValue]);
      setInputValue('');
      setHasError(false);
    
  };

  return (
    <div className="container">
      <h2 className="title">Список элементов</h2>
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите элемент"
          className={`input-field ${hasError ? 'input-error' : ''}`}
        />
        <button onClick={addItem} className="add-button">
          Добавить
        </button>
      </div>
      <ul className="list">
        {items.map((item, index) => (
          <li key={index} className="list-item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;