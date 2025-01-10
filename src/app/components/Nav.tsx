import React from "react";
import { Box, Flex, Button, Text, createListCollection } from "@chakra-ui/react";
import { SelectContent, SelectItem, SelectRoot, SelectTrigger, SelectValueText } from "./ui/select";
import { Plus } from "lucide-react";
import Theme from "../theme";
import Image from "next/image";
import badge from "../../../public/badge.svg";

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
    <Box bg="#373F68" borderRadius="lg" p="4" marginBottom={8} color="white">
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center" gap="4">
          <Image src={badge} alt="" />
          <Text fontWeight="bold" fontSize="lg">
            6 Suggestions
          </Text>
          <Flex alignItems="center">
            <Text fontSize="sm" width="100px">
              Sort By:
            </Text>

            <SelectRoot collection={ranks}>
              <SelectTrigger>
                <SelectValueText placeholder="Most Upvotes" />
              </SelectTrigger>
              <SelectContent bg={Theme.colors.white} width="250px">
                {ranks.items.map((item) => (
                  <SelectItem
                    item={item}
                    key={item.value}
                    color={Theme.colors.mediumGray}
                    _hover={{ bg: Theme.colors.white, color: Theme.colors.primaryPurple }}
                    cursor="pointer"
                    py={4}
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
          </Flex>
        </Flex>

        <Button
          bg={Theme.colors.primaryPurple}
          fontSize="14px"
          color="white"
          px="24px"
          fontWeight={700}
          borderRadius={Theme.properties.borderRadius}
        >
          <Plus size={14} />
          Add Feedback
        </Button>
      </Flex>
    </Box>
  );
};

export default FeedbackNav;
