import React from "react";
import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import objectivesData from "../../datas/objectives_data.json";

const MotionBox = motion(Box);

function Objectives() {
  return (
    <Box
      id="objectives"
      py={20}
      bg="gray.50"
      position="relative"
      overflow="hidden"
      minHeight="100vh"
    >
      <Heading
        as="h2"
        textAlign="center"
        mb={10}
        fontSize="3xl"
        fontWeight="bold"
      >
        Nos objectifs
      </Heading>

      <Box position="relative" width="100%" maxW="1200px" mx="auto">
        {objectivesData.map((service, index) => (
          <MotionBox
            key={index}
            bg="white"
            borderRadius="lg"
            boxShadow="lg"
            p={6}
            width="100%"
            mb={8}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <Image
              src={service.image}
              alt={service.title}
              width="100%"
              height="300px"
              objectFit="cover"
              borderRadius="20px"
              mb={4}
            />

            <Heading as="h3" fontSize="xl" textAlign="center">
              {service.title}
            </Heading>
            <Text fontSize="xs" textAlign="center" mb={4} mt={4}>
              {service.description}
            </Text>

            {service.button && (
              <Box display="flex" justifyContent="center" mt={4}>
                <Button
                  as="a"
                  href={service.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  bgGradient="linear(to-r, #EB16C9, #DCEE10)"
                  color="white"
                  _hover={{ bgGradient: "linear(to-r, #DCEE10, #EB16C9)" }}
                  size="xs"
                >
                  {service.buttonText}
                </Button>
              </Box>
            )}
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
}

export default Objectives;
