import styles from './Form.module.css';

function Form() {

  function cadastrar(e) {
    e.preventDefault();
    
    console.log("cadastro de usuário");
  }

  return (
    <div className={styles.cadastro}>
      <h2>Cadastro:</h2>
      <form onSubmit={cadastrar}>
        <div>
          <input type="text" placeholder="Digite o seu nome" />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Form;