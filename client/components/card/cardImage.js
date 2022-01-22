import styled from "styled-components";

const Images = styled.div`
  width: 260px;
  height: 260px;
`;

export default function CardImages({ children }) {
  return <Images>{children}</Images>;
}
