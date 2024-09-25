import { Box, Flex, Link, Text, Image } from "@chakra-ui/react";
import {
  FaDiscord,
  FaYoutube,
  FaLinkedin,
  FaTelegram,
  FaMedium,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <Box
      as="footer"
      bg="gray.900"
      color="white"
      py={8}
      textAlign="center"
      position="relative"
    >
      <Flex
        justify="center"
        mb={4}
        wrap="wrap"
        direction={{ base: "row", md: "row" }}
        align="center"
      >
        <Link
          href="https://x.com/lenexus_org"
          target="_blank"
          rel="noopener noreferrer"
          mx={2}
          mb={{ base: 0 }}
        >
          <FaXTwitter size={24} />
        </Link>
        <Link
          href="https://www.youtube.com/@lenexus_org"
          target="_blank"
          rel="noopener noreferrer"
          mx={2}
          mb={{ base: 0 }}
        >
          <FaYoutube size={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/company/lenexus"
          target="_blank"
          rel="noopener noreferrer"
          mx={2}
          mb={{ base: 0 }}
        >
          <FaLinkedin size={24} />
        </Link>
        <Link
          href="https://t.me/lenexus_org"
          target="_blank"
          rel="noopener noreferrer"
          mx={2}
          mb={{ base: 0 }}
        >
          <FaTelegram size={24} />
        </Link>
        <Link
          href="https://discord.gg/entxwA7Xda"
          target="_blank"
          rel="noopener noreferrer"
          mx={2}
          mb={{ base: 0 }}
        >
          <FaDiscord size={24} />
        </Link>
        <Link
          href="https://medium.com/@LeNexus"
          target="_blank"
          rel="noopener noreferrer"
          mx={2}
        >
          <FaMedium size={24} />
        </Link>
      </Flex>
      <Text fontSize={{ base: "sm", md: "sm" }}>
        <br />
        &copy; 2024 Le Nexus. Tous droits réservés.
      </Text>

      {/* Section "Secured by" responsive avec lien */}
      <Flex
        position={{ base: "relative", md: "absolute" }}
        bottom={{ base: 0, md: 4 }}
        right={{ base: "auto", md: 4 }}
        mt={{ base: 0, md: 0 }}
        justifyContent="center"
        alignItems="center"
        fontSize="sm"
      >
        <Text mr={2} fontStyle="italic" fontWeight="bold">
          Secured by
        </Text>
        <Link
          href="https://polkadot.network"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://lenexus.4everland.store/logos/Polkadot%20Logo-2.png"
            alt="Polkadot Logo"
            boxSize={{ base: "100px", md: "100px" }}
            objectFit="contain"
          />
        </Link>
      </Flex>
    </Box>
  );
}

export default Footer;
