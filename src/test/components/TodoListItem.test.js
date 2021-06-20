import { mount } from 'enzyme';
import { TodoContext } from '../../TodoContext';
import TodoListItem from '../../components/TodoListItem';
import { demoTodos } from '../fixtures/demoTodo';

describe('test to TodoListItem', () => {
    const dispatch = jest.fn();
    const todo = demoTodos[0];
    const wrapper = mount(
        <TodoContext.Provider  value = { { dispatch } }>
           <TodoListItem todo = { todo }/>
        </TodoContext.Provider>
    );

    test('should be displayed correctly', () => {
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('button').length ).toBe(1);
        expect( wrapper.find('p').text().trim() ).toBe( todo.desc )
        expect( wrapper.find('BsX').length ).toBe(1);
    });

    test('should mark the todo as complete', () => {
        wrapper.find('button').simulate('click', todo.id );
        expect( dispatch ).toHaveBeenCalledTimes(1);
        expect( dispatch ).toHaveBeenCalledWith({ type: 'toggle', payload: todo.id })
    });

    test('should mark the todo as delete', () => {
        wrapper.find('BsX').simulate('click', todo.id );
        expect( dispatch ).toHaveBeenCalledTimes(1);
        expect( dispatch ).toHaveBeenCalledWith({ type: 'delete', payload: todo.id })
    });
})
