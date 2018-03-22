import React from "react";
import styled from "styled-components";

import Todo from "./Todo";
import { Consumer } from "./App";

const TodoWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  border: 0.5rem solid yellowgreen;
  margin: 1rem;
  padding: 1rem;
`;

class TodoList extends React.Component {
  render() {
    return (
      <Consumer>
        {context =>
          context.todos.length &&
          context.todos.map(todo => (
            <TodoWrapper key={todo.id + todo.name + Date.now()}>
              <Todo todo={todo} />
            </TodoWrapper>
          ))
        }
      </Consumer>
    );
  }
}

export default TodoList;
