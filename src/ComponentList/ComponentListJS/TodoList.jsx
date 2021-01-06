import React from 'react';
import TodoListItem from './TodoListItem';
import '../ComponentListCSS/TodoList.css'

class TodoList extends React.Component {
  render () {
    return (
      <ul className="list-group">
        {  this.props.items.map((item) => (
          <TodoListItem key={item.id} item={item} onDelete={this.props.onDelete} onToggle={this.props.onToggle} />
        )) }
      </ul>
    );
  }
}

export default TodoList;