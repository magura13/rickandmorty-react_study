import "./style.css";

const Card = (props) => {
  return (
    <div className="Card">
      <img src={props.image} alt={`Foto de ${props.name}`} />
      <h3>{props.name}</h3>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
    </div>
  );
};

export default Card;
