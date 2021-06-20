import TodoList from '../../components/TodoList';
import { shallow } from 'enzyme'
import { demoTodos } from '../fixtures/demoTodo';

describe('test to TodoList', () => {
    const wrapper = shallow(<TodoList listTodos = {demoTodos}/>);

    test('should be displayed correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should have demoTodos.length <TodoListItem />', () => {
        expect( wrapper.find('TodoListItem').length ).toBe(demoTodos.length);
    });
});
