import * as fromTodo from './todo.actions';
import {Todo} from './model/todo.model';
import { CompileMetadataResolver } from '@angular/compiler';

const todo1 = new Todo('opccion uno');
const todo2 = new Todo('opccion dos');
const todo3 = new Todo('opccion tres');

todo2.completado = true;

const initialState: Todo[] = [todo1, todo2, todo3];


export function todoReducer(state = initialState, action: fromTodo.Actions ): Todo[] {
    switch (action.type) {
        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [...state, todo];

            case fromTodo.TOOGLE_TODO:
                return state.map(todoEdit => {
                    if (todoEdit.id === action.id) {
                        return {
                            ...todoEdit,
                            completado: !todoEdit.completado
                        };
                    } else {
                        return todoEdit;
                    }
                });

            case fromTodo.TOOGLE_ALL_TODO:
                return state.map(todoEdit => {
                        return {
                            ...todoEdit,
                            completado: action.completado
                        };
                });

            case fromTodo.EDITAR_TODO:
                return state.map(todoEdit => {
                    if (todoEdit.id === action.id) {
                        return {
                            ...todoEdit,
                            texto: action.texto
                        };
                    } else {
                        return todoEdit;
                    }
                });

            case fromTodo.BORRAR_TODO:
                return state.filter( todoEdit => todoEdit.id !== action.id );

            case fromTodo.BORRAR_COMPLETADOS_TODO:
                return state.filter( todoEdit => !todoEdit.completado );

        default: {
            return state;
        }
    }
}