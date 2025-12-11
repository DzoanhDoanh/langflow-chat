import Markdown from "react-markdown";
import { ChatMessageType } from "../../../types/chatWidget";
import remarkGfm from "remark-gfm";
import rehypeMathjax from "rehype-mathjax";

export default function ChatMessage({
  message,
  isSend,
  error,
  user_message_style,
  bot_message_style,
  error_message_style,
}: ChatMessageType) {
  return (
    <div
      className={
        "cl-chat-message " + (isSend ? " cl-justify-end" : " cl-justify-start")
      }
    >
      {isSend ? (
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "flex-start",
            maxWidth: "85%",
          }}
        >
          <div style={user_message_style} className="cl-user_message">
            {message}
          </div>
          <img
            src="https://i.namu.wiki/i/zx0Y9idUoMXBYz1vmlRD8MQ4wtAhtjczAJbH6T7RVjZAhp_PII6owHwphYna_iLabtCGiiTMhfv9sEJ84gNoZA.webp"
            alt="User Avatar"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              objectFit: "contain",
              flexShrink: 0,
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      ) : error ? (
        <div style={error_message_style} className={"cl-error_message"}>
          {message}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "flex-start",
            maxWidth: "85%",
          }}
        >
          <img
            src="https://i.namu.wiki/i/zx0Y9idUoMXBYz1vmlRD8MQ4wtAhtjczAJbH6T7RVjZAhp_PII6owHwphYna_iLabtCGiiTMhfv9sEJ84gNoZA.webp"
            alt="Bot Avatar"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              objectFit: "contain",
              flexShrink: 0,
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
          <div style={bot_message_style} className={"cl-bot_message"}>
            <Markdown
              className={
                "markdown-body prose flex flex-col word-break-break-word"
              }
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeMathjax]}
            >
              {message}
            </Markdown>
          </div>
        </div>
      )}
    </div>
  );
}
