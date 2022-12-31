import './App.css';
import Form from './components/Form';
import Titulo from './components/Titulo';

function App() {
  return (
    <div className="App">
      <Titulo texto="Teste de useState" />
      <main>
        <Form />
      </main>            
    </div>
  );
}

export default App;
