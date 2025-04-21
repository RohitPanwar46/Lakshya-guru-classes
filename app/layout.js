import "./globals.css";
import { Montserrat } from 'next/font/google'


export const metadata = {
  title: "Lakshya Guru Classes",
  description: "Lakshya guru classes for all vaccancies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
