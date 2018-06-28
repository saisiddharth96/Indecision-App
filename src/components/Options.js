import React from "react";
import Option from "./Option.js";

const Options = props => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button onClick={props.handleDeleteOptions} className="button--link">
          Remove All
        </button>
      </div>
      {props.options.length === 0 && (
        <p className="widget-message">No options available! Please add some</p>
      )}
      {props.options.map((option,index) => {
        return (
          <Option
            key={option}
            count = {index + 1}
            optionText={option}
            handleAddOption={props.handleAddOption}
          />
        );
      })}
    </div>
  );
};
export default Options;
