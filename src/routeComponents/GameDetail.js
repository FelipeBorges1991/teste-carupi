import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

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
    <div className="container-fluid">
      <h1 className="text-center">{state.name}</h1>
    </div>
  );
}

export default GameDetail;
