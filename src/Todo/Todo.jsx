import React from 'react';
import Form from './components/Form/Form';
import List from './components/List/List';
import './Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoItems: this.props.initItems };
  }

  addItem = (itemName) => {
    const todoItem = {
      id: Date.now(),
      value: itemName,
      isDone: false,
    };

    this.setState((state) => {
      const todoItems = [...state.todoItems, todoItem];

      return { todoItems };
    });
  }

  handleDelete = (id) => {
    this.setState({
      todoItems: this.state.todoItems.filter((item) => item.id !== id),
    });
  }

  toggleTodoItem = (id) => {
    this.setState((state) => {
      const todoItems = state.todoItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isDone: !item.isDone,
          };
        }

        return item;
      });

      return { todoItems };
    });
  }

  render() {
    return (
      <div id="main">
        <h1 className="title">Todo list</h1>
        <Form addItem={ this.addItem } name="" />
        <List
          items={ this.state.todoItems }
          onDelete={ this.handleDelete }
          onToggle={ this.toggleTodoItem }
        />
      </div>
    );
  }
}

export default Todo;
