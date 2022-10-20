import ItemAddForm from "./ItemAddForm";
import HoursToSentence from "../../helpers/HoursToSentence";

import { Button } from "react-bootstrap";
import { useState } from "react";

const ItemAdd = (props) => {

  const minWage = 1210;
  const hourlyRate = 1210 / 200;
  const [showForm, toggleShowForm] = useState(false);
  const AddItemButtonHandler = () => {
    toggleShowForm(!showForm);
  };

  const onCancelFormHandler = () => toggleShowForm(false);

  const AddItemHandler = (item) => {
    toggleShowForm(!showForm);
    let price = (item.price / minWage) * 100;
    let hours = parseFloat(item.price / hourlyRate);

    item.proportion = parseFloat(price.toFixed(price < 0.1 ? 4 : 2));
    item.key = Math.random() * 10000;
    item.estimatedTime = HoursToSentence(hours);

    props.addItem(item);
  };

  return (
    <div className="row">
    <div className="col-md-6 col-sm-12 justify-content-center">
      {!showForm && (
        <Button variant="outline-success" onClick={AddItemButtonHandler}>
          Add Item
        </Button>
      )}
      {showForm && (
        <ItemAddForm
          addItemHandler={AddItemHandler}
          cancelHandler={onCancelFormHandler}
        />
      )}
      <div></div></div>
    </div>
  );
};

export default ItemAdd;
