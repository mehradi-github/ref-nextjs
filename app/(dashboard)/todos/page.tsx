import db from '@/utils/db';

const getData = async () => {
  const todos = await db.todo.findMany({});
  return todos;
};
const TodosPage = async () => {
  const todos = await getData();
  return <div>TodosPage</div>;
};
export default TodosPage;
