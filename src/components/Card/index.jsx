import "./style.css";

const Card = (props) => {
  return (
    <div className="Card">
      <img src={props.image} alt={`Foto de ${props.name}`} />
      <h3 className="Text">{props.name}</h3>
      <p className="Text">Status: {props.status}</p>
      <p className="Text">Species: {props.species}</p>
    </div>
  );
};

export default Card;
