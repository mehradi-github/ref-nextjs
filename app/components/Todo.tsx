'use client';
import { completeTodo } from '@/utils/actions';
import { Todo as TodoModel } from '@prisma/client';
import React, { FC, useTransition } from 'react';
interface props {
  todo: TodoModel;
}
const Todo: FC<props> = ({ todo }) => {
  const [isPending, statrtTransition] = useTransition();
  return (
    <div>
      <div
        onClick={() => {
          statrtTransition(() => {
            completeTodo(todo.id);
          });
        }}
      >
        {todo.content}
      </div>
    </div>
  );
};
export default Todo;
