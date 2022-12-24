import Item from "./Item";

function List() {
  return (
    <div>
      <ul>
        <Item marca="Fiat" anoLancamento={2000} />
        <Item marca="VW" anoLancamento={2005} />
        <Item marca="Renault" anoLancamento={2020} />
        <Item />
      </ul>
    </div>
  );
}

export default List;