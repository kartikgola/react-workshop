import React from 'react';

export default class AddTodo extends React.Component {

    render() {
      const { addTodo } = this.props;

      return (
        <section className="AddTodo">
            <input type="text" name="add" onKeyUp={addTodo} placeholder="Enter new todo here..." />
        </section>
      );
    }
}