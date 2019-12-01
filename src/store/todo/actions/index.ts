import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory('TODO');

export const Add = actionCreator<{ title: string }>('ADD');
export const ChangeStatus = actionCreator<{ index: number }>('CHANGE_STATUS');
export const Delete = actionCreator<{ index: number }>('DELETE');
