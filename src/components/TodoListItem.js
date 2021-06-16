import { useContext } from 'react';

import { BsX } from 'react-icons/bs';
import { TodoContext } from '../TodoContext';

const TodoListItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  const handleRemoveTodo = (id) => {
    dispatch( { type: 'delete', payload: id} )
  };

  const handleToogleTodo = (id) => {
    dispatch( { type: 'toogle', payload: id} )
  };

  return (
    <div className='todo-list__item'>
      <button
        className={`${todo.done && "todo-list__btn--active"} todo-list__btn `}
        onClick={() => handleToogleTodo(todo.id)}
      ></button>
      <p className={`${todo.done && 'complete'} todo-list__text`}>
        {todo.desc}
      </p>
      <BsX
        className='todo-list__icon'
        onClick={() => handleRemoveTodo(todo.id)}
      />
    </div>
  );
};

export default TodoListItem;

