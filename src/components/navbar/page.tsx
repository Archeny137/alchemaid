"use client";
import Image from "next/image";
import { useAuthContext } from "@/context/AuthContext";
import Button from "../button/page";
import { motion } from "framer-motion";
import signIn from "../../firebase/auth/signIn";
import { signOut } from "firebase/auth";

const Navbar: React.FC = () => {
  const { user } = useAuthContext() as { user: any };

  return (
    <motion.nav
      className="flex justify-between bg-green1/50 md:px-4 py-2 px-2 items-center"
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center">
        <Image src={"/logo.png"} alt={"logo"} width={50} height={50} />
        <h1 className="text-black md:text-2xl text-xl font-bold">Alchemaid</h1>
      </div>
      <div>
        {user ? (
          <div
            onClick={() => {
              signOut;
            }}
          >
            <Button text="Logout" />
          </div>
        ) : (
          <div onClick={signIn}>
            <Button text="Login" />
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
