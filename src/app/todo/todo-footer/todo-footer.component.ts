import { Component, OnInit } from '@angular/core';
import * as fromFilters from '../../filters/filter.actions';
import * as fromTodo from '../todo.actions';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';



@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtros: fromFilters.filtrosValidos[] = ['todos', 'pendientes', 'completados'];
  filtroActual: fromFilters.filtrosValidos;
  pendientes: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.contarPendientes(state.todos);
      this.filtroActual = state.filtro; // manda el state completo sin select()
    });
  }

  contarPendientes(todos: Todo[]) {
    this.pendientes = todos.filter(item => !item.completado).length;
  }

  cambiarFiltro(nuevoFiltro: fromFilters.filtrosValidos) {
    this.store.dispatch(new fromFilters.SetFiltroAction(nuevoFiltro));
  }

  borrarCompletados() {
    this.store.dispatch(new fromTodo.BorrarCompletadosAction());
  }
}
