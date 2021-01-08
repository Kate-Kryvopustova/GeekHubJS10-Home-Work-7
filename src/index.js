import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList';
import todoItems from './mocks/initialTodoList';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoItems: this.props.initItems };
  }

  addItem = (itemName) => {
    const todoItem = {
      id: Date.now(),
      value: itemName,
      isDone: false
    }

    this.setState(state => {
      const todoItems = [...state.todoItems, todoItem]

      return { todoItems };
    });
  }

  handleDelete = (id) => {
    this.setState({
      todoItems: this.state.todoItems.filter(item => item.id !== id)
    })
  }

  toggleTodoItem = (id) => {
    this.setState(state => {
      const todoItems = state.todoItems.map(item => {
        if (item.id === id) {
          return {
            ...item,
            isDone: !item.isDone,
          };
        }
   
        return item;
      })

      return {todoItems}
    })
  }

  render() {
    return (
      <div id="main">
        <h1 className='title'>Todo list</h1>
        <TodoForm addItem={this.addItem} name={''} />
        <TodoList items={this.state.todoItems} onDelete={this.handleDelete} onToggle={this.toggleTodoItem} />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <TodoApp initItems={todoItems} />
  </React.StrictMode>,
  document.getElementById('root')
);

