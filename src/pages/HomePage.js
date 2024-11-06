import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
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
    <Box as="main">
      <Helmet>
        <title>Le Nexus DAO - Blockchain, web3 & Polkadot</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Rejoignez Le Nexus DAO, une communauté dédiée à la blockchain, au web3 et à l'écosystème Polkadot. Découvrez nos objectifs, notre équipe et comment vous pouvez participer."
        />
        <meta name="keywords" content="Le Nexus, DAO, Blockchain, web3, Polkadot, communauté" />

        <meta property="og:title" content="Le Nexus DAO - Blockchain, web3 & Polkadot" />
        <meta
          property="og:description"
          content="Rejoignez Le Nexus DAO, une communauté dédiée à la blockchain, au web3 et à l'écosystème Polkadot."
        />
        <meta
          property="og:image"
          content="https://lenexus.4everland.store/background/Previews_LeNexus.png"
        />
        <meta property="og:url" content="https://lenexus.org" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Le Nexus DAO - Blockchain, web3 & Polkadot" />
        <meta
          name="twitter:description"
          content="Rejoignez Le Nexus DAO, une communauté dédiée à la blockchain, au web3 et à l'écosystème Polkadot."
        />
        <meta
          name="twitter:image"
          content="https://lenexus.4everland.store/background/Previews_LeNexus.png"
        />

        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "Le Nexus DAO",
              "url": "https://lenexus.org",
              "description": "Une communauté francophone dédiée à la blockchain, au web3, et à Polkadot.",
              "logo": "https://lenexus.4everland.store/le_nexus/Public%20-%20Le%20Nexus%20(brandkit)/logo%20(empty%20_Le%20Nexus_)/Color/transparent/logo-zoom-color-transparent-lenexus.png",
              "sameAs": ["https://x.com/lenexus_org"]
            }
          `}
        </script>
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
