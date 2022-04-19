import zapdosImg from "./images/zapdos.jpg";
import "./Showcase.css";
function Showcase() {
  const favPokemon = "Zapdos";

  const pokeCharacteristics = {
    type: "Electric",
    move: "Thundershock"
  };

  return (
    <div className="mainDiv">
      <h1> {favPokemon}'s Showcase Component</h1>
      <img
        src={zapdosImg}
        alt={favPokemon}
        style={{ borderRadius: "50%", width: 200, height: 200 }}
      ></img>
      <h2 className="centerText">
        {favPokemon}'s type is{" "}
        <span className="type">{pokeCharacteristics.type}</span> and one of
        their moves is <span className="move">{pokeCharacteristics.move}</span>.
      </h2>
    </div>
  );
}

export default Showcase;
