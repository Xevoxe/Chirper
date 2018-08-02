import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PostContainer from './Components/Containers/PostContainer';
import TimelineContainer from './Components/Containers/TimelineContainer';


const history = {
  '1': {chirper: 'Roxy', message: "Your rock!", time: 1533064911661},
  '2': {chirper: 'Chelsea', message: "Im hungry :(", time: 1533064911661-20000000},
  '3': {chirper: 'Joey', message: "I've got pizza here!", time: 1533064911661-50000000}
};


class App extends Component {
  constructor(props){
    super(props);

    
    this.state = {
      //Keeps track of all chirps
      history: Object.keys(history).map((key) => history[key])  
    }

    this.handlePost = this.handlePost.bind(this);
  }

  //Callback function from PostView when a new chirp is submitted.
  handlePost(chirp){
    let updateHistory = this.state.history;
    updateHistory.unshift(chirp);
    this.setState({
      history: updateHistory
    });
  }

  //Main render logic for App
  //PostView renders and handles the Chirp form submission
  //TimelineContainer 
  render() {
    return (
        <div className="row">
          <div className="col-4">
          </div>
          <div className="col-4 mt-5">
          <PostContainer handlePost={this.handlePost}></PostContainer>
          <TimelineContainer timeline={this.state.history}></TimelineContainer>
          </div>
          <div className="col-4">
          </div>
        </div>
    )
  }
}

export default App;
