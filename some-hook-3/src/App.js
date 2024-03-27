import UseRef from "./components/useRef";
import Memo from "./components/memo";
import UseCallback from "./components/UseCallback";
import UseMemo from "./components/UseMemo";
import UseReducer from "./components/UseReducer";
import ToDoList from "./components/ToDoList";
import Content from "./components/UseContent/Content";


function App() {
  return (
    <div className="">
      <UseRef/>
      <Memo/>
      <UseCallback/>
      <UseMemo/>
      <UseReducer/>
      <ToDoList/>
      <Content/>
    </div>
  );
}

export default App;
