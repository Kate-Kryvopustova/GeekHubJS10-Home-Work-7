import React from 'react';
import { Button } from 'react-bootstrap';
import '../ComponentListCSS/TodoForm.css';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {name: this.props.name}
    this.onSubmit = this.onSubmit.bind(this);
    this.itemName = React.createRef();
    this.form = React.createRef();
  }
  componentDidMount() {
    this.itemName.current.focus();
  }
  onSubmit(event) {
    this.props.addItem(this.state.name);
    this.setState({name: ''})
    event.preventDefault();
    /*
    var newItemValue = this.itemName.current.value;
    
    if(newItemValue) {
      this.props.addItem({newItemValue});
      this.form.current.reset();
    }
    */
  }
  render () {
    return (
      <form ref={this.form} onSubmit={this.onSubmit} className="form-inline">
        {/* <input type="text" ref={this.itemName} className="form-control" placeholder="add a new todo..."/> */}
        <input type="text" ref={this.itemName} value={ this.state.name } onChange={(e) => this.setState({name: e.target.value})} className="form-control" placeholder="add a new todo..."/>
        <Button variant="outline-secondary" type="submit" >Add</Button> 
      </form>
    );   
  }
}

export default TodoForm