import { useState, useEffect } from "react";
import axios from "axios";
import Input from "./components/Input";
import Tasks from "./components/Tasks";

interface Task {
  _id: string;
  name: string;
  completed: boolean;
}

// In production, API calls will be made to the same origin
const API_BASE_URL = "/api/v1";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/tasks`);
      setTasks(response.data.tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full p-8">
      <h1 className="text-4xl font-bold mb-8">Task Manager</h1>
      <div className="w-full max-w-md">
        <Input fetchTasks={fetchTasks} />
        <div className="mt-8">
          <Tasks tasks={tasks} fetchTasks={fetchTasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
