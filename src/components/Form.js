import {useState} from 'react';

import styles from './Form.module.css';
import React from 'react';

function Form() {

  function cadastrar(e) {
    e.preventDefault();
    
    console.log("cadastro de usuário");
    console.log(`Usuário ${nome} cadastrado no sistema com senha ${senha}`);
  }

  const [nome, setNome] = useState('Leandro');
  const [senha, setSenha] = useState();

  return (
    <div>
      <h2>Cadastro:</h2>
      <form onSubmit={cadastrar}>
        <div className={styles.mb_1}>
          <label htmlFor='nome'>Nome: </label>
          <input id='nome' name='nome' type="text" placeholder="Digite o seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div className={styles.mb_1}>
          <label htmlFor='senha'>Senha: </label>
          <input id='senha' name='senha' type="password" placeholder="Digite a sua senha" onChange={(e) => setSenha(e.target.value)} />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Form;