import styled from "styled-components";
import { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";

const Content = styled.div`
  width: 400px;
  height: 80px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 40px auto;
`;

const Typing = styled.div`
  font-size: 2rem;
  text-align: center;
`;

export default function HomeHeader() {
  useEffect(() => {
    const typewriter = new Typewriter("#typewriter", {
      loop: true,
      delay: 75,
    });
    typewriter
      .typeString("Bienvenue sur le meilleur site de la décenie")
      .pauseFor(1200)
      .deleteAll()
      .typeString("Un site accessible à tous le monde")
      .pauseFor(1200)
      .deleteAll()
      .typeString("Une <strong>API</strong> fiable et optismée")
      .pauseFor(1200)
      .start();
  }, []);
  return (
    <Content>
      <Typing id="typewriter"></Typing>
    </Content>
  );
}
