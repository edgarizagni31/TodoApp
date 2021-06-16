import TodoListItem from './TodoListItem';

import './styles/TodoList.css';

const TodoList = ( { listTodos } ) => {
  return (
    <>
        {
            listTodos.map(( todo ) => (
                <TodoListItem key = { todo.id } todo = { todo } />
            ))
        }
    </>         
  );
};

export default TodoList;

