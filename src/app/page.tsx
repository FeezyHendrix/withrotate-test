"use client";
import { PageLayout } from "./components/PageLayout";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { PaddedBox } from "./components/PaddedBox";
import { ThemedText } from "./components/ThemedText";
import { PillList } from "./components/Pill";
import Roadmap from "./components/RoadMap";
import GradientCard from "./components/GradientCard";
import Nav from "./components/Nav";
import SuggestionsList from "./components/SuggestionsList";

export default function Home() {
  const suggestions = [
    {
      id: 112,
      title: "Add tags for solutions",
      description: "Easier to search for solutions based on a specific stack.",
      type: "Enhancement",
      votes: 2,
    },
    {
      id: 99,
      title: "Add a dark theme option",
      description: "It would help people with light sensitivities and who prefer dark mode.",
      type: "Feature",
      votes: 4,
    },
    {
      id: 65,
      title: "Q&A within the challenge hubs",
      description: "Challenge-specific Q&A would make for easy reference.",
      type: "Feature",
      votes: 1,
    },
    {
      id: 51,
      title: "Allow image/video upload to feedback",
      description: "Images and screencasts can enhance comments on solutions.",
      type: "Enhancement",
      votes: 2,
    },
    {
      id: 42,
      title: "Ability to follow others",
      description: "Stay updated on comments and solutions other people post.",
      type: "Feature",
      votes: 3,
    },
    {
      id: 3,
      title: "Preview images not loading",
      description: "Challenge preview images are missing when you apply a filter.",
      type: "Bug",
      votes: 0,
    },
  ];
  return (
    <PageLayout>
      <Flex gap={10}>
        <Box width="320px">
          <Flex flexDirection="column" gap={10}>
            <GradientCard />
            <PaddedBox>
              <PillList />
            </PaddedBox>
            <PaddedBox>
              <Roadmap />
            </PaddedBox>
          </Flex>
        </Box>
        <Box width="100%">
          <SuggestionsList suggestions={suggestions} />
        </Box>
      </Flex>
    </PageLayout>
  );
}
