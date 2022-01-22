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

export default function Exemple2({ data }) {
  return (
    <>
      <Head>
        <title>Exemples 2</title>
      </Head>
      <Header
        title="Exemple 2"
        text="Cette exemple est là pour vous montrez des requêtes avec conditions et avec des opérations !"
      />
      <ContentDisplay>
        <CodeDiplay
          code="SELECT DISTINCT count(Réalisateur) as nb_real FROM table_realisateurs"
          req="1"
        />
        <p>Résultat : </p>
        <DataShow>
          <p>Nombre de Réalisateur : {data.req1[0].nb_real}</p>
        </DataShow>
      </ContentDisplay>

      <hr />

      <ContentDisplay>
        <CodeDiplay
          code="SELECT Titre_Original FROM table_films WHERE Langue_Originale = 'ja' AND Durée > 0 ORDER BY Durée LIMIT 10"
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
          code="SELECT Titre_Original FROM table_films ORDER BY Année_Production LIMIT 10"
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
          code="SELECT avg(Revenus_Générés) as avg_income FROM table_films WHERE Genres = 'Thriller' AND Revenus_Générés > 0"
          req="4"
        />
        <p>Résultat : </p>
        <DataShow>
          <p>Revenus généré : {data.req4[0].avg_income}$</p>
        </DataShow>
      </ContentDisplay>

      <hr />

      <ContentDisplay>
        <CodeDiplay
          code="SELECT Titre_Original FROM table_films WHERE Genres = 'Horror' AND Revenus_Générés > (SELECT avg(Revenus_Générés) FROM table_films WHERE Revenus_Générés > 0) LIMIT 10"
          req="5"
        />
        <p>Résultat : </p>
        <DataShow>
          <ul>
            <p>Titre :</p>
            {data.req5.map((item) => (
              <li>{item.Titre_Original}</li>
            ))}
          </ul>
        </DataShow>
      </ContentDisplay>

      <Control>
        <Previous previousPage="/exemple" />
        <Next nextPage="/exemple/3" />
      </Control>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://awesomedb.xyz/api/v1/exemple/2");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
