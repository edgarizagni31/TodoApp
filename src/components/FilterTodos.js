import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import FilterTodoItem from './FilterTodoItem';

const FilterTodos = () => {
    const { resetTodos, filterComplete, filterActives } = useContext(TodoContext);

    return (
        <div className = 'todo-list__options' aria-label = 'filtrar todos por '>
          <FilterTodoItem fn = { resetTodos } text = 'Todas' />
          <FilterTodoItem fn = { filterActives} text = 'Activas' />
          <FilterTodoItem fn = { filterComplete } text = 'Completadas' />
        </div>
    )
}

export default FilterTodos;

