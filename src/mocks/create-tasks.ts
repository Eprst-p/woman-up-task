import {TodoTaskType} from "../types/todo-task-type";
import { faker } from '@faker-js/faker';
import {StatusName} from "../settings/status-names";
import {getRandomPositiveNumber} from "./randomaizers";

const createTodoTask = ():TodoTaskType => {
    const id = faker.datatype.uuid()
    const title = faker.name.jobTitle();
    const description = faker.lorem.sentences(3);
    const files = [faker.lorem.word(5), faker.lorem.word(5)];
    const isDone = !!getRandomPositiveNumber(0,1)
    const generateRandomDate = () => {
        const date = new Date();
        date.setFullYear(date.getFullYear()  - 2 + getRandomPositiveNumber(0, 2));
        date.setMonth(date.getMonth() + getRandomPositiveNumber(0, 6));
        date.setDate(date.getDate() + getRandomPositiveNumber(0, 30));
        return date;
    }
    const date = generateRandomDate();
    const defineStatus = () => {
        const currentDate = new Date();
        const taskDate = new Date(date);
        if (isDone) {
            return StatusName.Done
        }
        if (currentDate > taskDate) {
            return StatusName.Failed
        }
        return StatusName.InProgress
    }
    const status = defineStatus();

    return ({
        id: id,
        title: title,
        description: description,
        endDate: date.toString(),
        files: files,
        isDone: isDone,
        taskStatus: status
    })
}

export const createdTasks = Array.from({length: 20}, () => createTodoTask());
