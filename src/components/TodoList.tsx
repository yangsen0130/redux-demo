import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TodoState } from '../store/types';
import { toggleTodo } from '../store/actions';

const TodoList: React.FC = () => {
  const todos = useSelector((state: TodoState) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => dispatch(toggleTodo(todo.id))}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;