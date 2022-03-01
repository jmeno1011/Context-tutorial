import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// 반환하는 객체의 내부값들은 컴포넌트의 props으로 전달됨
// mapStateToProps의 경우 state 를 파라미터로 받아오고
const mapStateToProps = (state) => ({
  number: state.counter.number,
});

// mapDispatchToProps의 경우 dispatch를 통해 파라미터를 받아온다.
const mapDispatchToProps = (dispatch) => ({
  // 임시 함수들
  increase: () => {
    console.log("increase");
    dispatch(increase());
  },

  decrease: () => {
    console.log("decrease");
    dispatch(decrease());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
// CounterContainerAction.js
// CounterContainerBind.js
// 위 두 js파일은 이 파일과 동일한 기능을 한다.

// 위 코드와 같은 형식이다
// mapStateToProps, mapDispatchToProps로 나눠서 넣어도 되지만 하고 싶은 형식을 이용하면 된다.

// export default connect(
//     state=>({
//         number : state.counter.number
//     }),
//     dispatch => ({
//         increase: ()=>dispatch(increase()),
//         decrease: ()=>dispatch(decrease())
//     })
// )(CounterContainer)
