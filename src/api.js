import axios from "axios";

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:4000";

export async function sendMessage(sessionId, message) {
  const res = await axios.post(`${API_BASE}/chat/${sessionId}`, { message });
  return res.data;
}

export async function fetchHistory(sessionId) {
  const res = await axios.get(`${API_BASE}/chat/${sessionId}`);
  return res.data.history;
}

export async function resetSession(sessionId) {
  const res = await axios.delete(`${API_BASE}/chat/${sessionId}`);
  return res.data;
}
