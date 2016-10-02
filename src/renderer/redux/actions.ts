export interface ChangeProject {
    type: string,
    id: number
}

export const changeProject = (projectId: number) => {
    return {
        type: 'CHANGE_PROJECT',
        id: projectId
    }
}
