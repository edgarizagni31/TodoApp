import FilterTodoItem from '../../components/FilterTodoItem';
import { shallow } from 'enzyme';

describe('test to FilterTodoItem', () => {
    const text = 'Activas';
    const filterComplete = jest.fn();
    const wrapper = shallow(<FilterTodoItem  text = {text} fn = { filterComplete } />);

    test('should displayed be correctly', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('button').text().trim()).toBe(text);
    });

    test('should call fn when click', () => {
        wrapper.find('button').simulate('click');
        expect( filterComplete ).toHaveBeenCalledTimes(1);
    });
});
