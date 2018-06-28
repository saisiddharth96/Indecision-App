import React from "react";

const Option = props => {
  return (
    <div>
      <div className="option">
        <p className = "option__text" > {props.count}. {props.optionText}</p>
        <button
          onClick={e => {
            props.handleAddOption(props.optionText);
          }}
          className="button--link"
        >
          Delete one
        </button>
      </div>
    </div>
  );
};

export default Option;
