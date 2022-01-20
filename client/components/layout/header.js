import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import * as palette from "/libs/Variables.js";

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  margin-top: 1.875rem;
  padding-left: 6.25rem;
  padding-right: 6.25rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const Navmenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;

const MenuItem = styled.a`
  padding: 1rem;
  margin: 0 0.25rem;
  color: ${(props) =>
    props.href === props.pathName ? palette.TEXT : "rgba(254, 252, 251, 0.5)"};
  text-decoration: ${(props) =>
    props.href === props.pathName ? "underline" : "none"};
  &:hover {
    cursor: pointer;
    color: ${(props) =>
      props.href === props.pathName
        ? palette.TEXT
        : "rgba(254, 252, 251, 0.8)"};
  }
`;

const Header = () => {
  const router = useRouter();
  return (
    <Navbar>
      <Title>Awesome DB</Title>
      <Navmenu>
        <Link href="/" passHref>
          <MenuItem pathName={router.pathname}>Accueil</MenuItem>
        </Link>
        <Link href="/information" passHref>
          <MenuItem pathName={router.pathname}>Informations</MenuItem>
        </Link>
        <Link href="/exemple" passHref>
          <MenuItem pathName={router.pathname}>Exemples</MenuItem>
        </Link>
      </Navmenu>
    </Navbar>
  );
};

export default Header;
