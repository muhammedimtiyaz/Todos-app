import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";

class TodoList extends React.Component{
    
  render () {
    const { todos, receiveTodo, removeTodo } = this.props;
    const listItems = todos.map((todo, index) => {
      return (
        <TodoListItem
          key={index}
          todo={todo}
          receiveTodo={receiveTodo}
          removeTodo={removeTodo} />
      )
    });

    return (
      <>
        <ul className="todo-list">
          {listItems}
        </ul>
        <TodoForm receiveTodo={receiveTodo} />
      </>
    );
  }
}

export default TodoList;