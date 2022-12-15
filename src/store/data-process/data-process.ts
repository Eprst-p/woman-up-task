import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../settings/name-space';
import {DataProcess} from '../../types/state';

const initialState: DataProcess = {
    allTasks: [],
    chosenId: undefined,
    isFormOpen: false
};

export const dataProcess = createSlice({
    name: NameSpace.Data,
    initialState,
    reducers: {
        loadTasks: (state, {payload}) => {state.allTasks = payload},
        changeId: (state, {payload}) => {state.chosenId = payload},
        setFormOpenStatus: (state, {payload}) => {state.isFormOpen = payload},
    },
});

export const {loadTasks, changeId, setFormOpenStatus} = dataProcess.actions;
