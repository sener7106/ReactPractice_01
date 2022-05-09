import React, { useState } from 'react'

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const onChange = (event) => setTodo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault()
    if (todo === '') {
      return
    }
    setTodo('')
    setTodos((currentArray) => [todo, ...currentArray])
    setTodo('')
  }
  console.log(todos)
  return (
    <div>
      <h1>My ToDos list : '{todos.length}'</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Write your to do"
        />
        <button>Add to Do</button>
      </form>
    </div>
  )
}

export default App
