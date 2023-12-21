import { motion } from "framer-motion";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { useAuthContext } from "@/context/AuthContext";

const types = [
  {
    img: "/doctor.png",
    title: "Doctor",
  },
  {
    img: "/patient.png",
    title: "Patient",
  },
];

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { db, firebase_app } from "@/firebase/config";
import { useEffect } from "react";

const LoginSection = () => {
  const { user } = useAuthContext() as any;
  const [selectedType, setSelectedType] = useState("Patient");
  const [loginVisible, setLoginVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [wrongCredentials, setWrongCredentials] = useState(false);

  const [CsignUp, setCSignUp] = useState(false);
  const auth = getAuth(firebase_app);

  async function handleSignUp({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    console.log("Hello");

    createUserWithEmailAndPassword(auth, email, password);
    const docRef = await setDoc(doc(db, "users", email), {
      email: email,
      password: password,
      doctor: selectedType === "Doctor" ? true : false,
    });
    alert("Signed Up");
    setLoginVisible(false);
  }
  console.log(user);

  useEffect(() => {
    if (user) {
      setLoginVisible(false);
    } else {
      setLoginVisible(true);
    }
  }, [user]);

  async function handleLogin({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged In");
      setLoginVisible(false);
    } catch (error) {
      setWrongCredentials(true);
    }
  }
  return (
    <>
      {!user ? (
        <motion.div
          className="w-full flex flex-col justify-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-semibold py-16 text-center">
            Login/Signup as
          </h1>

          <div className="md:flex flex-col lg:flex-row gap-16 justify-center">
            {types.map((type, index) => {
              return (
                <div
                  className={`flex flex-col items-center justify-center`}
                  key={index}
                >
                  <div
                    className={`${
                      index === 0
                        ? "lg:pr-[4rem] lg:border-r lg:border-black"
                        : null
                    }`}
                  >
                    <Dialog>
                      <DialogTrigger>
                        <motion.img
                          src={type.img}
                          alt={type.title}
                          className={`lg:w-96 w-72  bg-green-100 rounded-full p-4`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          onClick={() => {
                            setSelectedType(type.title);
                          }}
                        />
                      </DialogTrigger>
                      <DialogContent>
                        <div>
                          <h1>{`${type.title}`} Login </h1>
                          <h3>
                            {wrongCredentials && !CsignUp ? (
                              <p>Wrong Credentials</p>
                            ) : null}
                          </h3>
                          <div>
                            <p>Email ID</p>
                            <Input
                              type="text"
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                            />
                            <p>Password</p>
                            <Input
                              type="password"
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                            />
                            {CsignUp ? (
                              <>
                                <p>Confirm Password</p>
                                <Input
                                  type="password"
                                  onChange={(e) => {
                                    e.target.value;
                                  }}
                                />
                              </>
                            ) : null}

                            {CsignUp ? (
                              <button
                                onClick={() => {
                                  handleSignUp({ email, password });
                                }}
                              >
                                SignUp
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  handleLogin({ email, password });
                                }}
                              >
                                Login
                              </button>
                            )}

                            {CsignUp ? (
                              <p>
                                Have an account already?{" "}
                                <span
                                  className="cursor-pointer underline underline-offset-2"
                                  onClick={() => {
                                    setCSignUp(false);
                                  }}
                                >
                                  Login
                                </span>
                              </p>
                            ) : (
                              <p>
                                Don't have an account?{" "}
                                <span
                                  className="cursor-pointer underline underline-offset-2"
                                  onClick={() => {
                                    setCSignUp(true);
                                  }}
                                >
                                  Signup
                                </span>
                              </p>
                            )}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <h1 className="md:text-3xl text-2xl font-semibold lg:py-16 py-8 text-center">
                    {type.title}
                  </h1>
                </div>
              );
            })}
          </div>
        </motion.div>
      ) : null}
    </>
  );
};

export default LoginSection;
