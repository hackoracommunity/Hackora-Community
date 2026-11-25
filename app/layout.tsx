import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HACKORA — Think. Explore. Build. Repeat.",
  description: "A community for curious minds, aspiring developers, students, and innovators. Learn technologies, explore AI, build real-world projects, and grow together.",
  keywords: ["HACKORA", "technology community", "developers", "AI", "hackathons", "innovation"],
  openGraph: { title: "HACKORA — Think. Explore. Build. Repeat.", description: "We Build the Future, From Localhost to the Universe.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
