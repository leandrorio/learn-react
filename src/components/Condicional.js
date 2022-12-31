import { useState } from "react";

function Condicional() {

  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();

    setUserEmail(email);
  }

  function cleanUserEmail(e) {
    e.preventDefault();

    setUserEmail('');
  }

  return (
    <div>
      <h2>Cadastre seu email:</h2>
      <form>
        <input type='email' placeholder="Informe seu e-mail" onChange={(e) => setEmail(e.target.value)} />
        <button type="submit" onClick={enviarEmail}>Enviar e-mail</button>
        {userEmail && (
          <div>
            <p>o E-mail do usuário é: {userEmail}</p>
            <button type="button" onClick={cleanUserEmail}>Limpar e-mail</button>
          </div>
        )}        
      </form>
    </div>
  );
}

export default Condicional;