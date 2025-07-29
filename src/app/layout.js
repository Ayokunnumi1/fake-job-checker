import "./globals.css";

export const metadata = {
  title: "Fake Job Alert - Nigeria",
  description: "Search known scam job venues to avoid job fraud in Nigeria.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
