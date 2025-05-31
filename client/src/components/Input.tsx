import { useState } from "react";
import axios from "axios";
import "../App.css";

const API_BASE_URL = "http://localhost:3000/api/v1";

type InputProps = {
  fetchTasks: () => void;
};

export default function Input({ fetchTasks }: InputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post(`${API_BASE_URL}/tasks`, { name: input });
      setInput("");
      fetchTasks();
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        className="bg-gray-100 border-2 p-1"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new task"
      />
      <button className="border-2 p-1 hover:bg-gray-100" onClick={handleSubmit}>
        Add Task
      </button>
    </div>
  );
}
