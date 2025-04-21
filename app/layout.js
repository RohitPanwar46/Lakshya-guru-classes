import "./globals.css";
import { Anton } from 'next/font/google'

const anton = Anton({
  subsets: ['latin'],
  weight: '400'
})

export const metadata = {
  title: "Lakshya Guru Classes",
  description: "Lakshya guru classes for all vaccancies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body
        className={`  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
