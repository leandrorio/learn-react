import './App.css';
import Lista from './components/Lista';
import Titulo from './components/Titulo';

function App() {

  const meusItens = ['Miguel', 'Samuel', 'Rafael'];

  return (
    <div className="App">
      <Titulo texto="Teste de Renderização de Listas" />
      <main>
        <Lista itens={meusItens} />
        <Lista itens={[]} />
      </main>            
    </div>
  );
}

export default App;
