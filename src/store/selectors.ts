import {State} from '../types/state';
import {createSelector} from "reselect";
import {StatusName} from "../settings/status-names";

export const getAllTasks = (state:State) => state.DATA.allTasks;
export const getChosenId = (state:State) => state.DATA.chosenId;

export const getTasksInProgress = createSelector(getAllTasks, (allTasks) => allTasks.filter(task => task.taskStatus === StatusName.InProgress))
export const getTasksDone = createSelector(getAllTasks, (allTasks) => allTasks.filter(task => task.taskStatus === StatusName.Done))
export const getTasksFailed = createSelector(getAllTasks, (allTasks) => allTasks.filter(task => task.taskStatus === StatusName.Failed))
