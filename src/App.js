import "./App.css";
import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";
import Todos from "./components/Todos";
import CounterContainer from "./containers/CounterContainer";
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
        <CounterContainer />
        <hr />
        <Todos />
      </div>
    </>
  );
}

export default App;
