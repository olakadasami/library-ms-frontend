import { Lexend, Manrope } from "next/font/google";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export default function Home() {
  return (
    <main className={`min-h-screen ${lexend.variable} ${manrope.variable}`}>
      <Card>
        <CardHeader>Heading</CardHeader>
        <CardContent>Hello world</CardContent>
      </Card>
    </main>
  );
}
