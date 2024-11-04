import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  SimpleGrid,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { Footer, Navbar } from "../components";
import delegateData from "../datas/delegate_data.json";

const MotionBox = motion(Box);

function DelegatePage() {
  const toast = useToast();
  const [currentAddress, setCurrentAddress] = useState("");

  const handleCopy = (address) => {
    setCurrentAddress(address);
    onCopy();
    toast({
      title: "Adresse copiée ! ✅",
      description: "L'adresse a été copiée dans le presse-papier.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };

  const { onCopy } = useClipboard(currentAddress);

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
       <Helmet>
        <title>Le Nexus DAO - Déléguez Vos Tokens DOT & KSM</title>
        <meta
          name="description"
          content="Déléguez en toute confiance vos tokens DOT (Polkadot) et KSM (Kusama) avec Le Nexus. Rejoignez notre initiative de gouvernance décentralisée et découvrez nos délégués actifs, ainsi que toutes les informations pour soutenir l'écosystème blockchain."
        />
      </Helmet>
      <Navbar />
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        py={20}
        px={8}
        bg="gray.50"
        textAlign="center"
      >
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "4xl" }}
          mt={5}
          mb={5}
          fontWeight="bold"
        >
          Déléguez vos tokens
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} maxW="900px">
          {delegateData.map((delegate, index) => (
            <MotionBox
              key={index}
              bg="white"
              borderRadius="xl"
              boxShadow="lg"
              p={8}
              _hover={{ transform: "translateY(-10px)", boxShadow: "2xl" }}
              transition="0.4s ease-in-out"
            >
              <Image
                src={delegate.image}
                alt={delegate.title}
                boxSize="100px"
                mx="auto"
                mb={4}
              />
              <Heading as="h3" fontSize="xl" mb={4}>
                {delegate.title}
              </Heading>
              <Text mb={4}>{delegate.description}</Text>
              <Text
                fontSize="sm"
                mb={4}
                bg="gray.100"
                p={2}
                borderRadius="md"
                cursor="pointer"
                onClick={() => handleCopy(delegate.address)}
                _hover={{ bg: "gray.200" }}
              >
                {delegate.address} 📋
              </Text>
              <Button
                as="a"
                href={delegate.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                bgGradient="linear(to-r, #EB16C9, #DCEE10)"
                color="white"
                _hover={{ bgGradient: "linear(to-r, #DCEE10, #EB16C9)" }}
              >
                {delegate.buttonText}
              </Button>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>
      <Footer />
    </Box>
  );
}

export default DelegatePage;
