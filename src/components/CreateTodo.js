import React from "react";
import styled from "styled-components";

import { Consumer } from "./App";

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  margin: 1rem;
  padding: 1rem;
  height: 5vh;
  font-size: 4em;
  color: black;
`;

class CreateTodo extends React.Component {
  state = {
    value: ""
  };

  _onInputChange = e => this.setState({ value: e.target.value });

  _onSubmit = (e, context) => {
    if (e.key === "Enter") {
      const todo = {
        id: context.todos.length,
        name: this.state.value
      };
      this.setState({ value: "" });
      context.onAddTodo(todo);
    }
  };

  render() {
    const { value } = this.state;
    return (
      <Center>
        <Consumer>
          {context => (
            <Input
              type="text"
              value={value}
              onChange={this._onInputChange}
              onKeyPress={e => this._onSubmit(e, context)}
            />
          )}
        </Consumer>
      </Center>
    );
  }
}

export default CreateTodo;
