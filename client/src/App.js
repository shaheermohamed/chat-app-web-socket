import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import { ChatState } from "./context/chatProvider";

function App() {
  const { user } = ChatState();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Protected Route */}
        {user?.token ? (
          <Route path="/chats" element={<ChatPage />} />
        ) : (
          <Route path="/chats" element={<Navigate to="/" />} />
        )}

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
