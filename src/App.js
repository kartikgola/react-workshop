import React from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bodyData: []
    };
  }

  removeData = removeIndex => {
    const { bodyData } = this.state;
    this.setState({
      bodyData: bodyData.filter((data, i) => {
        return i !== removeIndex;
      })
    });
  }


  handleSubmit = data => {
    this.setState({
      bodyData: [...this.state.bodyData, data]
    });
  }

  render() {
    const { bodyData } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          Just Another Table
        </header>
        <main>
          <Table bodyData={bodyData} removeData={this.removeData}/>
          <Form handleSubmit={this.handleSubmit} />
        </main>
        <footer className="App-footer">
          Developed by Kartik Gola
        </footer>
      </div>
    );
  }
}
