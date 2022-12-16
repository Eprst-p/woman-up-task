import './task-short.less'
import {TodoTaskType} from "../types/todo-task-type";
import {getDayFromIso, getMonthFromIso, getYearFromIso} from "../settings/getDateFromIso";
import {monthNames} from "../settings/months-names";
import {StatusName} from "../settings/status-names";
import {useAppDispatch} from "../hooks/redux-hooks";
import {changeActiveModal, changeId} from "../store/data-process/data-process";
import {ActiveModal} from "../settings/active-modal";

type TodoTaskProps = {
    task: TodoTaskType;
}

function TaskShort({task}: TodoTaskProps): JSX.Element {
    const dispatch = useAppDispatch();
    const {id, title, endDate, taskStatus} = task;
    const year = getYearFromIso(endDate);
    const month = monthNames[+getMonthFromIso(endDate)];
    const day = getDayFromIso(endDate);

    const handlerOnTaskClick = () => {
        dispatch((changeId(id)));
        dispatch(changeActiveModal(ActiveModal.TaskForm));
    }

    return (
        <div
            className={`todo-task ${taskStatus === StatusName.Done ? 'done' : ''}${taskStatus === StatusName.Failed ? 'failed' : ''}`}
            onClick={handlerOnTaskClick}
        >
            <h6 className="todo-task__title">{title}</h6>
            <div className="todo-task__end-date">{`до: ${day} ${month} ${year}г`}</div>
        </div>
    );
}

export default TaskShort;
