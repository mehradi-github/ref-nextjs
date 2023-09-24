import React, { FC } from 'react';
import Todo from './Todo';
import { Todo as TodoModel } from '@prisma/client';
interface props {
  todos: TodoModel[];
}
const TodoList: FC<props> = ({ todos }) => {
  console.log('Tasks', todos);
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};
export default TodoList;
