import './task-short.less'
import {TodoTaskType} from "../types/todo-task-type";
import {getDayFromIso, getMonthFromIso, getYearFromIso} from "../settings/getDateFromIso";
import {monthNames} from "../settings/months-names";
import {StatusName} from "../settings/status-names";

type TodoTaskProps = {
    task: TodoTaskType;
}

function TaskShort({task}: TodoTaskProps): JSX.Element {
    const {title, endDate, taskStatus} = task;
    const year = getYearFromIso(endDate);
    const month = monthNames[+getMonthFromIso(endDate)];
    const day = getDayFromIso(endDate);

    return (
        <div className={`todo-task ${taskStatus === StatusName.Done ? 'done' : ''}${taskStatus === StatusName.Failed ? 'failed' : ''}`}>
            <h6 className="todo-task__title">{title}</h6>
            <div className="todo-task__end-date">{`до: ${day} ${month} ${year}г`}</div>
        </div>
    );
}

export default TaskShort;
