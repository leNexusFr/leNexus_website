import { Box, Heading, Button } from "@chakra-ui/react";

function Hero() {
  return (
    <Box
      h={{ base: "60vh", md: "50vh" }}
      bgImage="url('https://lenexus.4everland.store/background/back_lenexus_10.webp')"
      bgSize="cover"
      bgPosition="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color="white"
      textAlign="center"
      mt="80px"
    >
      <Heading fontSize={{ base: "2xl", md: "5xl" }} fontWeight="bold">
        Le Nouveau Phare Francophone de Polkadot !
      </Heading>
      <Button
        as="a"
        href="https://discord.gg/entxwA7Xda"
        target="_blank"
        rel="noopener noreferrer"
        mt={8}
        size={{ base: "md", md: "md" }}
        bgGradient="linear(to-r, #EB16C9, #DCEE10)"
        color="white"
        _hover={{ bgGradient: "linear(to-r, #DCEE10, #EB16C9)" }}
      >
        Rejoindre le Nexus
      </Button>
    </Box>
  );
}

export default Hero;
