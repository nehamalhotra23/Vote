import React from "react";
import PropTypes from "prop-types";
import up from "../assets/img/up.png";
import down from "../assets/img/down.png";

function Story(props){
 
  function handleUpVoteClick(){
    props.onLike(props.index)
  }
  function handleDownVoteClick(){
    props.onDisLike(props.index)
  }
    
    var upButtonStyle = {
      width: "30px",
      height: "30px",
      display: "inline-block"
    };
    var downButtonStyle = {
      width: "30px",
      height: "30px",
      display: "inline-block"
    };
    return(
      <div className="card">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <div>
          <p>{props.votes}</p>
          <button onClick={handleUpVoteClick}><img  style={upButtonStyle} src={up}/></button>
          <button onClick={handleDownVoteClick}><img  style={downButtonStyle} src={down}/></button>
        </div>
        
      </div>
    );
}

Story.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  votes: PropTypes.number,
  index: PropTypes.number,
  onLike: PropTypes.func
};


export default Story;