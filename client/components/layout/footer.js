import styled from "styled-components";

const FooterContent = styled.div`
  padding-left: 6.25rem;
  padding-right: 6.25rem;
  margin-top: auto;
  margin-bottom: 1rem;
  height: 50px;
`;

const Link = styled.a`
  text-decoration: underline;
`;

const Footer = () => {
  return (
    <FooterContent>
      <p>
        Made by Nicolas with ❤️ for &nbsp;
        <Link href="https://www.lycee-louis-vincent.fr/">
          Lycée Louis-Vincent
        </Link>
      </p>
    </FooterContent>
  );
};

export default Footer;
