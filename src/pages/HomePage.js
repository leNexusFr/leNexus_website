import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import {
  Navbar,
  Footer,
  Hero,
  About,
  Objectives,
  Teams,
  JoinUs,
} from "../components";

function HomePage() {
  return (
    <Box>
      <Helmet>
        <title>Le Nexus DAO - Blockchain, web3 & Polkadot</title>
        <meta
          name="description"
          content="Rejoignez Le Nexus DAO, une communauté dédiée à la blockchain, au web3 et à l'écosystème Polkadot. Découvrez nos objectifs, notre équipe et comment vous pouvez participer."
        />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Objectives />
      <Teams />
      <JoinUs />
      <Footer />
    </Box>
  );
}

export default HomePage;
