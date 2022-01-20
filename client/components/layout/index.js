import styled from "styled-components";

import Header from "./header";
import Footer from "./footer";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export default function Layout({ children }) {
  return (
    <Root>
      <Header />
      <main>{children}</main>
      <Footer />
    </Root>
  );
}
