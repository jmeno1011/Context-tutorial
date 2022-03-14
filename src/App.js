import "./App.css";
import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";
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
        <TodosContainer />
      </div>
    </>
  );
}

export default App;
