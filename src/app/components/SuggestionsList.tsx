import React from "react";
import { Box, VStack, HStack, Button, Badge, Text, Heading, Flex } from "@chakra-ui/react";
import { ArrowUp } from "lucide-react";
import Theme from "../theme";
import { Pill } from "./Pill";

type Suggestion = {
  id: number;
  title: string;
  description: string;
  type: string;
  votes: number;
};

type ISuggestionList = {
  suggestions: Suggestion[];
};
const SuggestionsList: React.FC<ISuggestionList> = ({ suggestions }) => {
  return (
    <VStack gap={4} align="stretch" width="100%">
      {suggestions.map((suggestion) => (
        <Box key={suggestion.id} p={6} borderWidth="1px" borderRadius="md" bg={Theme.colors.white}>
          <HStack gap={6} align="flex-start">
            {/* Votes Button */}
            <Button variant="outline" size="sm" flexDirection="column" py={2} px={3} height="auto">
              <ArrowUp size={4} />
              <Text fontWeight="semibold">{suggestion.votes}</Text>
            </Button>

            {/* Suggestion Content */}
            <Box flex="1">
              <Text fontSize="xl" color={Theme.colors.secondaryDarkBlue} mb={2}>
                {suggestion.title}
              </Text>
              <Text fontSize="sm" color={Theme.colors.secondaryDarkBlue} mb={4}>
                {suggestion.description}
              </Text>
              <Pill selected={false} text={suggestion.type} />
            </Box>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
};

export default SuggestionsList;
