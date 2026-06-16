import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Red1 Group | Fully Funded Energy Efficient Homes",
  description:
    "Red1 Group helps UK homeowners access fully funded energy-saving upgrades including boiler replacement, heat pumps, solar, and insulation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
