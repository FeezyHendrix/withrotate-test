import { Box, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Theme from "../theme";

type TPill = {
  selected: boolean;
  text: string;
  onSelect?: (text: string) => void;
};

export const Pill: React.FC<TPill> = ({ selected, text, onSelect }) => {
  return (
    <Button
      size="xs"
      p="4"
      fontSize="13px"
      borderRadius={Theme.properties.borderRadius}
      bg={selected ? Theme.colors.primaryBlue : Theme.colors.lightGray}
      color={selected ? Theme.colors.white : Theme.colors.primaryBlue}
      onClick={() => {
        if (onSelect) {
          onSelect(text);
        }
      }}
      fontWeight={600}
    >
      {text}
    </Button>
  );
};

export const PillList = () => {
  const list: string[] = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  const [currentPill, setCurrentPill] = useState<string>(list[0]);

  const onPillSelect = (text: string) => setCurrentPill(text);

  return (
    <Flex gap="16px" flexWrap="wrap">
      {list.map((value, index) => {
        return <Pill key={index} selected={value === currentPill} text={value} onSelect={onPillSelect} />;
      })}
    </Flex>
  );
};
