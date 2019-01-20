import React from "react";
import { uniqueId } from "../../util/id_generator";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: "",
    });
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <label>Title:
          <input type="text" onChange={this.handleChange("title")} value={this.state.title} required/>
        </label>
        <label>Body:
          <textarea className="input" onChange={this.handleChange('body')} value={this.state.body} required></textarea>
        </label>
        <button className="creat-button">Create!</button>
      </form>
    );
  }
};

export default TodoForm;