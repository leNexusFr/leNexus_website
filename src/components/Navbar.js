import {
  Box,
  Flex,
  Link,
  Image,
  IconButton,
  Collapse,
  useOutsideClick,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useOutsideClick({
    ref: menuRef,
    handler: () => setIsOpen(false),
  });

  const handleNavigate = (path, section) => {
    navigate(path);
    setTimeout(() => {
      if (section) {
        const element = document.querySelector(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <Box
      as="nav"
      p={4}
      bg="white"
      boxShadow="sm"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
    >
      <Flex justify="space-between" align="center">
        <Flex align="center">
          {/* Le logo est visible sur mobile uniquement quand le menu n'est pas ouvert */}
          <Link
            onClick={() => {
              handleNavigate("/", null);
              closeMenu();
            }}
            display={{ base: isOpen ? "none" : "block", md: "block" }} // Logo is hidden when menu is open on mobile
          >
            <Image
              src="https://lenexus.4everland.store/logos/Nexus_logo.png"
              alt="Le Nexus Logo"
              boxSize="50px"
            />
          </Link>
          <Box
            display={{ base: "none", md: "block" }} // Logo text hidden on mobile
            ml={3}
            fontWeight="bold"
            fontSize="lg"
            cursor="pointer"
            onClick={() => {
              handleNavigate("/", null);
              closeMenu();
            }}
          >
            Le Nexus ouvre ses portes
          </Box>
        </Flex>

        {!isOpen && (
          <IconButton
            display={{ base: "block", md: "none" }}
            icon={<HamburgerIcon />}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          />
        )}

        <Flex
          ref={menuRef}
          direction={{ base: "column", md: "row" }}
          display={{ base: isOpen ? "flex" : "none", md: "flex" }}
          justify="space-between"
          w={{ base: "100%", md: "50%" }}
          mt={{ base: 4, md: 0 }}
        >
          <Link
            onClick={() => {
              handleNavigate("/", "#about");
              closeMenu();
            }}
            mb={{ base: 2, md: 0 }}
          >
            À propos
          </Link>

          <Link
            onClick={() => {
              handleNavigate("/", "#objectives");
              closeMenu();
            }}
            mb={{ base: 2, md: 0 }}
          >
            Nos objectifs
          </Link>

          <Link
            as={RouterLink}
            to="/delegate"
            onClick={closeMenu}
            mb={{ base: 2, md: 0 }}
          >
            Délégation
          </Link>

          <Link
            onClick={() => {
              handleNavigate("/", "#teams");
              closeMenu();
            }}
            mb={{ base: 2, md: 0 }}
          >
            Notre équipe
          </Link>

          <Link
            onClick={() => {
              handleNavigate("/", "#join");
              closeMenu();
            }}
            mb={{ base: 2, md: 0 }}
          >
            Rejoignez-nous
          </Link>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity></Collapse>
    </Box>
  );
}

export default Navbar;
