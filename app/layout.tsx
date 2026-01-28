import { Space_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "House of Ideas E-journal",
  description: "Turning ideas into projects",
};

const Spacemono = Space_Mono(
    {weight:'400',style:'normal',subsets:['latin']}
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={Spacemono.className} suppressHydrationWarning>
    <head>
      <title>House of ideas</title>
      <link rel="shortcut icon" href="/favicon.ico"/>
    </head>
      <Analytics/>
      <body className="bg-background text-foreground">
      <ThemeProvider
          attribute="class"

          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
      >
          <main className="min-h-[100dvh] overflow-x-hidden flex flex-col  z-0 items-center">
              {children}
          </main>
      </ThemeProvider>
      </body>
    </html>
  );
}
