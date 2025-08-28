import { getTodos } from "./actions";
import TodosList from "./todos-list";

export default async function TodosPage() {
  const todos = await getTodos();
  return <TodosList todos={todos} />;
}
