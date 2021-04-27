import React from 'react';
import './TodoListItem.css';
import { Check2, Circle } from 'react-bootstrap-icons';

class TodoListItem extends React.Component {
  render() {
    const todoClass = this.props.item.isDone ? 'done' : 'undone';

    const isDoneItem = this.props.item.isDone;
    const svgStyle = {
      marginLeft: 15,
    };

    return (
      <li className="list-group-item" onClick={() => { this.props.onToggle(this.props.item.id); }}>

        <div className={todoClass}>

          { isDoneItem
            ? <Check2 />
            : <Circle />}

          <span style={svgStyle}>{this.props.item.value}</span>

          <button
            type="button"
            className="close"
            onClick={(event) => {
              event.stopPropagation();
              this.props.onDelete(this.props.item.id);
            }}
          >
            &times;
          </button>
        </div>
      </li>
    );
  }
}

export default TodoListItem;
