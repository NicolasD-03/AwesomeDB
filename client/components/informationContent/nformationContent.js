import styled from "styled-components";

const Container = styled.div`
  margin: 6rem 0;
  padding: 0 6.25rem;
`;
const Section = styled.section`
  width: 100%;
  height: max-content;
  margin-top: 5rem; ;
`;
const Title = styled.h2`
  text-decoration: underline;
`;
const Content = styled.p`
  font-size: 1.2rem;
`;

export default function InformationContent() {
  return (
    <Container>
      <Section>
        <Title>Qui sommes-nous ?</Title>
        <Content>
          AwesomeDB est un service de développement, de maintenance de la
          pipeline CI/CD d'API pour votre entreprise ou pour vous!
        </Content>
      </Section>
      <Section>
        <Title>A qui s'adresse AwesomeDB ?</Title>
        <Content>
          AwesomeDB s'adresse à tous le monde aussi bien les particuliers que
          les entreprises. Pour l'instant AwesomeDB hébérge et gère une API crée
          par ses soins sur les films <i>Voir page exemples</i>
        </Content>
      </Section>
      <Section>
        <Title>Quels sont les services d'AwesomeDB ?</Title>
        <Content>
          Voici une liste non exhuastive des services d'AwesomeDB :
          <ul>
            <li>Développement de site</li>
            <li>
              Développement d'API personalisée avec une base de donnée existente
              ou non
            </li>
            <li>
              Développement d'appli multiplateforme :
              IOS/Android/Windows/Linux/OSX
            </li>
            <li>
              Maintenance et mise en service de serveur web/stockage/base de
              donnée et autres
            </li>
            <li>
              Intégration du pipeline CI/CD (Continuous Integration/Continuous
              Deployment)
            </li>
            <li>...</li>
          </ul>
        </Content>
      </Section>
      <Section>
        <Title>Qu'utilise AwesomeDB ?</Title>
        <Content>
          Voici une liste des technologies qu'utilise AwesomeDB :
          <br />
          Base de donnée SQL :
          <ul>
            <li>PostgreSQL</li>
            <li>Mysql</li>
          </ul>
          <br />
          Base de donnée NoSQL :
          <ul>
            <li>MongoDB</li>
            <li>Redis</li>
            <li>Cassandra</li>
          </ul>
          <br />
          Site web front :
          <ul>
            <li>NextJS</li>
            <li>ReactJS</li>
            <li>HTML/JS vanilla</li>
          </ul>
          <br />
          Style :
          <ul>
            <li>StyledComponents</li>
            <li>TailwindCSS</li>
            <li>CSS vanilla</li>
          </ul>
          <br />
          Application multiplateforme :
          <ul>
            <li>ReactNative</li>
            <li>ElectronJS</li>
            <li>C++/Java</li>
          </ul>
          <br />
          Coté site & API serveur :
          <ul>
            <li>NodeJS (NextJS/ExpressJS/Fastify)</li>
            <li>PHP (Laravel/Symfony )</li>
          </ul>
          <br />
          Serveur :
          <ul>
            <li>NodeJS</li>
            <li>Docker</li>
          </ul>
        </Content>
      </Section>
    </Container>
  );
}
