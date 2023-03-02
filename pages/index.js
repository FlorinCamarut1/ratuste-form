import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import TryOutCard from "@/components/TryOutCard";
import Overview from "@/components/Overview";
import Features from "@/components/Features";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ratuste-form</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <TryOutCard />
        <Overview />
        <Features />
        <section
          id="pricing"
          className="h-screen bg-red-400  flex items-center justify-center"
        >
          <h1>Pricing</h1>
        </section>
        <section
          id="contact"
          className="h-screen bg-slate-500  flex items-center justify-center"
        >
          <h1>Contact</h1>
        </section>
      </main>
    </>
  );
}
//overview, features, pricing, contact
