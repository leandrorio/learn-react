function Saudacao({ nome }) {
  function gerarSaudacao(nome) {
    return (
      <>
        {nome && 
          `Olá ${nome}, tudo bom?`
        }
      </>
    )
  }

  return <><p>{gerarSaudacao(nome)}</p></>
}

export default Saudacao