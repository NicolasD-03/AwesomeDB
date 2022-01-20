import Head from "next/head";
import styled from "styled-components";
import { Next, Previous } from "../../components/exempleControl";
import Header from "../../components/exempleHeader";
import CodeDiplay from "../../components/codeDisplay";

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

export default function Exemple3({ data }) {
  return (
    <>
      <Head>
        <title>Exemples 3</title>
      </Head>
      <Header
        title="Exemple 3"
        text="Cette exemple est là pour vous montrez des requêtes sur plusieurs bases !"
      />
      <ContentDisplay>
        <CodeDiplay
          code="SELECT Réalisateur, table_films.Revenus_Générés FROM table_realisateurs INNER JOIN table_films on table_realisateurs.Id_Films = table_films.Id_Films ORDER BY table_films.Revenus_Générés DESC LIMIT 1"
          req="1"
        />
        <p>Résultat : </p>
        <DataShow>
          <p>Réalisateur : {data.req1[0].Réalisateur}</p>
          <p>Revenus générés : {data.req1[0].Revenus_Générés}</p>
        </DataShow>
      </ContentDisplay>

      <hr />

      <ContentDisplay>
        <CodeDiplay
          code="SELECT Titre_Original FROM table_films INNER JOIN table_distributions on table_films.Id_Films = table_distributions.Id_Films WHERE table_distributions.Distribution = 'Bruce Willis' LIMIT 10"
          req="2"
        />
        <p>Résultat : </p>
        <DataShow>
          <ul>
            <p>Titre :</p>
            {data.req2.map((item) => (
              <li>{item.Titre_Original}</li>
            ))}
          </ul>
        </DataShow>
      </ContentDisplay>

      <hr />

      <ContentDisplay>
        <CodeDiplay
          code="SELECT Titre_Original FROM table_films INNER JOIN table_realisateurs on table_films.Id_Films = table_realisateurs.Id_Films WHERE table_realisateurs.Réalisateur = 'Luc Besson' AND table_films.Durée > 60*2 LIMIT 10"
          req="3"
        />
        <p>Résultat : </p>
        <DataShow>
          <ul>
            <p>Titre :</p>
            {data.req3.map((item) => (
              <li>{item.Titre_Original}</li>
            ))}
          </ul>
        </DataShow>
      </ContentDisplay>

      <hr />

      <ContentDisplay>
        <CodeDiplay
          code="SELECT Titre_Original FROM table_films INNER JOIN table_distributions on table_films.Id_Films = table_distributions.Id_Films WHERE table_distributions.Distribution = 'Cameron Diaz' AND table_films.Genres = 'Comedy' AND table_films.Année_Production > (SELECT Année_Production FROM table_films WHERE Titre_Original = 'Shrek') LIMIT 10"
          req="4"
        />
        <p>Résultat : </p>
        <DataShow>
          <ul>
            <p>Titre :</p>
            {data.req3.map((item) => (
              <li>{item.Titre_Original}</li>
            ))}
          </ul>
        </DataShow>
      </ContentDisplay>

      <hr />

      <Control>
        <Previous previousPage="/exemple/2" />
        <Next nextPage="/exemple/4" />
      </Control>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://awesomedb.xyz/api/v1/exemple/3");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
