import './task-form.less';
import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import {getTaskById} from "../store/selectors";
import {getDayFromIso, getMonthFromIso, getYearFromIso} from "../settings/getDateFromIso";
import {monthNames} from "../settings/months-names";
import React, {useEffect, useState} from "react";
import {StatusName} from "../settings/status-names";

function TaskForm(): JSX.Element {
    const dispatch = useAppDispatch();
    const task = useAppSelector(getTaskById);
    const {id, title, description, endDate, files, isDone, taskStatus} = task;
    const year = getYearFromIso(endDate);
    const month = monthNames[+getMonthFromIso(endDate)];
    const day = getDayFromIso(endDate);
    const [currentTaskStatus, setCurrentTaskStatus] = useState(taskStatus);

    const handlerFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        console.log(task);
    }

    const handlerOnTaskStatusBtnClick = () => {
        if (currentTaskStatus === StatusName.Done) {
            setCurrentTaskStatus(StatusName.InProgress)
        } else {
            setCurrentTaskStatus(StatusName.Done)
        }
    }

    //TODO сделать загрузку файлов
    return (
        <form id="task-form" className="task-form" onSubmit={handlerFormSubmit}>
            <div className="task-form__top-block">
                <label htmlFor="task-form__title" className="task-form__title_label">
                    <span className="task-form__title_name">Название задачи</span>
                    <input id="task-form__title" className="task-form__title_field" type="text" defaultValue={title} form="task-form"/>
                </label>
                <div className="task-form__upper_buttons">
                    <button
                        className={`task-status-btn ${currentTaskStatus === StatusName.Done ? 'done' : ''}${currentTaskStatus === StatusName.Failed ? 'failed' : ''}`}
                        type="button"
                        disabled={currentTaskStatus === StatusName.Failed}
                        onClick={handlerOnTaskStatusBtnClick}
                    >
                        {currentTaskStatus}
                    </button>
                    <button className="delete-btn" type="button">Удалить задачу</button>
                </div>
            </div>
            <label htmlFor="task-form__description" className="task-form__description_label">
                <span className="task-form__description_name">Описание</span>
                <textarea id="task-form__description" className="task-form__description" defaultValue={description} rows={5} form="task-form"></textarea>
            </label>
            <div className="todo-task__end-date">{`до: ${day} ${month} ${year}г`}</div>
            <div className="task-form__files">
                {
                    files.map((fileUrl, index) => <span className="task-form__files_filename" key={index}>{fileUrl}<br></br></span>)
                }
                <form className="load-files-form" encType="multipart/form-data" method="post">
                    <input type="file" name="f" multiple/>
                    <input type="submit" value="Отправить" />
                </form>
            </div>
            <div className="task-form__bottom_buttons">
                <button className="cancel-btn" type="button">Отменить</button>
                <button className="save-btn" type="submit">Сохранить</button>
            </div>
        </form>
    );
}

export default TaskForm;
