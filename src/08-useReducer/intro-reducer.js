

const initialState = [{
    id: 1,
    todo: 'Get the 1st dragon ball',
    done: false
}];

const todoReducer = (state = initialState, action) => {

    if (action?.type === 'add') {
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Get the 2nd dragon ball',
    done: false
};

const addTodoAction = {
    type: 'add',
    payload: newTodo
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });