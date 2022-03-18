import ItemCount from "./itemCount";

function Item({ prod }) {
  return (
    <>
      <div className="card w-100 mt-5">
        {`${prod.name} - ${prod.categoria}`}
      </div>
      <div className="card-body">
        <img src={prod.foto} alt="" className="w-50" />
        {prod.price}
      </div>
      <div className="card-footer">
        <div>
          <ItemCount stock={10} initial={1} />
        </div>
      </div>
    </>
  );
}

export default Item;
