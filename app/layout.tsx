import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahmoud Aly - Portfolio",
  description: "Computer Science undergraduate at Management and Science University (MSU) specializing in software development, AI, and full-stack development.",
  keywords: ["Mahmoud Aly", "Portfolio", "Computer Science", "Software Developer", "AI", "Full Stack Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

