import React from "react";
import styled, { injectGlobal } from "styled-components";

import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

injectGlobal`
  body {
    box-sizing: border-box;
    background-color: #123;
    margin: 0;
    padding: 0;
    font-size: 62.5%;
  }
`;

const Header = styled.h1`
  color: white;
  font-size: 8em;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 0.05em 0.03em 0.03em white;
`;

export const { Consumer, Provider } = React.createContext();

class App extends React.Component {
  state = {
    todos: [
      {
        id: 0,
        name: "Learn Swift"
      },
      {
        id: 1,
        name: "Make something in Electron JS"
      }
    ]
  };
  render() {
    const { todos } = this.state;

    return (
      <Provider
        value={{
          todos,
          onAddTodo: todo => this.setState({ todos: todos.concat(todo) }),
          onDeleteTodo: id =>
            this.setState({ todos: todos.filter(t => t.id !== id) })
        }}
      >
        <Header>Todo App</Header>
        <CreateTodo />
        <TodoList />
      </Provider>
    );
  }
}

export default App;
