import styled from "styled-components";

const Container = styled.div`
  height: max-content;
  width: 800px;
  margin: 6rem auto;
`;
const Section = styled.section`
  width: 100%;
  height: max-content;
  margin-top: 5rem; ;
`;
const Title = styled.h2`
  text-decoration: underline;
  text-align: center;
`;
const Content = styled.p`
  font-size: 1.2rem;
`;

export default function ExempleHomeContent() {
  return (
    <Container>
      <Title>GLossaire:</Title>
      <Content>
        Voici les différents exemples et ce que vous pourrez y retrouver :
        <ul>
          <li>Exemple 1 : Des requêtes basiques sur une seule table </li>
          <li>
            Exemple 2 : Des requêtes avec des opérations toujours sur une seule
            table
          </li>
          <li>Exemple 4 : Des requêtes complexes sur plusieurs tables </li>
          <li>
            Exemple 5 : C'est à vous de jouer un système de recherche avec Nom
            Prenom d'un acteur
          </li>
        </ul>
      </Content>
    </Container>
  );
}
