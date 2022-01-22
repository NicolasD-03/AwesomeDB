import Head from "next/head";
import HomeHeader from "../components/homeHeader";
import Card from "../components/card/card";
import CardList from "../components/card/cardList.js";
export default function Home() {
  return (
    <>
      <Head>
        <title>Accueil</title>
      </Head>
      <HomeHeader />
      <CardList>
        <Card>UwU</Card>
        <Card>UwU</Card>
        <Card>UwU</Card>
      </CardList>
    </>
  );
}
