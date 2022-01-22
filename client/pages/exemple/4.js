import Head from "next/head";
import styled from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from "react-loader-spinner";
import { Next, Previous } from "../../components/exempleControl";
import { useState } from "react";
import * as palette from "/libs/Variables.js";
import Header from "../../components/exempleHeader";
import CodeDiplay from "../../components/codeDisplay";

const ContentDisplay = styled.div`
  margin-top: 50px;
  & > p {
    text-align: center;
  }
`;

const DataShow = styled.div`
  width: 1000px;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`;

const Submit = styled.input`
  background-color: transparent;
  border: solid 3px ${palette.PRIMARY};
  border-radius: 10px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: ${palette.TEXT};
  margin-top: 30px;

  &:hover {
    cursor: pointer;
    background-color: ${palette.PRIMARY};
    transition: background-color 0.2s ease-in;
  }
`;

const Label = styled.label`
  font-size: 1rem;
`;

const Input = styled.input`
  margin-top: 20px;
  outline: none;
  border: none;
  width: 300px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
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

      <DataShow>
        <CodeDiplay
          code="SELECT DISTINCT count(Id_Films) as nb_films FROM table_distributions WHERE lower(distribution) = '{$actor}'"
          req="1"
        />
        <CodeDiplay
          code="SELECT table_realisateurs.Réalisateur, table_films.Titre_Original, table_films.Année_Production FROM table_distributions INNER JOIN table_films on table_distributions.Id_Films = table_films.Id_Films INNER JOIN table_realisateurs on table_films.Id_Films = table_realisateurs.Id_Films WHERE lower(distribution) = '{$actor}' ORDER BY table_films.Durée DESC LIMIT 1"
          req="2"
        />
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="actor">Entrez le nom d'un acteur</Label>
          <Input
            id="actor"
            type="text"
            value={actor}
            onChange={(e) => setActor(e.target.value)}
            required
          />
          <Submit type="submit" />
        </Form>

        {loading && (
          <TailSpin height="50" width="50" color="white" ariaLabel="loading" />
        )}
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
      </DataShow>

      <Control>
        <Previous previousPage="/exemple/3" />
      </Control>
    </>
  );
}
