import styled from "styled-components";

const Container = styled.div`
  width: max-content;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 40px;
`;
const Title = styled.p`
  text-align: center;
  font-size: 1.1rem;
  text-decoration: underline;
`;
export default function CodeDiplay({ code, req }) {
  return (
    <Container>
      <Title>Voici le code pour la requête {req}: </Title>
      <code>{code}</code>
    </Container>
  );
}
