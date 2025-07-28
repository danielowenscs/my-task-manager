export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div
        onClick={() => onToggle(todo.id)}
        className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
      >
        {todo.text}
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </div>
  )
}
