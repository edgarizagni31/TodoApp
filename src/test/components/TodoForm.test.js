import  { TodoContext } from '../../TodoContext';
import  { mount } from 'enzyme';
import TodoForm from '../../components/TodoForm';

describe('test to TodoForm', () => {
    const dispatch = jest.fn();

    const wrapper = mount(
        <TodoContext.Provider value = {{  dispatch }}>
            <TodoForm />
        </TodoContext.Provider>
    );

    test('should be displayed correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should t call dispatch', () => {
        window.alert = jest.fn();

        wrapper.find('form').prop('onSubmit')( { preventDefault(){} } );
        expect(dispatch).not.toHaveBeenCalled();
        expect( alert ).toBeCalledWith('Este campo no puede estar vacio');
    });

    test('should call dispatch', () => {

        wrapper.find('input').simulate('change', { target: { value: 'hola' } });
        wrapper.find('form').prop('onSubmit')( { preventDefault(){} } );
        expect(dispatch).toHaveBeenCalledTimes(1);
    });

})
