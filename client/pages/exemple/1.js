import Head from "next/head";
import { Next, Container } from "../../components/exempleControl";
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

export default function Exemples({ data }) {
  const req4 =
    "SELECT Titre_Original, Genres FROM table_films WHERE Durée <= 0";
  return (
    <>
      <Head>
        <title>Exemple 1</title>
      </Head>
      <ExempleHeader>Exemple 1</ExempleHeader>
      <HeaderContent>
        Bienvenue sur l'exemple 1 <br /> Ici vous retrouverez des reqête basique
        !
      </HeaderContent>

      <ExempleContainer>
        <Title>Requete pour récupérer les films commencent par "The"</Title>
        <p>Code :</p>
        <Code>
          SELECT Titre_Original FROM table_films WHERE Titre_Original LIKE
          'The%' LIMIT 10
        </Code>
        <ResultList>
          <ResultContent>
            <ResultTitle>Titres :</ResultTitle>
            <ul>
              {data.req1.map((item) => (
                <li>{item.Titre_Original}</li>
              ))}
            </ul>
          </ResultContent>
        </ResultList>
      </ExempleContainer>

      <ExempleContainer>
        <Title>
          Requete pour récupérer tous les acteurs commencent par "Bruce"
        </Title>
        <p>Code :</p>
        <Code>
          SELECT Distribution FROM table_distributions WHERE Distribution LIKE
          'Bruce%' GROUP BY Distribution LIMIT 10
        </Code>
        <ResultList>
          <ResultContent>
            <ResultTitle>Distributions :</ResultTitle>
            <ul>
              {data.req2.map((item) => (
                <li>{item.Distribution}</li>
              ))}
            </ul>
          </ResultContent>
        </ResultList>
      </ExempleContainer>

      <ExempleContainer>
        <Title>
          Requete pour récupérer les titres et langues des films qui sont du
          genre "Action" et qui n'ont pas été tourné dans la langue anglaise
        </Title>
        <p>Code :</p>
        <Code>
          SELECT Titre_Original, Langue_Originale FROM table_films WHERE Genres
          LIKE '%Action%' AND Langue_Originale != 'en' LIMIT 10
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
          <ResultContent>
            <ResultTitle>Langues :</ResultTitle>
            <ul>
              {data.req3.map((item) => (
                <li>{item.Langue_Originale}</li>
              ))}
            </ul>
          </ResultContent>
        </ResultList>
      </ExempleContainer>

      <ExempleContainer>
        <Title>
          Requete pour récupérer les titres et genres des films qui n'ont pas de
        </Title>
        <p>Code :</p>
        <Code>{req4}</Code>
        <ResultList>
          <ResultContent>
            <ResultTitle>Titres :</ResultTitle>
            <ul>
              {data.req4.map((item) => (
                <li>{item.Titre_Original}</li>
              ))}
            </ul>
          </ResultContent>
          <ResultContent>
            <ResultTitle>Genres :</ResultTitle>
            <ul>
              {data.req4.map((item) => (
                <li>{item.Genres}</li>
              ))}
            </ul>
          </ResultContent>
        </ResultList>
      </ExempleContainer>

      <Container>
        <Next nextPage="/exemple/2" />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_ADDRESS}/1`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
