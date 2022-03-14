import React from "react";
import { connect } from "react-redux";
<<<<<<< HEAD
import Todos from "../components/Todos";
import { changeInput, insert, toggle, remove } from "../modules/todos";

const TodosContainer = ({
=======
import { changeInput, insert, toggle, remove } from "../modules/Todos";
import Todos from "../modules/Todos";

const TodosContainer = ({
  input,
  todos,
>>>>>>> 1552d2c8d853339d242e6b00f0765e340fdf41ad
  changeInput,
  insert,
  toggle,
  remove,
<<<<<<< HEAD
  input,
  todos,
=======
>>>>>>> 1552d2c8d853339d242e6b00f0765e340fdf41ad
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
<<<<<<< HEAD
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
=======
      changeInput={changeInput}
      insert={insert}
      toggle={toggle}
      remove={remove}
>>>>>>> 1552d2c8d853339d242e6b00f0765e340fdf41ad
    />
  );
};

export default connect(
<<<<<<< HEAD
=======
  // 비구조화 할당을 통해 todos를 분리
  // state.todos.input 대신 todos.input을 사용
>>>>>>> 1552d2c8d853339d242e6b00f0765e340fdf41ad
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
<<<<<<< HEAD
  }
)(TodosContainer);
=======
  },
  TodosContainer
);
>>>>>>> 1552d2c8d853339d242e6b00f0765e340fdf41ad
