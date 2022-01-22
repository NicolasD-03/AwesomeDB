import Head from "next/head";
import HomeHeader from "../components/homeHeader";
import Card from "../components/card/card";
import CardList from "../components/card/cardList.js";
import CardImages from "../components/card/cardImage";
import CardTitle from "../components/card/cardTitle";
import CardText from "../components/card/cardText";
import Device from "../public/images/Devices-amico.svg";
import Security from "../public/images/Mobile encryption-amico.svg";
import Speed from "../public/images/Fast loading-amico.svg";
export default function Home() {
  return (
    <>
      <Head>
        <title>Accueil</title>
      </Head>
      <HomeHeader />
      <CardList>
        <Card>
          <CardImages>
            <Device />
          </CardImages>
          <CardTitle>Accessibilité</CardTitle>
          <CardText>
            Un <strong>site</strong> et une <strong>API</strong> accessible à
            tous et toutes, besoin d'une recherche et vous êtes sur votre mobile
            ? <br /> Pas de soucis AwesomeDB est là !
          </CardText>
        </Card>
        <Card>
          <CardImages>
            <Security />
          </CardImages>
          <CardTitle>Sécurité</CardTitle>
          <CardText>
            Un site <strong>sécurisé</strong> nous gardons aucune données !
            <br /> Une API <strong>fiable</strong> est sécurisée vous pouvez
            l'utiliser sans vous souciez de vos donnés
          </CardText>
        </Card>
        <Card>
          <CardImages>
            <Speed />
          </CardImages>
          <CardTitle>Disponibilité</CardTitle>
          <CardText>
            Un site <strong>disponible</strong> à tous moment et optimisé pour
            toutes les connexion grâce au{" "}
            <a href="https://www.cloudflare.com/fr-fr/learning/performance/static-site-generator/">
              SSG
            </a>
            <br />
            Une API opérationel à 99.9% ainsi qu'une redondance qui permet de
            conserver une API disponible à tout moment
          </CardText>
        </Card>
      </CardList>
    </>
  );
}
