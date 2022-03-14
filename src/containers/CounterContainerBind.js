import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../modules/counter";

const CounterContainerBind = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  (dispatch) =>
    bindActionCreators(
      {
        increase,
        decrease,
      },
      dispatch
    )
)(CounterContainerBind);
