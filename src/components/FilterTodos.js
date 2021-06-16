import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import FilterTodoItem from './FilterTodoItem';

const FilterTodos = () => {
    const { resetTodos, filterComplete, filterActivies } = useContext(TodoContext);

    return (
        <div className = 'todo-list__options' >
          <FilterTodoItem fn = { resetTodos } text = 'Todas' />
          <FilterTodoItem fn = { filterActivies} text = 'Activas' />
          <FilterTodoItem fn = { filterComplete } text = 'Completadas' />
        </div>
    )
}

export default FilterTodos;

