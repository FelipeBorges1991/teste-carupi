import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
      <h1
        className="mb-3"
        style={{
          color: "#1B1A17",
          fontWeight: "bolder",
        }}
      >
        Teste de Conhecimento Específico - FRONTEND
      </h1>
      <h3 className="mb-5" style={{ color: "#1B1A17" }}>
        <i>Empresa: CARUPI</i>
      </h3>
      <div
        className="btn-group btn-group-lg container d-flex justify-content-center"
        role="group"
        aria-label="Basic example"
      >
        <Link to={"/gameslist"}>
          <button
            type="button"
            className="btn"
            style={{
              fontWeight: "bolder",
              backgroundColor: "#FF8303",
              color: "#1B1A17",
            }}
          >
            Entre Aqui
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
