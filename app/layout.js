import { Archivo, Sora } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata = {
  title: "Zenvora Link | E-commerce Solutions",
  description:
    "Complete e-commerce solutions across sourcing, branding, warehousing, fulfilment and dropshipping.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${sora.variable}`}>
        {children}
      </body>
    </html>
  );
}