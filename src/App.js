import "./App.css";
import ColorBox from "./components/ColorBox";
import Counter from "./components/containers/Counter";
import SelectColors from "./components/SelectColors";
import Todos from "./components/Todos";
import { ColorProvider } from "./contexts/color";

function App() {
  return (
    <>
      <ColorProvider>
        <div>
          <SelectColors />
          <ColorBox />
        </div>
      </ColorProvider>
      <hr />
      <div>
        <h1>Redux</h1>
        <Counter number={0}/>
      </div>
      <hr />
      <Todos />
    </>
  );
}

export default App;
