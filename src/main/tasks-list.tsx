import './tasks-list.less';
import TaskShort from "./task-short";
import {useAppSelector} from "../hooks/redux-hooks";
import {getAllTasks, getTasksDone, getTasksFailed, getTasksInProgress} from "../store/selectors";

function TasksList(): JSX.Element {
    const allTask = useAppSelector(getAllTasks);
    const tasksInProgress = useAppSelector(getTasksInProgress);
    const tasksDone = useAppSelector(getTasksDone);
    const tasksFailed = useAppSelector(getTasksFailed);

    return (
        <div className="tasks-list">
            {
                tasksInProgress.length !== 0 &&
                <div className="tasks-list__category in-progress">
                    <h6>В процессе</h6>
                    {
                        tasksInProgress.map(task =>
                            <TaskShort task={task} key={task.id} />
                        )
                    }
                </div>
            }
            {
                tasksDone.length !== 0 &&
                <div className="tasks-list__category done">
                    <h6>Сделано</h6>
                    {
                        tasksDone.map(task =>
                            <TaskShort task={task} key={task.id} />
                        )
                    }
                </div>
            }
            {
                tasksFailed.length !== 0 &&
                <div className="tasks-list__category failed">
                    <h6>Провалено</h6>
                    {
                        tasksFailed.map(task =>
                            <TaskShort task={task} key={task.id} />
                        )
                    }
                </div>
            }
            {
                allTask.length === 0 &&
                <p>Ни одной задачи нет. Добавьте новые задачи</p>
            }
        </div>
    );
}

export default TasksList;
