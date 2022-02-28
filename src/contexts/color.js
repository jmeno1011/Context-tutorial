import React, { createContext, useState } from "react";

// color : "black" 로 context의 기본상태를 지정함
const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: { setColor: () => {}, setSubcolor: () => {} },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };
  return (
    <ColorContext.Provider value={value}>
      {children}
    </ColorContext.Provider>
  );
};

// const ColorConsumer = ColorContext.Consumer 랑 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;
