import { Action } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const SET_FILTRO = '[Filtro] SET_FILTRO';

export class SetFiltroAction implements Action {
    readonly type = SET_FILTRO;

    constructor(public filtro: filtrosValidos) { }
}


export type Actions = SetFiltroAction;
