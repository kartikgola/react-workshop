import React from 'react';
import './TodoItem.css';

export default class TodoItem extends React.Component {

    render() {
      const { todo, toggleDone } = this.props;

      return (
        <section className="TodoItem">
            <div className="meta">
                <input type="checkbox" checked={todo.isDone} onChange={() => toggleDone(todo)} name="isDone" />
            </div>
            <div className="content">
                <input type="text" name="text" defaultValue={todo.text} />
            </div>
        </section>
      );
    }
}