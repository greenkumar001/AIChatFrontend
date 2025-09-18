📰 Full-Stack News Chatbot with Qdrant + Gemini/OpenAI

This project is a full-stack AI chatbot where users can interact with a knowledge base of news articles. It uses React.js for the frontend, Node.js + Express for the backend, Redis for caching, and Qdrant for vector search with embeddings generated from Gemini (Google AI) or OpenAI.

🚀 Features

✅ Real-time chat interface (React.js)

✅ REST API (Express.js backend)

✅ Embedding generation using Gemini API or OpenAI API

✅ Vector similarity search with Qdrant

✅ Caching with Redis

✅ Automatic creation of news_collection in Qdrant

✅ Auto-load of news articles into Qdrant on startup

📂 Project Structure
project/
│── backend/
│   ├── src/
│   │   ├── routes/       # Express routes
│   │   ├── services/     # Qdrant + Embedding services
│   │   └── server.js     # Main backend entry
│   ├── package.json
│   └── .env
│
│── frontend/
│   ├── src/
│   │   ├── components/   # React components (ChatWindow, MessageList, etc.)
│   │   └── App.js
│   ├── package.json
│   └── .env
│
└── README.md

⚙️ Tech Stack

Frontend

React.js (with create-react-app)

Axios for API calls

WebSocket for live chat updates

Backend

Node.js + Express.js

Redis (message cache / history)

Qdrant (vector database for semantic search)

Gemini / OpenAI for embeddings & responses

🔧 Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/your-username/news-chatbot.git
cd news-chatbot

2️⃣ Backend Setup
cd backend
npm install


Create .env in backend/:

PORT=4000

# Choose one provider:
GEMINI_API_KEY=your_google_ai_api_key_here
# or
OPENAI_API_KEY=your_openai_api_key_here

QDRANT_URL=https://your-cluster-id.gcp.cloud.qdrant.io:6333
QDRANT_API_KEY=your_qdrant_api_key

REDIS_URL=redis://localhost:6379


Run backend:

npm run dev


Backend will auto-create news_collection in Qdrant.

3️⃣ Frontend Setup
cd frontend
npm install


Create .env in frontend/:

REACT_APP_API_URL=http://localhost:4000


Run frontend:

npm start

🧠 How It Works

User sends a chat message from the React app.

Backend generates an embedding for the message.

Embedding is searched in Qdrant (news_collection).

Relevant news articles are retrieved.

Gemini/OpenAI generates a response using context from the articles.

Response is cached in Redis & sent back to frontend.

🛠 Troubleshooting

500 Internal Server Error → Check backend logs, may be due to missing API key.

429 Quota exceeded → Your Gemini key hit free limits. Switch to OpenAI or enable billing.

404 Collection not found → Restart backend, it auto-creates news_collection.

Redis connection error → Ensure Redis is running locally (redis-server).

📌 Roadmap

 Authentication & user accounts

 Admin panel for uploading news

 Support for multiple collections (sports, finance, etc.)

 Deploy on cloud (Render / Vercel + Railway)

📝 License

MIT License © 2025 Your Name
