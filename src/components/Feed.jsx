import React from "react";
import Story from "./Story";
import PropTypes from "prop-types";

function Feed(props) {

  return (
    <div className="container">
      {props.storyFeed.map((story, index) =>

        <Story title={story.title}
          content={story.content}
          votes={story.votes}
          updateFeed={props.updateFeed}
          index={index}
          id={story.id}
          key={index}
          onLike={props.onLike}
          onDisLike={props.onDisLike}
        />
      )}
    </div>
  );
}

Feed.propTypes = {
  storyFeed: PropTypes.array,
  onLike: PropTypes.func,
  onDisLike: PropTypes.func
};

export default Feed;