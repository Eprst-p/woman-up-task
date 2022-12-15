import {StatusName} from "../settings/status-names";

export type TodoTaskType = {
    id: string
    title: string
    description: string
    endDate: string
    files: string[]
    isDone: boolean
    taskStatus: StatusName
}
