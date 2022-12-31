import './App.css';
import Titulo from './components/Titulo';
import Condicional from './components/Condicional';

function App() {
  return (
    <div className="App">
      <Titulo texto="Teste de Renderização condicional" />
      <main>
        <Condicional /> 
      </main>            
    </div>
  );
}

export default App;
