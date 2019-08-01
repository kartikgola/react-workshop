import React from 'react';
import './TodoItem.css';

export default class TodoItem extends React.Component {

    render() {
      const { todo, toggleDone, removeTodo, editTodo } = this.props;

      return (
        <section className="TodoItem">
            <div className="meta">
                <input type="checkbox" className="done-checkbox" checked={todo.isDone} onChange={() => toggleDone(todo)} name="isDone" />
            </div>
            <div className="content">
                <input type="text" name="text" className={todo.isDone ? "done" : ""} defaultValue={todo.text} onKeyUp={(e) => editTodo(e, todo)} />
            </div>
            <div className="meta">
                <button type="button" className="delete" name="remove" onClick={() => removeTodo(todo)}>Delete</button>
            </div>
        </section>
      );
    }
}