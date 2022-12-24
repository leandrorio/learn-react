import styles from './Pessoa.module.css';

function Pessoa({foto, nome, idade, profissao}) {

  const alt = "Foto de "+nome;

  return (
    <>
      <img src={foto} alt={alt} className={styles.fotoPerfil} />
      <div><label className={styles.labelDados}>Nome: </label>{nome}</div>
      <div><label className={styles.labelDados}>Idade: </label>{idade}</div>
      <div><label className={styles.labelDados}>Profissão: </label>{profissao}</div>
    </>
  );
}

export default Pessoa;