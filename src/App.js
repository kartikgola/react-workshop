import React from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          isDone: false,
          text: 'Learn React.js'
        },
        {
          isDone: true,
          text: 'Create todo app'
        }
      ]
    };
  }

  removeTodo = todo => {
    const { todoList } = this.state;
    this.setState({
      todoList: todoList.filter(_todo => {
        return _todo !== todo;
      })
    });
  }


  addTodo = event => {
    if ( event.key === 'Enter' ) {
      const { todoList } = this.state;
      this.setState({
        todoList: [...todoList, { isDone: false, text: event.target.value }]
      });
      event.target.value = "";
    }
  }

  toggleDone = todo => {
    this.setState((state, props) => {
      const _todoList = state.todoList.slice();
      for ( const _todo of _todoList ) {
        if ( _todo === todo ) {
          _todo.isDone = !_todo.isDone;
          break;
        }
      }
      return { todoList: _todoList };
    });
  }

  render() {
    const { todoList } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          Just Another To-do App
        </header>
        <main>
          <TodoList todoList={todoList} toggleDone={this.toggleDone} addTodo={this.addTodo} removeTodo={this.removeTodo}/>
          <AddTodo addTodo={this.addTodo} />
        </main>
        <footer>
        </footer>
      </div>
    );
  }
}
