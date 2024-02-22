import type { Metadata } from "next";
import { Kaisei_Decol, Poppins } from "next/font/google";
import "./globals.css";

const kaisei_decol = Kaisei_Decol({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const poppins = Poppins({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Espai",
  description: "Explore the Art of Interior Design With a Touch of Magic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kaisei_decol.className}  border-red-600 md:border-blue-600 lg:border-green-600 xl:border-yellow-600 2xl:border-purple `}
      >
        {children}
      </body>
    </html>
  );
}
