import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../apis/index";

const myKey = "b46ede88b8a24c799f1b5756b13deb22";

function GameDetail() {
  const [game, setGame] = useState({
    name: "",
    background_image: "",
    developers: [],
    platforms: [],
    genres: [],
  });

  const { id } = useParams();

  useEffect(() => {
    async function fetchOneGame() {
      try {
        const response = await api.get(`/games/${id}?key=${myKey}`);

        console.log(response);

        setGame({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchOneGame();
  }, [id]);

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h1 className="mt-2">
        <strong>{game.name}</strong>
      </h1>
      <img
        className="w-75 h-50 mt-2 img-thumbnail"
        style={{ backgroundColor: "#FF8303" }}
        src={game.background_image}
        alt="Game poster"
      ></img>
      <div className="card mt-3" style={{ backgroundColor: "#FF8303" }}>
        <div className="card-body">
          <div className="d-flex align-items-center">
            <p className="m-2">
              <strong>Categorias:&nbsp;</strong>
            </p>
            {game.genres.map((item) => (
              <p className="badge badge-dark bg-primary m-2" key={item.id}>
                {item.name}&nbsp;
              </p>
            ))}
          </div>
          <div className="d-flex">
            <p className="m-2">
              <strong>Plataformas:&nbsp;</strong>
            </p>
            {game.platforms.map((item) => (
              <p
                className="badge badge-dark bg-primary m-2"
                key={item.platform}
              >
                {item.platform.name}&nbsp;
              </p>
            ))}
          </div>
          <div className="d-flex">
            <p className="m-2">
              <strong>Desenvolvedor(es):&nbsp;</strong>
            </p>
            {game.developers.map((item) => (
              <p className="badge badge-dark bg-primary m-2" key={item.id}>
                {item.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameDetail;
