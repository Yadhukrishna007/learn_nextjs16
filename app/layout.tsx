import "@/app/ui/global.css";
import { inter } from "./ui/font";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white ${inter.className} `}>{children}</body>
    </html>
  );
}
