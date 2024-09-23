// ./src/store/types.ts
import { Action } from 'redux';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export interface AddTodoAction extends Action<typeof ADD_TODO> {
  payload: string;
  [key: string]: any; // 添加索引签名
}

export interface ToggleTodoAction extends Action<typeof TOGGLE_TODO> {
  payload: number;
  [key: string]: any; // 添加索引签名
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction;