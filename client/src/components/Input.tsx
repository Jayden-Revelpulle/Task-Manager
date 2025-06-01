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
    <div className="flex gap-2 w-full">
      <input
        type="text"
        className="flex-grow bg-gray-100 border-2 p-2 rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new task"
      />
      <button
        className="px-4 py-2 border-2 rounded hover:bg-gray-100 whitespace-nowrap"
        onClick={handleSubmit}
      >
        Add Task
      </button>
    </div>
  );
}
