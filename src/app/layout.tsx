import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PageWrapper from "./components/wrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const theme = createTheme({
  primaryColor: "cyan",
  colors: {
    cyan: [
      "#eefbfb",
      "#e0f3f4",
      "#bae8e9",
      "#93dcdf",
      "#74d2d5",
      "#62ccd0",
      "#57c9cd",
      "#47b1b5",
      "#399ea2",
      "#21898d",
    ],
  },
  defaultRadius: "0",
});

export const metadata: Metadata = {
  title: "DELTEC GROUP",
  description: "High Performance Electronics Manufacturing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider theme={theme}>
          <PageWrapper>{children}</PageWrapper>
        </MantineProvider>
      </body>
    </html>
  );
}
