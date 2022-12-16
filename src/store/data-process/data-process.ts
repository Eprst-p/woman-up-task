import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../settings/name-space';
import {DataProcess} from '../../types/state';
import {ActiveModal} from "../../settings/active-modal";

const initialState: DataProcess = {
    allTasks: [],
    chosenId: undefined,
    activeModal: ActiveModal.NoModal
};

export const dataProcess = createSlice({
    name: NameSpace.Data,
    initialState,
    reducers: {
        loadTasks: (state, {payload}) => {state.allTasks = payload},
        changeId: (state, {payload}) => {state.chosenId = payload},
        changeActiveModal: (state, {payload}) => {state.activeModal = payload},
    },
});

export const {loadTasks, changeId, changeActiveModal} = dataProcess.actions;
