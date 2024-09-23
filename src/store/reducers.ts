import { Reducer } from 'redux';
import { TodoState, TodoActionTypes, ADD_TODO, TOGGLE_TODO } from './types';

const initialState: TodoState = {
  todos: [],
};

export const todoReducer: Reducer<TodoState, TodoActionTypes> = (
  state = initialState,
  action
): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            text: action.payload,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
};