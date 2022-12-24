import './App.css';
import Pessoa from './components/Pessoa';
import Titulo from './components/Titulo';

function App() {
  return (
    <div className="App">
      <Titulo texto="Teste de CSS" />
      <main>
        <Pessoa nome="Leandro Rio" foto="https://via.placeholder.com/100" idade="39" profissao="Ger. Desenv. 1" />
      </main>
    </div>
  );
}

export default App;
