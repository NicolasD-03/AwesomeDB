import Head from "next/head";
import styled from "styled-components";
import { Next } from "../../components/exempleControl";
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

export default function Exemples({ data }) {
  console.log(data);
  return (
    <>
      <Head>
        <title>Exmples</title>
      </Head>
      <Header
        title="Exemple 1"
        text="Cette exemple est là pour vous montrez des requêtes basiques !"
      />
      <ContentDisplay>
        <CodeDiplay
          code="SELECT Titre_Original FROM table_films WHERE Titre_Original LIKE 'The%' LIMIT 10"
          req="1"
        />
        <p>Résultat : </p>
        <DataShow>
          <ul>
            <p>Titre : </p>
            {data.req1.map((item) => (
              <li>{item.Titre_Original}</li>
            ))}
          </ul>
        </DataShow>
      </ContentDisplay>

      <hr />

      <ContentDisplay>
        <CodeDiplay
          code="SELECT Distribution FROM table_distributions WHERE Distribution LIKE 'Bruce%' GROUP BY Distribution LIMIT 10"
          req="2"
        />
        <p>Résultat : </p>
        <DataShow>
          <ul>
            <p>Distribution :</p>
            {data.req2.map((item) => (
              <li>{item.Distribution}</li>
            ))}
          </ul>
        </DataShow>
      </ContentDisplay>

      <hr />

      <ContentDisplay>
        <CodeDiplay
          code="SELECT Titre_Original, Langue_Originale FROM table_films WHERE Genres LIKE '%Action%' AND Langue_Originale != 'en' LIMIT 10"
          req="3"
        />
        <p>Résultat : </p>
        <DataShow>
          <div>
            <p>Titre : </p>
            <ul>
              {data.req3.map((item) => (
                <li>{item.Titre_Original}</li>
              ))}
            </ul>
          </div>
          <div>
            <p>Langue : </p>
            <ul>
              {data.req3.map((item) => (
                <li>{item.Langue_Originale}</li>
              ))}
            </ul>
          </div>
        </DataShow>
      </ContentDisplay>

      <hr />

      <ContentDisplay>
        <CodeDiplay
          code="SELECT Titre_Original, Genres FROM table_films WHERE Durée <= 0"
          req="4"
        />
        <p>Résultat : </p>
        <DataShow>
          <div>
            <p>Titre : </p>
            <ul>
              {data.req4.map((item) => (
                <li>{item.Titre_Original}</li>
              ))}
            </ul>
          </div>
          <div>
            <p>Genre : </p>
            <ul>
              {data.req4.map((item) => (
                <li>{item.Genres}</li>
              ))}
            </ul>
          </div>
        </DataShow>
      </ContentDisplay>

      <Control>
        <Next nextPage="/exemple/2" />
      </Control>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://awesomedb.xyz/api/v1/exemple/1");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
