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

export default function Exemple2({ data }) {
  return (
    <>
      <Head>
        <title>Exemple 2</title>
      </Head>
      <ExempleHeader>Exemple 2</ExempleHeader>
      <HeaderContent>
        Bienvenue sur l'exemple 2 <br /> <br /> Ici vous retrouverez des reqêtes
        basiques mais avec des opérations comme des moyennes ou le nombre total
        d'un résultat !
      </HeaderContent>

      <ExempleContainer>
        <Title>
          Requete pour récupérer le nombre de Réalisateurs différents
        </Title>
        <p>Code :</p>
        <Code>
          SELECT DISTINCT count(Réalisateur) as nb_real FROM table_realisateurs
        </Code>
        <ResultList>
          <ResultContent>
            <ResultTitle>Resulat :</ResultTitle>
            <p>Nombre de Réalisateurs : {data.req1[0].nb_real}</p>
          </ResultContent>
        </ResultList>
      </ExempleContainer>

      <ExempleContainer>
        <Title>
          Requete pour récupérer les titres des films tournés en japonais dans
          l'ordre croissant de leur durée
        </Title>
        <p>Code :</p>
        <Code>
          SELECT Titre_Original FROM table_films WHERE Langue_Originale = 'ja'
          AND Durée &gt; 0 ORDER BY Durée LIMIT 10
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
          Requete pour récupérer les titres des films les plus anciens
        </Title>
        <p>Code :</p>
        <Code>
          SELECT Titre_Original FROM table_films ORDER BY Année_Production LIMIT
          10
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
          Requete pour récupérer le revenu moyen des films de genre thriller
        </Title>
        <p>Code :</p>
        <Code>
          SELECT avg(Revenus_Générés) as avg_income FROM table_films WHERE
          Genres = 'Thriller' AND Revenus_Générés &gt; 0
        </Code>
        <ResultList>
          <ResultContent>
            <ResultTitle>Resulat :</ResultTitle>
            <p>
              Revenus généré moyen (arrondi) :{" "}
              {Math.round(data.req4[0].avg_income)} $
            </p>
          </ResultContent>
        </ResultList>
      </ExempleContainer>

      <ExempleContainer>
        <Title>
          Requete pour récupérer les titres des films d'horreur dont le revenu
          est supérieur au revenu moyen des films de la base
        </Title>
        <p>Code :</p>
        <Code>
          SELECT Titre_Original FROM table_films WHERE Genres = 'Horror' AND
          Revenus_Générés &gt; (SELECT avg(Revenus_Générés) FROM table_films
          WHERE Revenus_Générés &gt; 0) LIMIT 10
        </Code>
        <ResultList>
          <ResultContent>
            <ResultTitle>Titres :</ResultTitle>
            <ul>
              {data.req5.map((item) => (
                <li>{item.Titre_Original}</li>
              ))}
            </ul>
          </ResultContent>
        </ResultList>
      </ExempleContainer>

      <Container>
        <Previous previousPage="/exemple/1" />
        <Next nextPage="/exemple/3" />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_ADDRESS}/2`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
