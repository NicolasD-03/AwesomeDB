import styled from "styled-components";

const Backgroud = styled.div`
  background-color: #101010;
  width: 100%;
  height: 200px;
`;

const Title = styled.h2`
  color: #ffffff;
  font-size: 1.75rem;
  font-weight: bold;
  margin: 0;
`;

const Header = () => {
  return (
    <Backgroud>
      <Title>AwesomeDB</Title>
    </Backgroud>
  );
};

export default Header;
