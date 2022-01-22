import styled from "styled-components";

const Container = styled.div`
  height: 100px;
  width: 500px;
  margin: 0 auto;
`;

const Content = styled.p`
  text-align: center;
  font-size: 1.3rem;
`;

export default function HeaderContent({ children }) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}
