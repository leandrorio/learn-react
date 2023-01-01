import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Container from "./components/layout/Container";

import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      
      <header>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/company">Empresa</Link></li>
          <li><Link to="/contact">Contato</Link></li>
          <li><Link to="/newproject">Novo Projeto</Link></li>
        </ul>
      </header>

      {/* <main> */}
        <Container customClass="min-height">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newproject" element={<NewProject />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      {/* </main> */}

      <footer>
        <p>footer</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
