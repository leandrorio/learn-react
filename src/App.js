import './App.css';
import Evento from './components/Envento';
import Titulo from './components/Titulo';

function App() {
  return (
    <div className="App">
      <Titulo texto="Teste de Eventos por props" />
      <main>
        <Evento />
      </main>            
    </div>
  );
}

export default App;
