import {TodoTaskType} from "../types/todo-task-type";
import { faker } from '@faker-js/faker';
import {StatusName} from "../settings/status-names";

const createTodoTask = ():TodoTaskType => {
    const id = faker.datatype.uuid()
    const title = faker.name.jobTitle();
    const description = faker.lorem.sentences(3);
    const endDate = faker.date.soon(15).toString();
    const files = [faker.lorem.word(5), faker.lorem.word(5)];
    const status = StatusName.InProgress;

    return ({
        id: id,
        title: title,
        description: description,
        endDate: endDate,
        files: files,
        taskStatus: status
    })
}

export const createdTasks = Array.from({length: 10}, () => createTodoTask());
