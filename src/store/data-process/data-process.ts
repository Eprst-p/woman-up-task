import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../settings/name-space';
import {DataProcess} from '../../types/state';

const initialState: DataProcess = {
    allTasks: [],
    chosenId: undefined,
};

export const dataProcess = createSlice({
    name: NameSpace.Data,
    initialState,
    reducers: {
        loadTasks: (state, {payload}) => {state.allTasks = payload},
        changeId: (state, {payload}) => {state.chosenId = payload}
    },
});

export const {loadTasks, changeId} = dataProcess.actions;
