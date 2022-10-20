import './ItemsListStyle.css';

const ItemsList = (props) => {
  return (
    <>
      {props.items.length > 0 && (
        <div className="col-md-6">
          <div>Purchasing Power {props.items.length === 1 ? 'Item' : 'Items'} List</div>
          <div>
            <ul>
              {props.items.map((item) => (
                <li key={item.key} className="item">
                  Item: {item.name} <br />
                  Price: R${item.price} <br />
                  Relation salary/item price: {item.proportion}%<br />
                  You have to work {item.estimatedTime} to buy this item. <br />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemsList;
