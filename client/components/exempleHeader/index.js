import styled from "styled-components";

const Container = styled.div`
  width: 800px;
  height: 200px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainTitle = styled.h1`
  text-decoration: underline;
  font-weight: bold;
  font-size: 2rem;
`;

const Content = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

export default function Header({ title, text }) {
  return (
    <Container>
      <MainTitle>{title}</MainTitle>
      <Content>{text}</Content>
    </Container>
  );
}
