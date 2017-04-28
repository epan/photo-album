import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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

    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  componentDidMount () {
    this.setState({
      images: seedData,
      currentImage: seedData[1]
    })
  }

  handleTitleClick (id) {
    console.log('id is:', id);
    axios.get('/photos', {
      params: { id: id }
    })
    .then(({data}) => {
      console.log('photo from GET:', data[0]);
      this.setState({
        currentImage: data[0]
      });
    })
    .catch((err) => {
      console.log(err);
    });
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
        <PhotoViewer image={this.state.currentImage} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
