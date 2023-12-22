"use client";
import Navbar from "@/components/navbar/page";
import { useState } from "react";
import Features from "@/components/features/page";
import LoginSection from "@/components/loginSection/page";
import Hero from "@/components/hero/page";
import Footer from "@/components/footer/page";
import { useAuthContext } from "@/context/AuthContext";
import PatientCards from "@/components/patientCards/page";
import { getDocs, doc, getDoc } from "firebase/firestore";
import firebase_app from "@/firebase/config";
import { getFirestore } from "firebase/firestore";
export default function Home() {
  const { user } = useAuthContext() as any;
  const db = getFirestore(firebase_app);
  let data: any = null;
  if (user) {
    const docRef = doc(db, "user", user.email);
    getDoc(docRef).then((docSnap) => {
      data = docSnap.data();
    });
  }
  return (
    <main>
      <Navbar />
      {!user ? (
        <>
          <Hero />
          <Features />
          <div id="login">
            <LoginSection />
          </div>
        </>
      ) : !data?.doctor ? (
        <>
          <PatientCards />
        </>
      ) : null}
      <Footer />
    </main>
  );
}
