const FilterTodoItem = ( { text, fn  }  ) => {
    return (
        <>
            <button 
              className= 'todo-list__option'
              onClick = { fn }
            >
                { text }
            </button>
        </>
    )
}

export default FilterTodoItem;
