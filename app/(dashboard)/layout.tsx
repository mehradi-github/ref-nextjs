import { FC, PropsWithChildren } from 'react';
import NewTodoForm from '../components/NewTodoForm';

const layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div>dashboard</div>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  );
};
export default layout;
