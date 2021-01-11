import React from 'react';
import { Button } from 'react-bootstrap';
import './TodoForm.css'

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {name: this.props.name};

    this.itemName = React.createRef();
  }

  componentDidMount() {
    this.itemName.current.focus();
  }

  componentDidUpdate() {
    this.itemName.current.focus();
  }

  onSubmit = (event) => {
    if(!this.state.name.trim()) return 
    this.props.addItem(this.state.name);
    this.setState({name: ''})
    event.preventDefault();
  }

  onChange = (event) => {
    this.setState(
      {name: event.target.value}
    )
  }

  render () {
    return (
      <form onSubmit={this.onSubmit} className="form-inline">
        <input type="text" ref={this.itemName} value={ this.state.name } onChange={this.onChange} className="form-control" placeholder="add a new task..."/>
        <Button variant="outline-secondary" type="submit" >Add</Button> 
      </form>
    );   
  }
}

export default TodoForm