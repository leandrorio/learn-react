function SeuNome({ setNome }) {
  return (
    <div>
      <p>Informe seu Nome:</p>
      <input type="text" placeholder="Qual seu Nome?" onChange={(e) => setNome(e.target.value)} />
    </div>
  )
}

export default SeuNome;