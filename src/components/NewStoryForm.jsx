import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewStoryForm(props) {
  let _title = null;
  let _content = null;
  
  function handleSubmission(event) {
    event.preventDefault();
    props.onStoryCreation({title: _title.value, content: _content.value, votes: 0, id: v4()});
    _title.value = "";
    _content.value = "";
  }
  return (
    <div>
      <form onSubmit={handleSubmission}>
        <input
          type='text'
          id='title'
          placeholder='title'
          ref={(input) => {_title = input;}}/>
        <textarea
          type='text'
          id='content'
          placeholder='content'
          ref={(input) => {_content = input;}}/>
      
        <button type='submit'>Post</button>
      </form>
    </div>
  );
}

NewStoryForm.propTypes = {
  onStoryCreation: PropTypes.func
};

export default NewStoryForm;