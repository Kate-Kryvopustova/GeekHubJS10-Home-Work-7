import React from 'react';
import Todo from '../Todo/Todo';
import todoItems from '../mocks/initialTodoList';

const App = () => <Todo initItems={ todoItems } />;

export default App;
