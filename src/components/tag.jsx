import React from 'react'

import './tag.css'

const tag = ({tagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: {backgroundColor: "#fda821", color: "black"},
    CSS: {backgroundColor: "#15d4c8", color: "black"},
    Javascript: {backgroundColor: "#ffd12c", color: "black"},
    PHP: {backgroundColor: "#4cdafc", color: "black"},
    React: {backgroundColor: "#fda821", color: "black"},
    SQL: {backgroundColor: "#ffd12c", color: "black"},
    default: {backgroundColor:'#292929'},
  };
  
  return (
    <button type='button' 
            className='tag' 
            style={selected ? tagStyle[tagName] : tagStyle.default}
            onClick={() => selectTag(tagName)}>
              {tagName}
    </button>
  );
}

export default tag