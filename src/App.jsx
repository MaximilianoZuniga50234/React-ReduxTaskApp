import { useSelector } from "react-redux";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const taskState = useSelector((state) => state.tasks);

  return (
    <div className="App">
      <h1>Hello</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
