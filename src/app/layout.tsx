import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soyong Dol — Full-Stack Developer",
  description:
    "Portfolio of Soyong Dol, a full-stack developer building beautiful and performant web applications.",
  keywords: ["developer", "full-stack", "React", "Next.js", "TypeScript", "portfolio"],
  openGraph: {
    title: "Soyong Dol — Full-Stack Developer",
    description: "Portfolio of Soyong Dol — crafting beautiful web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
