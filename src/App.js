
import './App.css';
import './homework3/rating.css';
import './homework3/list.css';
import Rating from './homework3/rating';
import List from './homework3/list';

function App() {
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
}

export default App;


