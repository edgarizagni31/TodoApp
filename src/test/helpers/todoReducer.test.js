import { todoReducer } from '../../helpers/todoReducer';
import { demoTodos } from '../fixtures/demoTodo';

describe('test a todoReducer', () => {
	test('should add new Todo', () => {
		const newTodo = {
			id: 3,
			desc: 'aprender python',
			done: false
		} 

		const newState = todoReducer(demoTodos, { type: 'add', payload: newTodo });

		demoTodos.push(newTodo);

		expect( newState ).toEqual(demoTodos);
	});

	test('Should mark a whole as complete', () => {
		const selectId = 1;
		const updateTodos = demoTodos.map( todo => todo.id === selectId ? {...todo, done: true } : todo );
		const newState = todoReducer(demoTodos, { type: 'toggle', payload: selectId} );

		expect( newState ).toEqual(updateTodos);
	})

	test('should delete todo', () => {
		const selectId = 1;
		const newState = todoReducer(demoTodos, { type: 'delete', payload: selectId });

		expect( newState.length ).toBe( demoTodos.length - 1 );
	})

	test('should delete the completes once', () => {
		const selectId = 1;
		const updateTodos = demoTodos.map( todo => todo.id === selectId ? {...todo, done: true } : todo );
		const newState = todoReducer(updateTodos, { type: 'delete-completed'} );

		expect( newState.length ).toBe( updateTodos.length - 1 );
	})
})