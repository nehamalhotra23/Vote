import React from "react";
import Story from "./Story";
import PropTypes from "prop-types";

function Feed(props){
  return(
    <div className="container">
      {props.storyFeed.map((story)=>
        <Story title={story.title}
          content={story.content}
          votes={story.votes}
          key={story.id}/>
        )}
    </div>
  );
}

Feed.propTypes = {
  storyFeed: PropTypes.array
};

export default Feed;