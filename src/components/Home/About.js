import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";

function About() {
  return (
    <Box
      as="section"
      id="about"
      py={20}
      px={{ base: 4, md: 8 }}
      bg="gray.50"
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="75vh"
      aria-label="Section à propos de Le Nexus"
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
            Nous sommes enchantés de vous annoncer la création de "Le Nexus", un
            espace entièrement dédié à la communauté francophone au sein de
            l’écosystème Polkadot.
          </Text>
          <Text
            fontSize={{ base: "md", md: "md" }}
            mb={4}
            textAlign={{ base: "center", md: "left" }}
          >
            Nous sommes convaincus que l'avenir de Polkadot et de son modèle
            OpenGov repose sur la capacité des communautés locales à
            s'organiser, s'éduquer et se coordonner pour devenir des acteurs
            clés et des forces de proposition incontournables dans cet univers.
          </Text>
          <Text
            fontSize={{ base: "md", md: "md" }}
            mb={4}
            textAlign={{ base: "center", md: "left" }}
          >
            Le Nexus a été fondé avec une ambition claire : devenir non
            seulement une force d'influence majeure dans OpenGov, mais aussi un
            modèle inspirant pour les autres communautés, les incitant à
            emboîter le pas.
          </Text>
          <Text
            fontSize={{ base: "md", md: "md" }}
            mb={4}
            textAlign={{ base: "center", md: "left" }}
          >
            Inspiré par l'esprit de ChaosDAO, mais avec une approche résolument
            plus ouverte, Le Nexus est pensé pour être dirigé par et pour la
            communauté. Ce sont ses membres qui traceront sa trajectoire, tout
            en s’appuyant sur des objectifs clairs définis dès le départ, pour
            garantir un développement cohérent et inclusif.
          </Text>
        </Box>

        <Box flex="1" textAlign="center">
          <Image
            src="https://xcrom1.4everland.store/background/polkadot/2909bc32cf4455aea0cbf00e4a3eaeec4d456583-1528x1144.webp"
            alt="Illustration de l'écosystème Polkadot, représentant la connectivité et la gouvernance décentralisée"
            borderRadius="lg"
            boxShadow="lg"
            maxH={{ base: "350px", md: "450px" }}
            objectFit="cover"
            mx="auto"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default About;
