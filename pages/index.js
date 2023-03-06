import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import TryOutCard from "@/components/TryOutCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ratuste-form</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-rata-bg">
        <NavBar />
        <TryOutCard />

        <section
          id="footer"
          className="h-screen bg-red-400  flex items-center justify-center"
        >
          <h1>Footer</h1>
        </section>
      </main>
    </>
  );
}
//overview, features, pricing, contact
