function Pessoa({foto, nome, idade, profissao}) {

  const alt = "Foto de "+nome;

  return (
    <>
      <img src={foto} alt={alt}></img>
      <div>Nome: {nome}</div>
      <div>Idade: {idade}</div>
      <div>Profissão: {profissao}</div>
    </>
  );
}

export default Pessoa;