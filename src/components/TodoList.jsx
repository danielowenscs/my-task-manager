import TodoItem from './TodoItem'

const defaultTodos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Build a Todo app', completed: true },
]

function onToggle(id) {
  console.log('Toggle todo with id:', id)
}

function onDelete(id) {
  console.log('Delete todo with id:', id)
}

export default function TodoList({ todos = defaultTodos }) {
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
