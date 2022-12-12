import './todo-task.less'
import {TodoTaskType} from "../types/todo-task-type";

type TodoTaskProps = {
    task: TodoTaskType;
}

function TodoTask({task}: TodoTaskProps): JSX.Element {
    const {id, title, description, endDate, files, taskStatus} = task;

    return (
        <div className="todo-task">
            <h6 className="todo-task__title">{title}</h6>
            <textarea className="todo-task__description">{description}</textarea>
            <div className="todo-task__end-date">{endDate}</div>
            <div className="todo-task__files">{files.map(fileUrl => <p key={fileUrl}>{fileUrl}</p>)}</div>
        </div>
    );
}

export default TodoTask;
