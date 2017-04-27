import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';
import PhotoViewer from './PhotoViewer';
import seedData from '../../db/seeds/seed';

class App extends React.Component {
  constructor () {
    super ();
    this.state = {
      images: [],
      currentImage: {}
    };
  }

  componentDidMount () {
    this.setState({
      images: seedData,
      currentImage: seedData[0]
    })
  }

  handleTitleClick () {
    console.log('hi');
  }

  render () {
    return (
      <div>
        <h2>Photo Library App</h2>
        <h4>Using MySQL, Knex, React</h4>
        <List
          images={this.state.images}
          handleTitleClick={this.handleTitleClick}
        />
        <PhotoViewer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
