import styled from "styled-components";

const Text = styled.p`
  width: 100%;
  height: 100%;
  line-break: normal;
  text-align: center;
  font-size: 0.98rem;
`;

export default function CardText({ children }) {
  return <Text>{children}</Text>;
}
