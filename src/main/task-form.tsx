import './task-form.less';
import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import {getChosenId, getTaskById} from "../store/selectors";
import {getDayFromIso, getMonthFromIso, getYearFromIso} from "../settings/getDateFromIso";
import {monthNames} from "../settings/months-names";
import React, {useRef, useState} from "react";
import {StatusName} from "../settings/status-names";
import {TodoTaskType} from "../types/todo-task-type";
import {changeActiveModal, saveTask} from "../store/data-process/data-process";
import {ActiveModal} from "../settings/active-modal";
import {faker} from "@faker-js/faker";

function TaskForm(): JSX.Element {
    const dispatch = useAppDispatch();
    const chosenId = useAppSelector(getChosenId);
    const defaultTask:TodoTaskType = {
        id: faker.datatype.uuid(),
        title: 'Я новая задача',
        description: 'Мне нужно сделать пум-пурум-пум-пум',
        endDate: (new Date).toString(),
        files: [],
        taskStatus: StatusName.InProgress
    }
    let task:TodoTaskType;
    const chosenTaskById = useAppSelector(getTaskById);
    if (chosenId) {
        task = {...chosenTaskById}
    } else {
        task = {...defaultTask};
    }
    const {id, title, description, endDate, files, taskStatus} = task;
    const year = getYearFromIso(endDate);
    const month = monthNames[+getMonthFromIso(endDate)];
    const day = getDayFromIso(endDate);
    const [currentTaskStatus, setCurrentTaskStatus] = useState(taskStatus);

    const formRef = useRef<HTMLFormElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);

    const handlerFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const newTask:TodoTaskType = {
            id: id,
            title: titleRef.current?.value || '',
            description: descriptionRef.current?.value || '',
            endDate: endDate,
            files: files,
            taskStatus: currentTaskStatus
        }
        dispatch(saveTask(newTask))
        dispatch(changeActiveModal(ActiveModal.NoModal));
    }

    const handlerFormCancel = () => {
        dispatch(changeActiveModal(ActiveModal.NoModal));
    }

    const handlerTaskDelete = () => {
        dispatch(changeActiveModal(ActiveModal.RemoveTask));
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
        <form id="task-form" className="task-form" onSubmit={handlerFormSubmit} ref={formRef}>
            <div className="task-form__top-block">
                <label htmlFor="task-form__title" className="task-form__title_label">
                    <span className="task-form__title_name">Название задачи</span>
                    <input id="task-form__title" className="task-form__title_field" type="text" defaultValue={title} ref={titleRef}/>
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
                    <button className="delete-btn" type="button" onClick={handlerTaskDelete}>Удалить задачу</button>
                </div>
            </div>
            <label htmlFor="task-form__description" className="task-form__description_label">
                <span className="task-form__description_name">Описание</span>
                <textarea id="task-form__description" className="task-form__description" defaultValue={description} rows={5} ref={descriptionRef}></textarea>
            </label>
            <div className="todo-task__end-date">{`до: ${day} ${month} ${year}г`}</div>
            <div className="task-form__files">
                {
                    files.map((fileUrl, index) => <span className="task-form__files_filename" key={index}>{fileUrl}<br></br></span>)
                }
                {/*<form className="load-files-form" encType="multipart/form-data" method="post">*/}
                {/*    <input type="file" name="f" multiple/>*/}
                {/*    <input type="submit" value="Отправить" />*/}
                {/*</form>*/}
            </div>
            <div className="task-form__bottom_buttons">
                <button className="cancel-btn" type="button" onClick={handlerFormCancel}>Отменить</button>
                <button className="save-btn" type="submit">Сохранить</button>
            </div>
        </form>
    );
}

export default TaskForm;
