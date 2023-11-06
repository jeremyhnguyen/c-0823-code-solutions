import { useEffect, useState } from 'react';
import { PageTitle } from './PageTitle';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';

export type UnsavedTodo = {
  task: string;
  isCompleted: boolean;
};
export type Todo = UnsavedTodo & {
  todoId: number;
};

export function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  /* Implement useEffect to fetch all todos. Hints are at the bottom of the file. */
  useEffect(() => {
    async function fetchTodos() {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/todos`);
        if (!response.ok) throw new Error(`fetch error:, ${response.status}`);
        const todos = await response.json();
        setTodos(todos);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTodos();
  }, []);

  /* Implement addTodo to add a new todo. Hints are at the bottom of the file. */
  async function addTodo(newTodo: UnsavedTodo) {
    try {
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTodo),
      });
      if (!response.ok) throw new Error(`fetch error:, ${response.status}`);
      const todo = await response.json();
      console.log(todo);
      const todoArray = todos.concat(todo);
      // const todoArray = [...todos, todo];  using spread
      setTodos(todoArray);
    } catch (error) {
      setError(error);
    }
  }

  /* Implement toggleCompleted to toggle the completed state of a todo. Hints are at the bottom of the file. */
  async function toggleCompleted(todoId: number) {
    try {
      const [editedTodo] = todos.filter((todo) => todo.todoId === todoId);
      const response = await fetch(`/api/todos/${todoId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isCompleted: !editedTodo.isCompleted }),
      });
      if (!response.ok) throw new Error(`fetch error:, ${response.status}`);
      const updatedTodo = await response.json();
      const complete = todos.map((todo) =>
        updatedTodo.todoId === todo.todoId ? updatedTodo : todo
      );
      setTodos(complete);
    } catch (error) {
      setError(error);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col pt-5">
          <PageTitle text="Todo App" />
          <TodoForm onSubmit={addTodo} />
          <TodoList todos={todos} toggleCompleted={toggleCompleted} />
        </div>
      </div>
    </div>
  );
}
