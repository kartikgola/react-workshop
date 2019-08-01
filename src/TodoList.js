import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {

  render() {
    const { todoList, removeTodo, toggleDone, editTodo } = this.props;

    return (
        <section className="TodoList">
          {
            todoList.map((todo, i) => (
              <TodoItem key={i} toggleDone={toggleDone} removeTodo={removeTodo} todo={todo} editTodo={editTodo} />
            ))
          }
        </section>
    );
  }
}
