import "./globals.css";

export const metadata = {
  title: "Hirsad",
  description: "Hirsad Technology",
  generator: "Next.js",
  applicationName: "Hirsad",
  referrer: "origin-when-cross-origin",
  keywords: ["Hirsad", "Hirsad Technology", "Hirsad iT Solution"],
  authors: [{ name: "Ilyas" }, { name: "Hirsad", url: "https://hirsad.com" }],
  colorScheme: "dark",
  creator: "Ilyas Omar",
  publisher: "Ilyas Omar",
  alternates: {},
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
