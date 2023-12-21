import { auth } from "../config";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
}

// Function to sign in with email and password
export default async function signIn() {
  let result = null,
    error = null;

  try {
    result = await signInWithGoogle();
  } catch (e) {
    error = e;
  }

  return { result, error };
}
