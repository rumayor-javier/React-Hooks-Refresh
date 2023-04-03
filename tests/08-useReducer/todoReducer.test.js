import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Testing todoReducer', () => {

    const initialState = [{
        id: 1,
        desc: 'Testing demo',
        done: false
    }];

    test('should return initial state', () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(newState);

    });

    test('should add a new todo', () => {
        const action = {
            type: 'add',
            payload: {
                id: 2,
                desc: 'Testing demo 2',
                done: false
            }
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('should delete a todo', () => {
        const action = {
            type: 'delete',
            payload: 1
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    });

    test('should toggle a todo', () => {
        const action = {
            type: 'toggle',
            payload: 1
        };
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);
    });
});