function Lista({ itens }) {
  return (
    <>
      <h3>Lista de Nomes:</h3>
      {
        itens.length > 0 ? (
          itens.map((item, index) => (
            <p key={index}>{item}</p>
          ))        
        ) : (
          <p>Lista vazia</p>
        )
      }      
    </>
  );
}

export default Lista;