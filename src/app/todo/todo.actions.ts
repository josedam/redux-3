import { Action } from '@ngrx/store';


export const AGREGAR_TODO = '[Todo] Agregar Todo';
export const TOOGLE_TODO  = '[Todo] Toogle Check';
export const TOOGLE_ALL_TODO  = '[Todo] Toogle ALL';
export const EDITAR_TODO  = '[Todo] Editar Texto';
export const BORRAR_TODO  = '[Todo] Borrar Todo';
export const BORRAR_COMPLETADOS_TODO  = '[Todo] Borrar Completados';

export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;

    constructor(public texto: string) {

    }
}

export class ToggleTodoAction implements Action {
    readonly type = TOOGLE_TODO;

    constructor(public id: number) { }
}

export class ToggleAllTodoAction implements Action {
    readonly type = TOOGLE_ALL_TODO;

    constructor(public completado: boolean) { }
}

export class EditarTodoAction implements Action {
    readonly type = EDITAR_TODO;

    constructor(public id: number, public texto: string) { }
}

export class BorrarTodoAction implements Action {
    readonly type = BORRAR_TODO;

    constructor(public id: number) { }
}

export class BorrarCompletadosAction implements Action {
    readonly type = BORRAR_COMPLETADOS_TODO;

    constructor() { }
}



export type Actions = AgregarTodoAction |
                      ToggleTodoAction |
                      EditarTodoAction |
                      BorrarTodoAction |
                      BorrarCompletadosAction |
                      ToggleAllTodoAction;
