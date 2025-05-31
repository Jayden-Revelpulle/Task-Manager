import axios from "axios";
import Task from "./Task";

const API_BASE_URL = "http://localhost:3000/api/v1";

interface TaskType {
  _id: string;
  name: string;
}

interface TasksProps {
  tasks: TaskType[];
  fetchTasks: () => void;
}

export default function Tasks({ tasks, fetchTasks }: TasksProps) {
  const deleteTask = async (id: string) => {
    try {
      await axios.delete(`${API_BASE_URL}/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="w-full max-w-md">
      {tasks.map((task) => (
        <Task
          key={task._id}
          id={task._id}
          name={task.name}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
}
