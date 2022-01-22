import styled from "styled-components";

const Content = styled.div`
  width: 600px;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 40px auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
`;

export default function ExempleHeader({ children }) {
  return (
    <Content>
      <Title>{children}</Title>
    </Content>
  );
}
