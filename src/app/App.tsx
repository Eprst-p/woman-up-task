import './App.less';
import Header from "../header/header";
import {useAppDispatch} from "../hooks/redux-hooks";
import {loadTasks} from "../store/data-process/data-process";
import {createdTasks} from "../mocks/create-tasks";
import Main from "../main/main";

function App() {
    const dispatch = useAppDispatch();
    dispatch(loadTasks(createdTasks));

    return (
    <div className="App">
      <Header />
      <Main />
    </div>
    );
}

export default App;
