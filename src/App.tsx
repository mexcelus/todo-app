import React, { useState } from 'react';
import { TodoListItem } from './TodoListItem'

const initialTodos: Array<Todo> = [
  {text: "Learn Typescript", complete: true}, 
  {text: "Walk the dog!", complete: false}
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoListItem todo={todos[0]} toogleTodo={toggleTodo}/>
      <TodoListItem todo={todos[1]} toogleTodo={toggleTodo}/>
    </React.Fragment>
  );
}

export default App;
