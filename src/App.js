import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {

  const raf = "Rafael";

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Leandro" />
      <SayMyName nome="Leticia" />
      <SayMyName nome="Miguel" />
      <SayMyName nome="Samuel" />
      <SayMyName nome={raf} />
      <hr />
      <Pessoa nome="Leandro Rio" foto="https://via.placeholder.com/100" idade="39" profissao="Ger. Desenv. 1" />
    </div>
  );
}

export default App;
