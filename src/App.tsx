import React from 'react';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';
import { todoReducer } from './store/reducers';
import { TodoState, TodoActionTypes } from './store/types';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import DebugState from './components/DebugState';  // 导入 DebugState 组件

const store: Store<TodoState, TodoActionTypes> = createStore(todoReducer);
// dkkdkd
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
        <DebugState />
      </div>
    </Provider>
  );
};

export default App;