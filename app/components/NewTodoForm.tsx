'use client';
import { useState } from 'react';

const NewTodoForm = () => {
  const [state, setstate] = useState('');

  return (
    <div>
      <form>
        <input type="text" />
      </form>
    </div>
  );
};
export default NewTodoForm;
