import Compoisition from "./components/2-4.Props/Compoisition";
import Extaction from "./components/2-4.Props/Extraction/Extaction";
import ClassComponent from "./components/2-5.State/ClassComponent";
import FunctionalComponent from "./components/2-5.State/FunctionalComponent";
import ClassComponent2 from "./components/2-6.LifeCycle/ClassComponent";

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <FunctionalComponent />
      <Extaction />
      <Compoisition />
      <ClassComponent2 />
    </div>
  );
}

export default App;
