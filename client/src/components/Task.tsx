type TaskProps = {
  name: string;
  id: string;
  onDelete: (id: string) => void;
};

export default function Task({ name, id, onDelete }: TaskProps) {
  return (
    <div className="flex items-center justify-between p-3 mb-2 border-2 rounded">
      <span>{name}</span>
      <button
        onClick={() => onDelete(id)}
        className="px-2 py-1 text-red-600 border border-red-600 rounded hover:bg-red-100"
      >
        Delete
      </button>
    </div>
  );
}
