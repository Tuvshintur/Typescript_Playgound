import { FetchTodosAction, DeleteTodoAction } from '../actions';

export enum ActionTypes {
    fetchTodos,
    deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
