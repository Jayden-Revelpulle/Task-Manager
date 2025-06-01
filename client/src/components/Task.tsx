type TaskProps = {
  name: string;
  id: string;
  completed: boolean;
  onDelete: (id: string) => void;
  onUpdate: (id: string, completed: boolean) => void;
};

export default function Task({
  name,
  id,
  completed,
  onDelete,
  onUpdate,
}: TaskProps) {
  return (
    <div className="flex items-center justify-between p-3 mb-2 border-2 rounded">
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => onUpdate(id, e.target.checked)}
        className="w-5 h-5 mr-3 cursor-pointer"
      />
      <span
        className={`text-2xl flex-grow ${
          completed ? "line-through text-gray-500" : ""
        }`}
      >
        {name}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => onDelete(id)}
          className="px-4 py-1 text-red-600 border border-red-600 rounded hover:bg-red-100 min-w-[80px]"
        >
          Delete
        </button>
        <button className="px-4 py-1 text-blue-600 border border-blue-600 rounded hover:bg-blue-100 min-w-[80px]">
          Edit
        </button>
      </div>
    </div>
  );
}
