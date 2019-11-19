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
  }

  handleNewStory(newStory){
    let temp = this.state.storyFeed.slice();
    temp.push(newStory);
    this.setState({storyFeed: temp});
  }
  
  render() {
    return(
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/" render={()=><Feed storyFeed={this.state.storyFeed} />}/>
          <Route path="/newstory" render={()=><NewStoryForm onStoryCreation={this.handleNewStory} />} />
          <Route component={Error404} />
        </Switch>

      </div>
    );
  }
}

export default App;