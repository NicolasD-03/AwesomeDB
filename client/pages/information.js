import Head from "next/head";
import InformationHeader from "../components/informationHeader/informationHeader";
import InformationContent from "../components/informationContent/nformationContent";
export default function Informations() {
  return (
    <>
      <Head>
        <title>Informations</title>
      </Head>
      <InformationHeader />
      <InformationContent />
    </>
  );
}
