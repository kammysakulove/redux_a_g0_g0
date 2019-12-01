export type Todo = {
  title: string;
  status: 'not yet' | 'done';
};

export * from './actions';
export * from './selectors';
export { default } from './reducers';
