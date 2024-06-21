import "@/app/globals.css";
import { inter } from "@/app/fonts";
import { lusitana } from "@/app/fonts"; 

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body className={'${inter.className} antialiased'}>{children}
        </body>
      </html>
    );
  }