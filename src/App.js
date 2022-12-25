import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';
import Titulo from './components/Titulo';

function App() {
  return (
    <div className="App">
      <Titulo texto="Teste de Eventos" />
      <main>
        <Evento numero={1} />
        <Evento numero={2} />
      </main>
      <hr />
      <Form />
    </div>
  );
}

export default App;
