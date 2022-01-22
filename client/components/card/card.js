import styled from "styled-components";

const CardStyles = styled.div`
  height: 600px;
  width: 350px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  color: #000000;
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin: 0 1rem;
`;

export default function Card({ children }) {
  return <CardStyles>{children}</CardStyles>;
}
