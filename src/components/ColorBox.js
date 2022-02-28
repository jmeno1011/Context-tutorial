import React, { useContext } from "react";
import ColorContext, { ColorConsumer } from "../contexts/color";

const ColorBox = () => {
  const {state} = useContext(ColorContext)
  return (
    <>
          <div
            style={{
              width: 64,
              height: 64,
              background: state.color,
            }}
          />
          <div
            style={{
              width: 64,
              height: 64,
              background: state.subcolor,
            }}
          />
    </>
  );
};

export default ColorBox;
