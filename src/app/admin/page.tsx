"use client";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Page(): JSX.Element {
  const { user } = useAuthContext() as { user: any };
  const router = useRouter();

  useEffect(() => {
    if (user == null) {
      router.push("/");
    }
  }, [user, router]);

  return <h1>Only logged-in users can view this page</h1>;
}

export default Page;
