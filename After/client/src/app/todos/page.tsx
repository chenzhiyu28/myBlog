import getTodos, { Todo } from "../api/todos";
import { TodoItem } from "../components/TodoItem";

export default async function TodosPage() {
  const todos = await getTodos();
  return (
    <>
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </>
  );
}
