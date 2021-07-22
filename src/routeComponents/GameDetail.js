import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../apis/index";

const myKey = "b46ede88b8a24c799f1b5756b13deb22";

function GameDetail() {
  const [state, setState] = useState({
    name: "",
    background_image: "",
    developers: "",
    platforms: "",
  });

  const { id } = useParams();

  useEffect(() => {
    async function fetchOneGame() {
      try {
        const response = await api.get(`/games/${id}?key=${myKey}`);

        console.log(response);

        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchOneGame();
  }, [id]);

  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={state.background_image} alt="Game poster" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <p className="card-title">
              <strong>Nome: </strong>
              {state.name}
            </p>

            <p className="card-text">Categorias</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameDetail;
