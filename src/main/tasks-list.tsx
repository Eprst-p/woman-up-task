import './tasks-list.less';
import {createdTasks} from "../mocks/create-tasks";
import TaskShort from "./task-short";
import {StatusName} from "../settings/status-names";

function TasksList(): JSX.Element {
    const tasksInProgress = createdTasks.filter(task => task.taskStatus === StatusName.InProgress);
    const tasksDone = createdTasks.filter(task => task.taskStatus === StatusName.Done);
    const tasksFailed = createdTasks.filter(task => task.taskStatus === StatusName.Failed);

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
        </div>
    );
}

export default TasksList;
