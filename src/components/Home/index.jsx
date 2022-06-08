import Card from "../Card";
import { useState, useEffect } from "react";
import "./style.css";

const Home = (props) => {
  const [characters, setCharacters] = useState([]);
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");

  const getCharacters = async () => {
    const response = await fetch(url);
    const list = await response.json();

    setCharacters([...characters, ...list.results]);
    setUrl(list.info.next);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    if (!url) getCharacters();
  });

  return (
    <div>
      <h1>PERSONAGENS</h1>
      <div className="Card__container">
        {characters.map((element) => {
          return <Card key={element.id} name={element.name} image={element.image} status={element.status} species={element.species}/>;
        })}
      </div>
    </div>
  );
};

export default Home;
