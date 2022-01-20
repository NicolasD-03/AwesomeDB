import Head from "next/head";
import styled from "styled-components";
import { Next, Previous } from "../../components/exempleControl";
import Header from "../../components/exempleHeader";
import CodeDiplay from "../../components/codeDisplay";
import { useState } from "react";

const ContentDisplay = styled.div`
  margin-top: 50px;
  & > p {
    text-align: center;
  }
`;

const DataShow = styled.div`
  width: max-content;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Control = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 5rem auto;
`;
export default function Exemple2() {
  const [actor, setActor] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (actor) {
      setData(null);
      setLoading(true);
      const res = await fetch(
        `http://awesomedb.xyz/api/v1/exemple/4?actor=${actor}`
      );
      setData(await res.json());
      setLoading(false);
    }
  };
  return (
    <>
      <Head>
        <title>Exemples 4</title>
      </Head>
      <Header
        title="Exemple 4"
        text="Cette exemple est là pour vous montrez des requêtes grâce aux données de l'utilisateur !"
      />
      <form onSubmit={handleSubmit}>
        <label htmlFor="actor">Entrez le nom d'un acteur</label>
        <input
          id="actor"
          type="text"
          value={actor}
          onChange={(e) => setActor(e.target.value)}
          required
        />
        <input type="submit" />
      </form>

      {loading && <p>Chargement</p>}
      {data && (
        <p>
          Nombre de film tourné par {actor} : {data.req1[0].nb_films}
        </p>
      )}
      {data && data.req1[0].nb_films > 0 && (
        <p>
          Le film le plus long joué par {actor} est{" "}
          {data.req2[0].Titre_Original} réalisé par {data.req2[0].Réalisateur}{" "}
          en {data.req2[0].Année_Production}
        </p>
      )}

      <Control>
        <Previous previousPage="/exemple/3" />
      </Control>
    </>
  );
}
