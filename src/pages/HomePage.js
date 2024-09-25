import { Box } from "@chakra-ui/react";
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
