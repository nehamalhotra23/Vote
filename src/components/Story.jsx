import React from "react";
import PropTypes from "prop-types";
import up from "../assets/img/up.png";
import down from "../assets/img/down.png";

class Story extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      votes: props.votes,
      editing: false
    };

    this.handleUpVoteClick = this.handleUpVoteClick.bind(this);
    this.handleDownVoteClick = this.handleDownVoteClick.bind(this);
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
  }

  edit(){}

  save(){}

  handleUpVoteClick(){
    let temp = this.state.votes;
    temp++ ;
    this.setState({votes: temp});
    console.log(this.state.votes);
  }
  handleDownVoteClick(){
    let temp = this.state.votes;
    temp--;
    this.setState({votes: temp});
    console.log(this.state.votes);
  }

  func(){

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
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
        <div>
          <p>{this.state.votes}</p>
          <button onClick={this.handleUpVoteClick}><img  style={upButtonStyle} src={up}/></button>
          <button onClick={this.handleDownVoteClick}><img  style={downButtonStyle} src={down}/></button>
        </div>
        
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.func()}
      </div>
    );
  }
}

Story.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  votes: PropTypes.number,
  index: PropTypes.number,
};


export default Story;