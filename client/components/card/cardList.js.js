import styled from "styled-components";

const CardListStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 2rem 0;
`;

export default function CardList({ children }) {
  return <CardListStyles>{children}</CardListStyles>;
}
