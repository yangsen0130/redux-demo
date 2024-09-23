import { ADD_TODO, TOGGLE_TODO, TodoActionTypes } from './types';

export const addTodo = (text: string): TodoActionTypes => {
  return {
    type: ADD_TODO,
    payload: text,
  };
};

export const toggleTodo = (id: number): TodoActionTypes => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};