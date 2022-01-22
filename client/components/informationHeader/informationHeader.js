import styled from "styled-components";

const Header = styled.div`
  width: 500px;
  height: max-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 40px auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

const Content = styled.p`
  text-align: center;
  font-size: 1.5rem;
`;

export default function InformationHeader() {
  return (
    <Header>
      <Title>Information</Title>
      <Content>
        Vous trouverez ici toutes les informations concernant AwesomeDB
      </Content>
    </Header>
  );
}
