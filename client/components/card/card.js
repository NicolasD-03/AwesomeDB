import styled from "styled-components";
import * as palette from "/libs/Variables.js";

const CardStyles = styled.div`
  height: 500px;
  width: 300px;
  border: solid 2px ${palette.PRIMARY};
  box-shadow: 2px 2px 4px ${palette.PRIMARY};
  border-radius: 10px;
  color: ${palette.TEXT};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  margin: 2rem;
`;

export default function Card({ children }) {
  return <CardStyles>{children}</CardStyles>;
}
