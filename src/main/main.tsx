import './main.less';
import {useAppSelector} from "../hooks/redux-hooks";
import {getFormOpenStatus} from "../store/selectors";
import TaskForm from "./task-form";
import TasksList from "./tasks-list";

function Main() {
    const isFormOpen = useAppSelector(getFormOpenStatus);

    return (
        <main className="main">
            {
                isFormOpen &&
                <TaskForm />
            }
            <TasksList />
        </main>
    );
}

export default Main;
