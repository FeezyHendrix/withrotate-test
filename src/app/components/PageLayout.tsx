import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type TPageLayout = {
  children: ReactNode;
};

export const PageLayout: React.FC<TPageLayout> = ({ children }) => {
  return <Box p="24">{children}</Box>;
};
