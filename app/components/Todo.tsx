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
    <div
      className={`border border-black/20 cursor-pointer ${
        todo.completed ? 'line-through text-gray-900' : ''
      }`}
      onClick={() => {
        statrtTransition(() => {
          completeTodo(todo.id);
        });
      }}
    >
      {todo.content}
    </div>
  );
};
export default Todo;
