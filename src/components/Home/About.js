import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";

function About() {
  return (
    <Box
      id="about"
      py={20}
      px={{ base: 4, md: 8 }}
      bg="gray.50"
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="75vh"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        maxW="1200px"
        w="100%"
      >
        <Box flex="1" mr={{ md: 10 }} mb={{ base: 10, md: 0 }}>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            mb={6}
            fontWeight="bold"
            textAlign={{ base: "center", md: "left" }}
          >
            À propos de Le Nexus
          </Heading>
          <Text
            fontSize={{ base: "md", md: "md" }}
            mb={4}
            textAlign={{ base: "center", md: "left" }}
          >
            Nous sommes ravis d’annoncer la création du “Le Nexus”, un espace
            dédié à la communauté francophone au sein de l’écosystème Polkadot.
          </Text>
          <Text
            fontSize={{ base: "md", md: "md" }}
            mb={4}
            textAlign={{ base: "center", md: "left" }}
          >
            Nous pensons que l’avenir d’OpenGov et de Polkadot repose sur la
            capacité des communautés locales à s’organiser, s’éduquer et se
            synchroniser, afin de devenir des acteurs clé et des forces de
            proposition au sein de l’écosystème.
          </Text>
          <Text
            fontSize={{ base: "md", md: "md" }}
            mb={4}
            textAlign={{ base: "center", md: "left" }}
          >
            Le Nexus a été créé avec l'ambition de devenir à la fois une force
            d’influence majeure dans OpenGov et un modèle inspirant pour
            d’autres communautés, les encourageant à suivre le même chemin.
          </Text>
          <Text
            fontSize={{ base: "md", md: "md" }}
            mb={4}
            textAlign={{ base: "center", md: "left" }}
          >
            Fortement inspiré par ChaosDAO, mais avec une approche plus ouverte,
            Le Nexus est conçu pour être dirigé par sa communauté. Sa
            trajectoire sera déterminée par ses membres, tout en reposant sur
            des objectifs identifiés dès sa création.
          </Text>
        </Box>

        <Box flex="1" textAlign="center">
          <Image
            src="https://xcrom1.4everland.store/background/polkadot/2909bc32cf4455aea0cbf00e4a3eaeec4d456583-1528x1144.webp"
            alt="Polkadot illustration"
            borderRadius="lg"
            boxShadow="lg"
            maxH={{ base: "200px", md: "400px" }}
            objectFit="cover"
            mx="auto"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default About;
