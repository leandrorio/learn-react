import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';

import Navbar from './components/layout/Navbar';
import Titulo from './components/Titulo';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Titulo texto="Teste de React Icons" />
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/empresa" element={<Empresa />}/>
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>      

      </Router>
      <Footer />
    </div>
  );
}

export default App;
