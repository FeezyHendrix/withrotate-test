import React from "react";
import { Box, VStack, HStack, Button, Badge, Text, Heading, Flex } from "@chakra-ui/react";
import { ArrowUp, ChevronUp } from "lucide-react";
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
        <Box key={suggestion.id} p={6} borderRadius="md" bg={Theme.colors.white}>
          <HStack gap={6} align="flex-start">
            <Box
              bg={Theme.colors.lightGray}
              flexDirection="column"
              alignItems={"center"}
              justifyContent={"center"}
              display="flex"
              borderRadius={Theme.properties.borderRadius}
              p={4}
              height="auto"
            >
              <ChevronUp size={24} color={Theme.colors.primaryDarkBlue} />
              <Text color={Theme.colors.secondaryDarkBlue} fontWeight="bold" fontSize="16px">
                {suggestion.votes}
              </Text>
            </Box>

            <Box flex="1">
              <Text fontSize="xl" color={Theme.colors.secondaryDarkBlue} fontWeight={700} mb={2}>
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
