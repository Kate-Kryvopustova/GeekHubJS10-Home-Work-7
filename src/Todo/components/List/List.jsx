import React from 'react';
import './List.css';
import ListItem from '../ListItem/ListItem';

class List extends React.Component {
  renderItem(item) {
    return (
      <ListItem
        key={ item.id }
        item={ item }
        onToggle={ this.props.onToggle }
        onDelete={ this.props.onDelete }
      />
    );
  }

  render() {
    return (
      <div>
        <ul className='list-group'>
          { this.props.items.map((item) => !item.isDone && this.renderItem(item)) }
        </ul>
        <hr />
        <ul className='list-group'>
          { this.props.items.map((item) => item.isDone && this.renderItem(item)) }
        </ul>
      </div>
    );
  }
}

export default List;
