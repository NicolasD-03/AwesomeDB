import Head from "next/head";
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

export default function Exemple3({ data }) {
  return (
    <>
      <Head>
        <title>Exemple 3</title>
      </Head>

      <ExempleHeader>Exemple 3</ExempleHeader>
      <HeaderContent>
        Bienvenue sur l'exemple 3 <br /> <br /> Ici vous retrouverez des
        requêtes complexes sur plusieurs bases !
      </HeaderContent>

      <ExempleContainer>
        <Title>
          Requete pour récupérer le réalisateur ayant rapporté le plus d'argent
          sur un film
        </Title>
        <p>Code :</p>
        <Code>
          SELECT Réalisateur, table_films.Revenus_Générés FROM
          table_realisateurs INNER JOIN table_films on
          table_realisateurs.Id_Films = table_films.Id_Films ORDER BY
          table_films.Revenus_Générés DESC LIMIT 1
        </Code>
        <ResultList>
          <ResultContent>
            <ResultTitle>Resulat :</ResultTitle>
            <p>Réalisateur : {data.req1[0].Réalisateur}</p>
            <p>Revenus générés : {data.req1[0].Revenus_Générés} $</p>
          </ResultContent>
        </ResultList>
      </ExempleContainer>

      <ExempleContainer>
        <Title>
          Requete pour récupérer les films ayant "Bruce Willis" comme acteur
        </Title>
        <p>Code :</p>
        <Code>
          SELECT Titre_Original FROM table_films INNER JOIN table_distributions
          on table_films.Id_Films = table_distributions.Id_Films WHERE
          table_distributions.Distribution = 'Bruce Willis' LIMIT 10
        </Code>
        <ResultList>
          <ResultContent>
            <ResultTitle>Titres :</ResultTitle>
            <ul>
              {data.req2.map((item) => (
                <li>{item.Titre_Original}</li>
              ))}
            </ul>
          </ResultContent>
        </ResultList>
      </ExempleContainer>

      <ExempleContainer>
        <Title>
          Requete pour récupérer les films ayant "Luc Besson" comme réalisateur
          et dont la durée est supérieur à 2H
        </Title>
        <p>Code :</p>
        <Code>
          SELECT Titre_Original FROM table_films INNER JOIN table_realisateurs
          on table_films.Id_Films = table_realisateurs.Id_Films WHERE
          table_realisateurs.Réalisateur = 'Luc Besson' AND table_films.Durée >
          60*2 LIMIT 10
        </Code>
        <ResultList>
          <ResultContent>
            <ResultTitle>Titres :</ResultTitle>
            <ul>
              {data.req3.map((item) => (
                <li>{item.Titre_Original}</li>
              ))}
            </ul>
          </ResultContent>
        </ResultList>
      </ExempleContainer>

      <ExempleContainer>
        <Title>
          Requete pour récupérer les films faisant partie de la catégorie
          "Comedy" où jouent l'actrice "Cameron Diaz" et tournés après le film
          "Shrek" dont elle prête sa voix
        </Title>
        <p>Code :</p>
        <Code>
          SELECT Titre_Original FROM table_films INNER JOIN table_distributions
          on table_films.Id_Films = table_distributions.Id_Films WHERE
          table_distributions.Distribution = 'Cameron Diaz' AND
          table_films.Genres = 'Comedy' AND table_films.Année_Production >
          (SELECT Année_Production FROM table_films WHERE Titre_Original =
          'Shrek') LIMIT 10
        </Code>
        <ResultList>
          <ResultContent>
            <ResultTitle>Titres :</ResultTitle>
            <ul>
              {data.req4.map((item) => (
                <li>{item.Titre_Original}</li>
              ))}
            </ul>
          </ResultContent>
        </ResultList>
      </ExempleContainer>

      <Container>
        <Previous previousPage="/exemple/2" />
        <Next nextPage="/exemple/4" />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_ADDRESS}/3`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
