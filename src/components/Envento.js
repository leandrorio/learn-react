import Button from "./eventos/Button";

function Evento() {

  function meuEvento() {
    console.log('Primeiro Evento');
  }

  function meuEvento2() {
    console.log('Segundo Evento');
  }

  return (
    <div>
      <p>Clique para disparar o Evento</p>
      <Button event={meuEvento} text="Primeiro Evento" />
      <Button event={meuEvento2} text="Segundo Evento" />
    </div>
  );
}

export default Evento;