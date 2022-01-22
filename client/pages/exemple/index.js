import Head from "next/head";
import { Next, Previous, Container } from "../../components/exempleControl";
import ExempleHeader from "../../components/exempleHeader";
import HeaderContent from "../../components/exempleHeader/headerContent";
import ExempleHomeContent from "../../components/exempleContent/exempleHomeContent";
export default function Exemples() {
  return (
    <>
      <Head>
        <title>Exemples</title>
      </Head>
      <ExempleHeader>Exemples</ExempleHeader>
      <HeaderContent>
        Vous pouvez essayer l'API de test sur différentes donnés tels que les
        films, les acteurs et les réalisateurs
      </HeaderContent>
      <ExempleHomeContent />

      <Container>
        <Next nextPage="/exemple/1"></Next>
      </Container>
    </>
  );
}
