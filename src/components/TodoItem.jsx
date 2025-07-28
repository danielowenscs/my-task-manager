export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <div
        onClick={() => onToggle(todo.id)}
        className={`todo-text ${todo.completed ? 'completed' : ''}`}
      >
        {todo.text}
      </div>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        ✕
      </button>
    </div>
  )
}
