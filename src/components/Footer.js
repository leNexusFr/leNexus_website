import { Box, Flex, Link, Text, Image } from "@chakra-ui/react";
import {
  FaDiscord,
  FaYoutube,
  FaLinkedin,
  FaTelegram,
  FaMedium,
  FaGithub,
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
      <nav aria-label="Social media links">
        <Flex
          justify="center"
          mb={4}
          wrap="wrap"
          direction="row"
          align="center"
        >
          <Link
            href="https://x.com/lenexus_org"
            target="_blank"
            rel="noopener noreferrer"
            mx={2}
            aria-label="Twitter"
          >
            <FaXTwitter size={24} />
          </Link>
          <Link
            href="https://www.youtube.com/@lenexus_org"
            target="_blank"
            rel="noopener noreferrer"
            mx={2}
            aria-label="YouTube"
          >
            <FaYoutube size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/lenexus"
            target="_blank"
            rel="noopener noreferrer"
            mx={2}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            href="https://t.me/leNexus_DV"
            target="_blank"
            rel="noopener noreferrer"
            mx={2}
            aria-label="Telegram"
          >
            <FaTelegram size={24} />
          </Link>
          <Link
            href="https://discord.gg/entxwA7Xda"
            target="_blank"
            rel="noopener noreferrer"
            mx={2}
            aria-label="Discord"
          >
            <FaDiscord size={24} />
          </Link>
          <Link
            href="https://medium.com/@LeNexus"
            target="_blank"
            rel="noopener noreferrer"
            mx={2}
            aria-label="Medium"
          >
            <FaMedium size={24} />
          </Link>
          <Link
            href="https://github.com/leNexusFr"
            target="_blank"
            rel="noopener noreferrer"
            mx={2}
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </Link>
        </Flex>
      </nav>

      <Flex
        justifyContent="center"
        alignItems="center"
        direction={{ base: "column", md: "row" }}
      >
        <Link
          href="https://lenexus-gov.notion.site"
          target="_blank"
          rel="noopener noreferrer"
          mx={2}
        >
          OpenGov Report
        </Link>
        <Text display={{ base: "none", md: "inline" }} mx={2}>|</Text>
        <Link
          href="https://github.com/leNexusFr/leNexus_Branding_Kit/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          mx={2}
        >
          Branding KIT
        </Link>
      </Flex>

      <address>
        <Text fontSize="sm" mt={4}>
          &copy; 2024 Le Nexus. Tous droits réservés.
        </Text>
      </address>

      <Flex
        position={{ base: "relative", md: "absolute" }}
        bottom={{ base: 0, md: 8 }}
        right={{ base: "auto", md: 6 }}
        mt={{ base: 4, md: 0 }}
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
