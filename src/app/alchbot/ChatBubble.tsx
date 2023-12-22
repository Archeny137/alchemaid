import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import styles from "./ChatBubble.module.css";

interface ChatBubbleProps {
  text: string;
  isUser: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ text, isUser }) => {
  return (
    <div
      className={`${styles.chatBubble} ${isUser ? styles.user : styles.bot}`}
    >
      <ReactMarkdown remarkPlugins={[gfm]}>{text}</ReactMarkdown>
    </div>
  );
};

export default ChatBubble;
