import "./BodyCard.css";

const BodyCard = (props) => (
  <div className="container">
    <div className="row d-flex text-center">
      <h1>Purchasing Power Calculator v1.0</h1>
      {props.children}</div>
  </div>
);

export default BodyCard;
