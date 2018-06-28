import React from "react";
import AddOptions from "./AddOptions";
import Header from "./Header.js";
import Action from "./Action.js";
import Options from "./Options.js";
import OptionModal from "./OptionModal.js";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  componentDidMount() {
    try {
      console.log("Fetching Data");
      const storedOptions = localStorage.getItem("options");
      const options = JSON.parse(storedOptions);

      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      console.log("Saving Data");

      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handlePick = () => {
    const randNum = Math.floor(Math.random() * this.state.options.length);
    const selectedOption = this.state.options[randNum];
    // alert(selectedOption);
    this.setState(() => ({
      selectedOption: selectedOption
    }));
  };

  handleAddOption = option => {
    if (!option) {
      return "Enter valid value";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Item already exists";
    }

    this.setState(prevState => ({
      options: prevState.options.concat([option])
    }));
  };

  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option;
      })
    }));
  };

  render() {
    const title = "Indecision App";
    const subtitle = "Put your hands in the hands of a computer";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className = "widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleAddOption={this.handleDeleteOption}
            />
            <AddOptions handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}
