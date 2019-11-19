import React from "react";
import Story from "./Story";


let seedData = [
  {
    title: "Title",
    content: "Content",
    votes: 0,
    id: 1
  },
  {
    title: "Title",
    content: "Content",
    votes: 0,
    id: 2
  }

];

function StorySeedData(){
  return(
    <div>
      {seedData.map((story, index) =>
        <Story title={story.title}
          content={story.content}
          votes={story.votes} 
          key={index}/> 
      )}
    </div>
  );
}

export default seedData;