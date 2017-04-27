import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';
import PhotoViewer from './PhotoViewer';

class App extends React.Component {
  constructor () {
    super ();
    this.state = {
      example: 'value'
    };
  }

  render () {
    return (
      <div>
        <h2>Photo Library App</h2>
        <h4>Using MySQL, Knex, React</h4>
        <List />
        <PhotoViewer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
