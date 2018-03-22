import React from "react";
import styled from "styled-components";

import { Consumer } from "./App";

const Center = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  font-size: 3.2em;
  color: white;
  flex: 1;
  justify-content: space-between;
  &:first-child {
    flex: 2;
  }
  &:nth-child(2) {
    flex: 1;
  }
`;

class Todo extends React.Component {
  render() {
    const { todo } = this.props;
    return (
      <Center>
        <Title>
          <div>{todo.name}</div>
          <Consumer>
            {({ onDeleteTodo }) => (
              <div onClick={() => onDeleteTodo(todo.id)}>&times;</div>
            )}
          </Consumer>
        </Title>
      </Center>
    );
  }
}

export default Todo;
