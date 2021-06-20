import { mount } from 'enzyme';
import FilterTodos from '../../components/FilterTodos';
import { TodoContext } from '../../TodoContext';

describe('test to FilterTodos', () => {
    const resetTodos = jest.fn();
    const filterComplete = jest.fn();
    const filterActives = jest.fn();

    const wrapper = mount(
        <TodoContext.Provider value = { { resetTodos, filterComplete, filterActives } }>
            <FilterTodos />
        </ TodoContext.Provider>
    );

    test('should be displayed correctly', () => {
        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('FilterTodoItem').length ).toBe(3);
    });
})
