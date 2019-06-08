

import * as fromFilter from './filter.actions';

const initialState: fromFilter.filtrosValidos = 'todos';

export function filtroReducer(state = initialState, action: fromFilter.Actions ): fromFilter.filtrosValidos {
    switch (action.type) {
        case fromFilter.SET_FILTRO: {
            return action.filtro;
        }

        default: {
            return state;
        }
    }
}
