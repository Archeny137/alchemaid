"use client";
import Image from "next/image";
import Button from "../button/page";
import { motion } from "framer-motion";
import { useAuthContext } from "@/context/AuthContext";
import { signOut } from "firebase/auth";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Navbar: React.FC = () => {
  const { user } = useAuthContext() as { user: any };
  return (
    <motion.nav
      className="flex justify-between border-b md:px-4 py-2 px-2 items-center "
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <a href="/">
        <div className="flex items-center">
          <Image src={"/logo.png"} alt={"logo"} width={50} height={50} />
          <h1 className="text-black md:text-2xl text-xl font-bold">
            Alchemaid
          </h1>
        </div>
      </a>

      {user ? (
        <div
          onClick={() => {
            signOut;
          }}
        >
          <Button text={"Logout"} />
        </div>
      ) : (
        <div>
          <a href="/#login">
            <Button text={"Login"} />
          </a>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
