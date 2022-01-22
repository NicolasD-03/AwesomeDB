import Link from "next/link";
import styled from "styled-components";
import * as palette from "/libs/Variables.js";

const Control = styled.div`
  background-color: ${palette.PRIMARY};
  width: max-content;
  padding: 1rem;
  border-radius: 1rem;
  margin: 0 1rem;

  &:hover {
    filter: brightness(0.9);
  }
`;

export function Next({ nextPage }) {
  return (
    <Control>
      <Link href={nextPage}>
        <a>Aller à l'exemple suivant</a>
      </Link>
    </Control>
  );
}

export function Previous({ previousPage }) {
  return (
    <Control>
      <Link href={previousPage}>
        <a>Retour à l'exemple précédent</a>
      </Link>
    </Control>
  );
}
