import './App.css';
import List from './components/List';
import Titulo from './components/Titulo';

function App() {
  return (
    <div className="App">
      <Titulo texto="Teste de React Fragments" />
      <main>
        <List />
      </main>
    </div>
  );
}

export default App;
