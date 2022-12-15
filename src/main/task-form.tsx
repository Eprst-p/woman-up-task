import './task-form.less';
import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import {getTaskById} from "../store/selectors";
import {getDayFromIso, getMonthFromIso, getYearFromIso} from "../settings/getDateFromIso";
import {monthNames} from "../settings/months-names";
import React from "react";

function TaskForm(): JSX.Element {
    const dispatch = useAppDispatch();
    const task = useAppSelector(getTaskById);
    const {id, title, description, endDate, files, isDone, taskStatus} = task;
    const year = getYearFromIso(endDate);
    const month = monthNames[+getMonthFromIso(endDate)];
    const day = getDayFromIso(endDate);

    const handlerFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        console.log(task);
    }

    return (
        <form id="task-form" className="task-form" onSubmit={handlerFormSubmit}>
            <div className="task-form__top-block">
                <label htmlFor="task-form__title" className="task-form__title_label">
                    <span className="task-form__title_name">Название задачи</span>
                    <input id="task-form__title" className="task-form__title_field" type="text" defaultValue={title} form="task-form"></input>
                </label>
                <div className="task-form__upper_buttons">
                    <label htmlFor="done-btn" className="task-form__done-btn_label">
                        <span>выполнено</span>
                        <input id="done-btn" type="checkbox" className="task-form__done-btn" defaultChecked={isDone} ></input>
                    </label>
                    <button className="delete-btn" type="button">X</button>
                </div>
            </div>
            <label htmlFor="task-form__description" className="task-form__description_label">
                <span className="task-form__description_name">Описание</span>
                <textarea id="task-form__description" className="task-form__description" defaultValue={description} rows={5} form="task-form"></textarea>
            </label>
            <div className="todo-task__end-date">{`до: ${day} ${month} ${year}г`}</div>
            <div className="task-form__files">
                {
                    files.map(fileUrl => <span className="task-form__files_filename" key={fileUrl}>{fileUrl}<br></br></span>)
                }
            </div>
            <div className="task-form__bottom_buttons">
                <button className="cancel-btn" type="button">Отменить</button>
                <button className="save-btn" type="submit">Сохранить</button>
            </div>
        </form>
    );
}

export default TaskForm;
