'use client';
import { newTodo } from '@/utils/actions';
import { useState } from 'react';

const NewTodoForm = () => {
  const [state, setstate] = useState('');

  return (
    <div>
      <form action={newTodo}>
        <input name="content" type="text" className="border border-black/25" />
        <button type="submit">New todo</button>
      </form>
    </div>
  );
};
export default NewTodoForm;
