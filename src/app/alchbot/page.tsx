"use client";

import { useState } from "react";
import axios from "axios";
import ChatBubble from "./ChatBubble";
import styles from "./ChatInterface.module.css";
import Navbar from "@/components/navbar/page";

const ChatInterface: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<
    { text: string; isUser: boolean }[]
  >([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log("Sending message:", inputText);

    const postmessage = {
      message: inputText,
    };

    try {
      const url = "https://alchbot-fmaprfvioa-de.a.run.app";
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
        <form onSubmit={handleSubmit} className={styles.chatForm}>
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className={styles.chatInput}
          />
          <button type="submit" className={styles.sendButton}>
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatInterface;
