import {
  Box,
  Flex,
  Link,
  Image,
  IconButton,
  Collapse,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { HamburgerIcon, ChevronDownIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [openSubMenu, setOpenSubMenu] = useState(null); 
  const { isOpen: isAboutOpen, onToggle: onAboutToggle } = useDisclosure();
  const { isOpen: isOpenGovOpen, onToggle: onOpenGovToggle } = useDisclosure();
  const menuRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  const handleNavigate = (path, section) => {
    if (location.pathname !== path) {
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
    } else if (section) {
      const element = document.querySelector(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    onClose(); 
  };

  const handleMouseEnter = (menu) => {
    if (!isMobile) setOpenSubMenu(menu); 
  };

  const handleMouseLeave = () => {
    if (!isMobile) setOpenSubMenu(null);
  };

  return (
    <Box
      as="header"
      p={4}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow="md"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      transition="background-color 0.2s ease"
    >
      <Flex justify="space-between" align="center">
        <Flex align="center">
          <Link
            onClick={() => handleNavigate("/", null)}
            display={{ base: isOpen ? "none" : "block", md: "block" }}
            aria-label="Accueil Le Nexus"
          >
            <Image
              src="https://lenexus.4everland.store/logos/Nexus_logo.png"
              alt="Le Nexus Logo"
              boxSize="50px"
            />
          </Link>
          <Box
            display={{ base: "none", md: "block" }}
            ml={3}
            fontWeight="bold"
            fontSize="lg"
            cursor="pointer"
            onClick={() => handleNavigate("/", null)}
          >
            Le Nexus ouvre ses portes
          </Box>
        </Flex>

        <IconButton
          display={{ base: "block", md: "none" }}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={onToggle}
          aria-label="Toggle navigation"
          bg="transparent"
          _hover={{ bg: "gray.100" }}
          aria-expanded={isOpen}
        />

        <Flex
          ref={menuRef}
          as="nav"
          direction={{ base: "column", md: "row" }}
          display={{ base: isOpen ? "flex" : "none", md: "flex" }}
          justify="space-between"
          alignItems="center"
          w={{ base: "100%", md: "auto" }}
          mt={{ base: 4, md: 0 }}
          role="menubar"
        >
          <Box
            position="relative"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={() => handleMouseLeave()}
            mx={4}
            display="flex"
            flexDirection="column"
          >
            <Link
              cursor="pointer"
              color={location.hash === "#about" ? "pink.500" : "inherit"}
              _hover={{ textDecoration: "none", color: "pink.500" }}
              onClick={() => {
                isMobile ? onAboutToggle() : handleNavigate("/", "#about");
              }}
              fontWeight="bold"
              transition="color 0.2s"
              display="flex"
              alignItems="center"
              aria-haspopup="true"
              aria-expanded={isAboutOpen || openSubMenu === "about"}
            >
              À propos <ChevronDownIcon ml={1} />
            </Link>
            <Collapse in={isAboutOpen || openSubMenu === "about"} animateOpacity>
              <Box
                position={{ base: "relative", md: "absolute" }}
                bg="white"
                shadow="lg"
                mt={2}
                p={4}
                borderRadius="md"
                minW="150px"
                zIndex="1001"
              >
                <Link
                  onClick={() => handleNavigate("/", "#about")}
                  display="block"
                  mb={2}
                  _hover={{ color: "pink.500" }}
                  fontSize="14px"
                >
                  Le Nexus
                </Link>
                <Link
                  onClick={() => handleNavigate("/", "#objectives")}
                  display="block"
                  mb={2}
                  _hover={{ color: "pink.500" }}
                  fontSize="14px"
                >
                  Nos objectifs
                </Link>
                <Link
                  onClick={() => handleNavigate("/", "#teams")}
                  display="block"
                  _hover={{ color: "pink.500" }}
                  fontSize="14px"
                >
                  Notre équipe
                </Link>
              </Box>
            </Collapse>
          </Box>

          <Box
            position="relative"
            onMouseEnter={() => handleMouseEnter("opengov")}
            onMouseLeave={() => handleMouseLeave()}
            mx={4}
            display="flex"
            flexDirection="column"
          >
            <Link
              cursor="pointer"
              color={location.pathname === "/delegate" ? "pink.500" : "inherit"}
              _hover={{ textDecoration: "none", color: "pink.500" }}
              onClick={() => {
                isMobile ? onOpenGovToggle() : handleNavigate("/delegate", null);
              }}
              fontWeight="bold"
              transition="color 0.2s"
              display="flex"
              alignItems="center"
              aria-haspopup="true"
              aria-expanded={isOpenGovOpen || openSubMenu === "opengov"}
            >
              OpenGov <ChevronDownIcon ml={1} />
            </Link>
            <Collapse in={isOpenGovOpen || openSubMenu === "opengov"} animateOpacity>
              <Box
                position={{ base: "relative", md: "absolute" }}
                bg="white"
                shadow="lg"
                mt={2}
                p={4}
                borderRadius="md"
                minW="150px"
                zIndex="1001"
              >
                <Link
                  as={RouterLink}
                  to="/delegate"
                  display="block"
                  mb={2}
                  _hover={{ color: "pink.500" }}
                  fontSize="14px"
                >
                  Délégation
                </Link>
                <Link
                  href="https://lenexus-gov.notion.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  display="block"
                  _hover={{ color: "pink.500" }}
                  fontSize="14px"
                >
                  Rapports
                </Link>
              </Box>
            </Collapse>
          </Box>

          <Link
            onClick={() => handleNavigate("/", "#join")}
            cursor="pointer"
            color={location.hash === "#join" ? "pink.500" : "inherit"}
            _hover={{ textDecoration: "none", color: "pink.500" }}
            mx={4}
            fontWeight="bold"
            transition="color 0.2s"
          >
            Rejoignez-nous
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
