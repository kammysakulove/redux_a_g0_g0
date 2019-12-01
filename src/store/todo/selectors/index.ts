import { createSelector } from 'reselect';
import { State } from 'store';

import { Todo } from '..';

export const GetAllTodos = createSelector(
  (state: State) => state.todo,
  (todos: Todo[]) => todos
);
