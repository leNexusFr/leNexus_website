import { Box, Heading, Text, Button } from "@chakra-ui/react";

function JoinUs() {
  return (
    <Box
      as="section"
      id="join"
      textAlign="center"
      py={20}
      bg="white"
      px={{ base: 4, md: 8 }}
      aria-label="Section pour rejoindre la communauté Le Nexus"
    >
      <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
        Rejoindre la communauté
      </Heading>
      <Text fontSize={{ base: "md", md: "lg" }} mt={4} mb={8}>
        Nous sommes présents sur Discord, Telegram, et Twitter.
      </Text>
      <Button
        as="a"
        href="https://discord.gg/entxwA7Xda"
        target="_blank"
        rel="noopener noreferrer"
        size={{ base: "md", md: "lg" }}
        bgGradient="linear(to-r, #EB16C9, #DCEE10)"
        color="white"
        _hover={{ bgGradient: "linear(to-r, #DCEE10, #EB16C9)" }}
        aria-label="Rejoignez Le Nexus sur Discord"
      >
        Rejoignez-nous
      </Button>
    </Box>
  );
}

export default JoinUs;
