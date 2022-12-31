import './App.css';
import { useState } from 'react';

import Titulo from './components/Titulo';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function App() {

  const [nome, setNome] = useState()

  return (
    <div className="App">
      <Titulo texto="Teste de State Lift" />
      <main>
        <SeuNome setNome={setNome} />
        <Saudacao nome={nome} />
      </main>            
    </div>
  );
}

export default App;
