import TodoList from '@/app/components/TodoList';
import db from '@/utils/db';
import { Todo } from '@prisma/client';

const getData = async () => {
  const todos: Todo[] = await db.todo.findMany({});
  return todos;
};
const TodosPage = async () => {
  const todos = await getData();

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};
export default TodosPage;
