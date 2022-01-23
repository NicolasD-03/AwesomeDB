import Head from "next/head";
import { useState, useRef } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from "react-loader-spinner";
import { Next, Previous, Container } from "../../components/exempleControl";
import ExempleHeader from "../../components/exempleHeader";
import HeaderContent from "../../components/exempleHeader/headerContent";
import {
  ExempleContainer,
  Title,
  Code,
  ResultList,
  ResultTitle,
  ResultContent,
} from "../../components/exempleContent/exempleContent";
import styled from "styled-components";
import * as palette from "/libs/Variables.js";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
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
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const actorNameRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (actorNameRef !== null && actorNameRef.current.value) {
      setData(null);
      setLoading(true);
      const res = await fetch(
        `${process.env.API_ADDRESS}/4?actor=${actorNameRef.current.value}`
      );
      if (!res.ok) {
        setError("Désolé nous ne pouvons pas traiter votre requête");
        setLoading(false);
        return;
      }
      setData(await res.json());

      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Exemple 4</title>
      </Head>

      <ExempleHeader>Exemple 4</ExempleHeader>
      <HeaderContent>
        Bienvenue sur l'exemple 4 <br /> <br /> Ici c'est à vous de jouer,
        entrez le prenom et nom d'un acteur et voyez la magie opérer !
      </HeaderContent>

      <ExempleContainer>
        <Title>
          Requête pour récupérer le nombre de films tournés par l'acteur
        </Title>
        <p>Code :</p>
        <Code>
          SELECT DISTINCT count(Id_Films) as nb_films FROM table_distributions
          WHERE lower(distribution) = '$actor'
        </Code>
      </ExempleContainer>

      <ExempleContainer>
        <Title>
          Requête pour récupérer le titre l'année et le réalisateur du plus long
          film tourné par cet acteur
        </Title>
        <p>Code :</p>
        <Code>
          SELECT table_realisateurs.Réalisateur, table_films.Titre_Original,
          table_films.Année_Production FROM table_distributions INNER JOIN
          table_films on table_distributions.Id_Films = table_films.Id_Films
          INNER JOIN table_realisateurs on table_films.Id_Films =
          table_realisateurs.Id_Films WHERE lower(distribution) = '$actor' ORDER
          BY table_films.Durée DESC LIMIT 1
        </Code>
      </ExempleContainer>

      <Form onSubmit={handleSubmit}>
        <Label htmlFor="actor">Entrez le prénom et nom d'un acteur</Label>
        <Input id="actor" type="text" ref={actorNameRef} required />
        <Submit type="submit" value="Chercher" />
      </Form>

      <ExempleContainer>
        {loading && (
          <TailSpin height="50" width="50" color="white" ariaLabel="loading" />
        )}
        {error && <p>{error}</p>}
        {data && (
          <p>
            Nombre de film tourné(e) par {actorNameRef.current.value} :{" "}
            {data.req1[0].nb_films}
          </p>
        )}
        {data && data.req1[0].nb_films > 0 && (
          <p>
            Le film le plus long joué(e) par {actorNameRef.current.value} est
            {data.req2[0].Titre_Original} réalisé(e) par
            {data.req2[0].Réalisateur} en {data.req2[0].Année_Production}
          </p>
        )}
      </ExempleContainer>

      <Container>
        <Previous previousPage="/exemple/3" />
      </Container>
    </>
  );
}
