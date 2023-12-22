"use client";
import Navbar from "@/components/navbar/page";
import Features from "@/components/features/page";
import LoginSection from "@/components/loginSection/page";
import Hero from "@/components/hero/page";
import Footer from "@/components/footer/page";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <div id="login">
        <LoginSection />
      </div>
      <Footer />
    </main>
  );
}
