import TodoItem from './TodoItem'

export default function TodoList({ todos = [], onToggle, onDelete }) {
  return (
    <div className="border rounded-md mt-4">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
