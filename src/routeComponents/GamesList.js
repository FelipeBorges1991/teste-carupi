import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../apis/index";

const myKey = "b46ede88b8a24c799f1b5756b13deb22";

function GamesList() {
  const [gamesList, setGames] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await api.get(`/games?key=${myKey}`);

        console.log(response);

        setGames(response.data.results);
      } catch (err) {
        console.error(err);
      }
    }
    fetchGames();
  }, []);

  return (
    <div className="row">
      {gamesList.map((games) => {
        return (
          <div className="col-12 col-sm-4 col-md-3" key={games.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={games.background_image}
                className="card-img-top"
                alt="Game poster"
              />

              <div className="card-body">
                <p className="card-text" title={games.name}>
                  <strong>{games.name}</strong>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GamesList;
