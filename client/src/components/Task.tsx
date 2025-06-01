import { useState } from "react";

type TaskProps = {
  name: string;
  id: string;
  completed: boolean;
  onDelete: (id: string) => void;
  onUpdate: (id: string, completed: boolean, name?: string) => void;
};

export default function Task({
  name,
  id,
  completed,
  onDelete,
  onUpdate,
}: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState(name);

  const handleEdit = () => {
    if (isEditing) {
      onUpdate(id, completed, taskName);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center gap-3 p-3 mb-2 border-2 rounded">
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => onUpdate(id, e.target.checked)}
        className="w-5 h-5 cursor-pointer flex-shrink-0"
      />
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        disabled={!isEditing}
        className={`text-xl flex-grow min-w-0 bg-transparent outline-none ${
          completed ? "line-through text-gray-500" : ""
        } ${isEditing ? "border-b-2 border-blue-500" : "border-none"}`}
      />
      <div className="flex gap-2 flex-shrink-0">
      <button
          onClick={handleEdit}
          className="px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-100 w-[70px]"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => onDelete(id)}
          className="px-3 py-1 text-sm text-red-600 border border-red-600 rounded hover:bg-red-100 w-[70px]"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
