"use client";

import { useState } from "react";
import axios from "axios";
import ChatBubble from "./ChatBubble";
import styles from "./ChatInterface.module.css";
import Navbar from "@/components/navbar/page";
import { IoSend } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Footer from "@/components/footer/page";

const ChatInterface: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [chatHistory, setChatHistory] = useState<
    { text: string; isUser: boolean }[]
  >([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const postmessage = {
      message: inputText,
    };

    try {
      const url = "https://alchbot-fmaprfvioa-de.a.run.app";
      setLoading(true);
      const { data } = await axios.post(url, postmessage);

      const newChat = {
        text: inputText,
        isUser: true,
      };

      const botResponse = {
        text: data,
        isUser: false,
      };

      setChatHistory((prevChat) => [...prevChat, newChat, botResponse]);
      setInputText("");
      setLoading(false);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };
  return (
    <>
      <div className=" flex flex-col h-screen pb-4 px-4">
        <Navbar />
        <div className={`${styles.chatHistory} pt-4`}>
          {chatHistory.map((chat, index) => (
            <ChatBubble key={index} text={chat.text} isUser={chat.isUser} />
          ))}
        </div>
        <form
          onSubmit={handleSubmit}
          className={
            " flex md:space-x-4 space-x-2 justify-center items-center max-w-[90vw] mx-auto"
          }
        >
          <input
            type="text"
            value={loading ? "" : inputText}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className={"border md:rounded-xl rounded-md md:py-2 px-4 w-[90vw]"}
          />
          <button type="submit" className={"bg-green2 rounded-xl p-2"}>
            {loading ? (
              <div className="rounded-full h-4 w-4 border-b-2 border-white animate-spin">
                <AiOutlineLoading3Quarters />
              </div>
            ) : (
              <IoSend />
            )}
          </button>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ChatInterface;
