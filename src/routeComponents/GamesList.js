import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";

import api from "../apis/index";
import Footer from "../components/Footer";

const myKey = "b46ede88b8a24c799f1b5756b13deb22";

function GamesList() {
  const [gamesList, setGames] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await api.get(
          `/games?key=${myKey}&dates=2020-09-01,2020-09-30&platforms=18,1,7`
        );

        console.log(response);

        setGames(response.data.results);
      } catch (err) {
        console.error(err);
      }
    }
    fetchGames();
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="text-center mb-4 mt-4">
        Lista de jogos mais populares de 2020
      </h1>
      <div className="row d-flex justify-content-center">
        {gamesList.map((games) => {
          return (
            <div className="col-12 col-sm-4 col-md-3" key={games.id}>
              <div
                className="card m-2"
                style={{ width: "18rem", backgroundColor: "#F0E3CA" }}
              >
                <Link key={games.id} to={`/gamedetail/${games.id}`}>
                  <img
                    src={games.background_image}
                    className="card-img-top swing"
                    style={{ height: "18rem" }}
                    alt="Game poster"
                  />
                </Link>

                <div
                  className="card-body"
                  style={{ backgroundColor: "#FF8303" }}
                >
                  <p className="card-text text-center" title={games.name}>
                    <strong>{games.name}</strong>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer/>
    </div>
  );
}

export default GamesList;
