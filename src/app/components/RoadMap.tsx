import React from "react";
import { Box, Text, Flex, Circle, Link } from "@chakra-ui/react";
import Theme from "@/app/theme";

const Roadmap = () => {
  const roadmapItems = [
    { label: "Planned", color: Theme.colors.accentOrange, count: 2 },
    { label: "In-Progress", color: Theme.colors.primaryPurple, count: 3 },
    { label: "Live", color: Theme.colors.skyBlue, count: 1 },
  ];

  return (
    <Box bg={Theme.colors.white} borderRadius="lg" fontFamily="Arial, sans-serif">
      {/* Header */}
      <Flex justifyContent="space-between" alignItems="center" mb="4">
        <Text fontWeight="bold" fontSize="lg" color={Theme.colors.secondaryDarkBlue}>
          Roadmap
        </Text>
        <Link textDecoration="underline" color={Theme.colors.primaryBlue} fontWeight="bold" fontSize="sm">
          View
        </Link>
      </Flex>

      {/* Roadmap Items */}
      {roadmapItems.map((item) => (
        <Flex justifyContent="space-between" alignItems="center" mb="2" key={item.label}>
          <Flex alignItems="center">
            <Circle size="10px" bg={item.color} mr="3" />
            <Text color={Theme.colors.mediumGray} fontSize="sm">
              {item.label}
            </Text>
          </Flex>
          <Text fontWeight="bold" color={Theme.colors.mediumGray}>
            {item.count}
          </Text>
        </Flex>
      ))}
    </Box>
  );
};

export default Roadmap;
