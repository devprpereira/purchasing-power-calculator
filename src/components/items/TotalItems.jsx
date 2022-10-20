const TotalItems = (props) => {
  let data = props.items[0];
  return (
    <>
    {data.totalItems > 1 && (
      <div className="col-md-6 item total-items">
        <div>
          Here are your expenses resume:
          <div>
            Total Items: {data.totalItems} <br />
            Total Price: R${data.totalPrice.toFixed(2)} <br />
            Total Purchasing Power: {data.totalPurchasingPower.toFixed(2)}%{" "}
            <br />
            You have to work {data.workTotal} to buy these items.
          </div>
        </div>
      </div>
      )}
    
    </>
  );
};

export default TotalItems;
