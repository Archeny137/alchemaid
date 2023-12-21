"use client";
import Navbar from "@/components/navbar/page";
import Features from "@/components/features/page";
import LoginSection from "@/components/loginSection/page";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Features />
      <div id="login">
        <LoginSection />
      </div>
    </main>
  );
}
