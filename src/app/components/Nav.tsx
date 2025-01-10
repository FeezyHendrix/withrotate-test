import React from "react";
import { Box, Flex, Select, Button, Text, Icon, createListCollection } from "@chakra-ui/react";
import { SelectContent, SelectItem, SelectLabel, SelectRoot, SelectTrigger, SelectValueText } from "./ui/select";
import { Plus } from "lucide-react";

const FeedbackNav = () => {
  const ranks = createListCollection({
    items: [
      {
        label: "Most Upvotes",
        value: "Most Upvotes",
      },
      {
        label: "Least Upvotes",
        value: "Least Upvotes",
      },
      {
        label: "Most Comments",
        value: "Most Comments",
      },
      {
        label: "Least Comments",
        value: "Least Comments",
      },
    ],
  });
  return (
    <Box bg="#373F68" borderRadius="lg" p="4" color="white">
      <Flex justifyContent="space-between" alignItems="center">
        {/* Left Section */}
        <Flex alignItems="center" gap="4">
          <Icon boxSize="5" viewBox="0 0 24 24" fill="none" color="white">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              fill="currentColor"
            />
            <path d="M11 7h2v6h-2zm0 8h2v2h-2z" fill="currentColor" />
          </Icon>
          <Text fontWeight="bold" fontSize="lg">
            6 Suggestions
          </Text>
          <Flex alignItems="center">
            <Text fontSize="sm" mr="2">
              Sort by:
            </Text>

            {/* <SelectRoot collection={ranks}>
              <SelectTrigger>
                <SelectValueText placeholder="Most Upvotes" />
              </SelectTrigger>
              <SelectContent>
                {ranks.items.map((item) => (
                  <SelectItem item={item} key={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot> */}
          </Flex>
        </Flex>

        {/* Right Section */}
        <Button bg="purple.600" _hover={{ bg: "purple.700" }} color="white" borderRadius="md">
          <Plus />
          Add Feedback
        </Button>
      </Flex>
    </Box>
  );
};

export default FeedbackNav;
