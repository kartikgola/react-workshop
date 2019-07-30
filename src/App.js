import React from 'react';
import './App.css';
import Table from './Table';

export default class App extends React.Component {
  render() {

    const bodyData = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]

    return (
      <div className="App">
        <header className="App-header">
          Just Another Table
        </header>
        <main>
          <Table bodyData={bodyData}/>
        </main>
        <footer className="App-footer">
          Developed by Kartik Gola
        </footer>
      </div>
    );
  }
}
