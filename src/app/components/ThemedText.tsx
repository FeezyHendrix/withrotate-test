import { Text, TextProps } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedText({ lightColor, darkColor, type = "default", style, ...rest }: ThemedTextProps) {
  const color = useColorModeValue(lightColor || "black", darkColor || "white");

  const getTypeStyles = () => {
    switch (type) {
      case "default":
        return { fontSize: "16px", lineHeight: "24px" };
      case "defaultSemiBold":
        return { fontSize: "16px", lineHeight: "24px", fontWeight: "600" };
      case "title":
        return { fontSize: "32px", fontWeight: "bold", lineHeight: "32px" };
      case "subtitle":
        return { fontSize: "20px", fontWeight: "bold" };
      case "link":
        return { fontSize: "16px", lineHeight: "30px", color: "#0a7ea4" };
      default:
        return { fontSize: "16px", lineHeight: "24px" };
    }
  };

  const typeStyles = getTypeStyles();

  return <Text color={color} {...rest} style={{ ...typeStyles, ...(style as React.CSSProperties) }} />;
}
