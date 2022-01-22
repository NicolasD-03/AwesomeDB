import styled from "styled-components";

const Title = styled.h2`
  text-decoration: underline;
  font-size: 1.6rem;
  font-weight: normal;
`;

export default function CardTitle({ children }) {
  return <Title>{children}</Title>;
}
