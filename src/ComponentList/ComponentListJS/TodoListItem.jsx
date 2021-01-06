import React from 'react';
import '../ComponentListCSS/TodoListItem.css'

class TodoListItem extends React.Component {
  render () {
    const todoClass = this.props.item.done ? "done" : "undone";
     
    return(
      <li className="list-group-item" onClick={() => {this.props.onToggle(this.props.item.id)}}>
        <div className={todoClass}>
          <span className="glyphicon glyphicon-ok icon" aria-hidden="true" type="button">&#10003;</span>
          {this.props.item.value}
          <button type="button" className="close" onClick={(event) => {
            event.stopPropagation();
            this.props.onDelete(this.props.item.id)
          }}>&times;</button>
        </div>
      </li>     
    );
  }
}

export default TodoListItem;