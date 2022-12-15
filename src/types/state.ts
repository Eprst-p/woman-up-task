import {TodoTaskType} from "./todo-task-type";
import {store} from "../store";

export type DataProcess = {
    allTasks: TodoTaskType[];
    chosenId: string | undefined
};


export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
