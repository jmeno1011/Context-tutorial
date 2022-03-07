import React from "react";
import { connect } from "react-redux";
import { changeInput, insert, toggle, remove } from "../modules/Todos";
import Todos from "../modules/Todos";

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      changeInput={changeInput}
      insert={insert}
      toggle={toggle}
      remove={remove}
    />
  );
};

export default connect(
  // 비구조화 할당을 통해 todos를 분리
  // state.todos.input 대신 todos.input을 사용
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  },
  TodosContainer
);
