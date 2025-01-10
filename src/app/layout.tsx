import { Jost } from "next/font/google";
import "./globals.css";
import { Provider } from "@/app/components/ui/provider";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
