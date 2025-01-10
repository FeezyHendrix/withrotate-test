import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Theme from "../theme"; // Import your Theme object

const GradientCard = () => {
  return (
    <Box
      h="150px"
      borderRadius={Theme.properties.borderRadius}
      display="flex"
      p={6}
      flexDirection="column"
      justifyContent="flex-end"
      bg={`radial-gradient(128.88% 128.88% at 103.9% -10.39%, ${Theme.colors.accentOrange} 0%, ${Theme.colors.primaryPurple} 53.09%, ${Theme.colors.skyBlue} 100%)`}
      color={Theme.colors.white}
    >
      <Text fontSize="xl" fontWeight="bold">
        Frontend Mentor
      </Text>
      <Text fontSize="md" mt="1">
        Feedback Board
      </Text>
    </Box>
  );
};

export default GradientCard;
