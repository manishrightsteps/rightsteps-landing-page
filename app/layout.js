import { Montserrat, Roboto, PT_Mono, Caveat } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const ptMono = PT_Mono({
  variable: "--font-pt-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Rightsteps · Home education for KS1 to KS4",
  description:
    "Rightsteps supports UK families educating children at home from Year 1 to Year 11, with solo work, one-to-one tutors, small live classes and an AI companion for children, parents and tutors.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-GB"
      className={`${montserrat.variable} ${roboto.variable} ${ptMono.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
