import { Todo } from './todo/model/todo.model';

import * as fromFiltroActions from './filters/filter.actions';
import * as fromFiltroReducer from './filters/filter.reducer';
import * as fromTodoReducer from './todo/todo.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    todos: Todo[];
    filtro: fromFiltroActions.filtrosValidos;
}

export  const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodoReducer.todoReducer,
    filtro: fromFiltroReducer.filtroReducer
};

