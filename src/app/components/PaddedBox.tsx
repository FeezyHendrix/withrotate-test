import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Theme from "../theme";

type TPaddedBox = {
  children: ReactNode;
};

export const PaddedBox: React.FC<TPaddedBox> = ({ children }) => {
  return (
    <Box bg={Theme.colors.white} p="4">
      {children}
    </Box>
  );
};
