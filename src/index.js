import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp/TodoApp'
import todoItems from './mocks/initialTodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <TodoApp initItems={todoItems} />
  </React.StrictMode>,
  document.getElementById('root')
);