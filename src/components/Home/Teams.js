import {
  Box,
  Heading,
  Image,
  Text,
  VStack,
  SimpleGrid,
  Link,
  IconButton,
  GridItem,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import teamsData from "../../datas/teams_data.json";

function Teams() {
  // Vérifie combien de cartes restent sur la dernière ligne
  const cardsInLastRow = teamsData.length % 3;

  return (
    <Box
      id="teams"
      py={20}
      px={8}
      bg="white"
      minHeight="100vh"
      textAlign="center"
    >
      <Heading
        as="h2"
        textAlign="center"
        mb={10}
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="bold"
      >
        Notre équipe
      </Heading>

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }} // 1 colonne sur mobile, 2 sur tablette, 3 sur desktop
        spacing={10}
        maxW="1200px"
        mx="auto"
      >
        {teamsData.map((member, index) => {
          // Si c'est la dernière carte unique sur une ligne, elle prend toute la largeur
          const isLastCard =
            index >= teamsData.length - cardsInLastRow && cardsInLastRow === 1;

          return (
            <GridItem
              key={index}
              colSpan={isLastCard ? { base: 1, sm: 1, md: 3 } : 1} // Si une seule carte sur la dernière ligne, elle prend toute la ligne
            >
              <VStack
                bg="gray.50"
                borderRadius="xl"
                boxShadow="lg"
                p={4}
                spacing={2}
                _hover={{
                  transform: "translateY(-10px)",
                  boxShadow: "2xl",
                  transition: "0.4s ease-in-out",
                }}
                transition="0.4s ease-in-out"
              >
                <Box
                  borderRadius="full"
                  bgGradient="linear(to-r, #EB16C9, #DCEE10)"
                  p={1}
                  boxShadow="md"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    borderRadius="full"
                    boxSize="120px"
                    objectFit="cover"
                    border="6px solid white"
                  />
                </Box>

                <Heading
                  as="h3"
                  size="md"
                  fontWeight="semibold"
                  color="gray.700"
                >
                  {member.name}
                </Heading>
                <Text fontSize="xs" color="gray.600">
                  {member.description}
                  <br />
                  {member.description2}
                  <br />
                  {member.description3}
                </Text>

                <Box>
                  {member.linkX && (
                    <Link href={member.linkX} isExternal>
                      <IconButton
                        icon={<FaXTwitter />}
                        aria-label="Twitter"
                        colorScheme="twitter"
                        variant="ghost"
                        size="lg"
                      />
                    </Link>
                  )}
                  {member.linkedin && (
                    <Link href={member.linkedin} isExternal>
                      <IconButton
                        icon={<FaLinkedin />}
                        aria-label="LinkedIn"
                        colorScheme="linkedin"
                        variant="ghost"
                        size="lg"
                      />
                    </Link>
                  )}
                </Box>
              </VStack>
            </GridItem>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

export default Teams;
