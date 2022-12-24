import './App.css';

function App() {
  const name = "Leandro";
  const newName = name.toUpperCase();

  function sum(a, b) {
    return a + b;
  }

  const url = 'https://via.placeholder.com/150';

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma simples: {1 + 2}</p>
      <p>Soma usando função: {sum(2, 3)}</p>
      <img src={url} alt="imagem teste" />
    </div>
  );
}

export default App;
