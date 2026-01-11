import { Geist, Geist_Mono, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mya Schmitz",
  description: "Portfolio for Mya Schmitz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const saved = localStorage.getItem('darkMode');
                const isDark = saved !== null
                  ? saved === 'true'
                  : true;
                if (isDark) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} font-(family-name:--font-montserrat) antialiased`}
      >
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
