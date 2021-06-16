const FilterTodoItem = ( { text, fn  }  ) => {
    return (
        <p 
          className= 'todo-list__option'
          onClick = { fn }
        >
            { text }
        </p>

    )
}

export default FilterTodoItem;
