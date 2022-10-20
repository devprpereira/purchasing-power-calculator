import { Button, ButtonGroup, Form } from "react-bootstrap";
import { useState } from "react";

const ItemAddForm = (props) => {
  const clearFormInfo = {
    name: "",
    price: "",
    proportion: "",
    time: []
  };

  const [itemData, userInput] = useState(clearFormInfo);

  const itemNameChangeHandler = (event) => {
    userInput((prevState) => ({ ...prevState, name: event.target.value }));
  };
  const itemPriceChangeHandler = (event) => {
    userInput((prevState) => ({ ...prevState, price: event.target.value }));
  };

  const FormSubmitHandler = (event) => {
    event.preventDefault();

    props.addItemHandler(itemData);
  };

  return (
    <Form onSubmit={FormSubmitHandler}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Item name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Example: Bread"
          required
          value={itemData.name}
          onChange={itemNameChangeHandler}
        />
        <Form.Text className="text-muted">
          Add here the name of the item you want to compare.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPrice">
        <Form.Label>Item price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Example: 9.99"
          min="0"
          step="0.01"
          required
          value={itemData.price}
          onChange={itemPriceChangeHandler}
        />
        <Form.Text className="text-muted">
          Add here the price of the item you want to compare.
        </Form.Text>
      </Form.Group>
      <ButtonGroup>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary" type="cancel" onClick={props.cancelHandler}>
          Cancel
        </Button>
      </ButtonGroup>
    </Form>
  );
};

export default ItemAddForm;
