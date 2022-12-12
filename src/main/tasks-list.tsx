import './tasks-list.less';
import {createdTasks} from "../mocks/create-tasks";
import TodoTask from "./todo-task";

function TasksList(): JSX.Element {
    return (
        <div className="tasks-list">
            {
                createdTasks.map(task =>
                    <TodoTask task={task} key={task.id} />
                )
            }
        </div>
    );
}

export default TasksList;
