import './App.less';
import Header from "../header/header";
import TasksList from "../main/tasks-list";
import {useAppDispatch} from "../hooks/redux-hooks";
import {loadTasks} from "../store/data-process/data-process";
import {createdTasks} from "../mocks/create-tasks";

function App() {
    const dispatch = useAppDispatch();
    dispatch(loadTasks(createdTasks));

    return (
    <div className="App">
      <Header />
      <TasksList />
    </div>
    );
}

export default App;
