import React, { useEffect, useState } from "react";
import Axios from "axios";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [count, setCount] = useState(1);
  const [searchCharacter, setSearchCharacter] = useState("");

  const getMore = () => {
    setCount(count + 1);
    window.scrollTo(0, 0);
  };

  const getBack = () => {
    setCount(count - 1);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character/?page=" + count).then(
      (response) => {
        setCharacters(response.data.results);
      }
    );
  }, [getMore, getBack]);

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(searchCharacter.toLowerCase());
  });

  return (
    <main>
      <div className="container">
        <div class="active-cyan-3 active-cyan-4 mb-4">
          <input
            class="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={(event) => {
              setSearchCharacter(event.target.value);
            }}
          />
        </div>
        <div className="row">
          {filteredCharacters.map((character) => {
            return (
              <div className="col-4">
                <div className="card">
                  <img src={character.image} alt={character.name} />
                  <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <p className="card-text">
                      {character.status} - {character.gender}
                    </p>

                    <p className="card-text">Origin: {character.origin.name}</p>
                    <p className="card-text">
                      Location: {character.location.name}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="buttons">
          <button className="btn btn-success" onClick={getMore}>
            More
          </button>
          <button className="btn btn-danger" onClick={getBack}>
            Back
          </button>
        </div>
      </div>
    </main>
  );
}

export default Characters;
