import React from "react";
import PropTypes from "prop-types";
import {Switch, Route} from "react-router-dom";
import NavBar from "./NavBar";
import Error404 from "./Error404";
import Feed from "./Feed";
import StorySeedData from "./StorySeedData";
import NewStoryForm from "./NewStoryForm";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      storyFeed: StorySeedData
    };
    this.handleNewStory = this.handleNewStory.bind(this);
    this.handleUpVoteClick = this.handleUpVoteClick.bind(this);
    this.handleDownVoteClick = this.handleDownVoteClick.bind(this);
  }

  handleNewStory(newStory){
    let temp = this.state.storyFeed.slice();
    temp.push(newStory);
    this.setState({storyFeed: temp});
  }

  handleUpVoteClick(id){
    var copy = this.state.storyFeed;
    copy[id].votes = copy[id].votes + 1;
    this.setState({storyFeed: copy})
  }  
  handleDownVoteClick(id){
    var copy = this.state.storyFeed;
    copy[id].votes = copy[id].votes - 1;
    this.setState({storyFeed: copy})
  }  
  render() {
    return(
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/" render={()=><Feed storyFeed={this.state.storyFeed}  onLike={this.handleUpVoteClick} onDisLike={this.handleDownVoteClick}/>}/>
          <Route path="/newstory" render={()=><NewStoryForm onStoryCreation={this.handleNewStory} />} />
          <Route component={Error404} />
        </Switch>

      </div>
    );
  }
}

export default App;