import { Todo as TodoModel } from '@prisma/client';
import React, { FC } from 'react';
interface props {
  todo: TodoModel;
}
const Todo: FC<props> = ({ todo }) => {
  console.log('tessssst:', todo);
  return (
    <div>
      <div>{todo.content}</div>
    </div>
  );
};
export default Todo;
