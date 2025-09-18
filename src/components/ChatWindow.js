import React, { useEffect, useState } from "react";
import { sendMessage, fetchHistory, resetSession } from "../api";
import Message from "./Message";
import InputBox from "./InputBox";
import { v4 as uuidv4 } from "uuid";
import "../styles/ChatWindow.css";

export default function ChatWindow() {
  const [sessionId, setSessionId] = useState(
    localStorage.getItem("sessionId") || uuidv4()
  );
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("sessionId", sessionId);
    fetchHistory(sessionId).then(setMessages).catch(() => {});
  }, [sessionId]);

  const handleSend = async (msg) => {
    const userMsg = { role: "user", text: msg };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await sendMessage(sessionId, msg);
      const botMsg = { role: "bot", text: res.reply };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    await resetSession(sessionId);
    setMessages([]);
    const newSession = uuidv4();
    setSessionId(newSession);
  };

  return (
    <div className="chat-window">
      <header>
        <h2>📰 News Chatbot</h2>
        <button onClick={handleReset}>Reset Session</button>
      </header>

      <div className="messages">
        {messages.map((m, idx) => (
          <Message key={idx} role={m.role} text={m.text} />
        ))}
        {loading && <Message role="bot" text="Typing..." />}
      </div>

      <InputBox onSend={handleSend} />
    </div>
  );
}
