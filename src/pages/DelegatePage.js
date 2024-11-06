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
import { Helmet } from "react-helmet-async";
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
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Déléguez en toute confiance vos tokens DOT (Polkadot) et KSM (Kusama) avec Le Nexus. Rejoignez notre initiative de gouvernance décentralisée et découvrez nos délégués actifs, ainsi que toutes les informations pour soutenir l'écosystème blockchain et le web3."
        />
        <meta name="keywords" content="Le Nexus, DAO, Délégation, DOT, KSM, Polkadot, Kusama, blockchain, gouvernance" />

        <meta property="og:title" content="Le Nexus DAO - Déléguez Vos Tokens DOT & KSM" />
        <meta
          property="og:description"
          content="Découvrez comment déléguer vos tokens DOT et KSM avec Le Nexus pour soutenir la gouvernance de Polkadot et Kusama."
        />
        <meta
          property="og:image"
          content="https://lenexus.4everland.store/background/Previews_LeNexus_delegate.png"
        />
        <meta property="og:url" content="https://lenexus.org/delegate" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Le Nexus DAO - Déléguez Vos Tokens DOT & KSM" />
        <meta
          name="twitter:description"
          content="Déléguez vos tokens avec Le Nexus DAO pour soutenir la gouvernance décentralisée de Polkadot et Kusama."
        />
        <meta
          name="twitter:image"
          content="https://lenexus.4everland.store/background/Previews_LeNexus_delegate.png"
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
              as="article"
              aria-labelledby={`delegate-${index}-title`}
            >
              <Image
                src={delegate.image}
                alt={`Image de ${delegate.title}`}
                boxSize="100px"
                mx="auto"
                mb={4}
              />
              <Heading as="h3" fontSize="xl" mb={4} id={`delegate-${index}-title`}>
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
                aria-label={`En savoir plus sur ${delegate.title}`}
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
