import './App.less';
import Header from "../header/header";
import TasksList from "../main/tasks-list";

function App() {
  return (
    <div className="App">
      <Header />
      <TasksList />
    </div>
  );
}

export default App;
