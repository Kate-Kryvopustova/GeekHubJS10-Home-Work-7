import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

class TodoList extends React.Component {
  render() {
    const activeList = [];
    const completeList = [];

    this.props.items.forEach((item) => {
      if (item.isDone) {
        return completeList.push(<TodoListItem key={item.id} item={item} onDelete={this.props.onDelete} onToggle={this.props.onToggle} />);
      }
      return activeList.push(<TodoListItem key={item.id} item={item} onDelete={this.props.onDelete} onToggle={this.props.onToggle} />);
    });

    return (
      <div>
        <ul className="list-group">
          {activeList}
        </ul>
        <hr />
        <ul className="list-group">
          {completeList}
        </ul>
      </div>
    );
  }
}

export default TodoList;
