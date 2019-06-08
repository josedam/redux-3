import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { ToggleAllTodoAction } from './todo.actions';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  chkAll: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.chkAll = new FormControl(false);
    this.chkAll.valueChanges.subscribe(valor => this.marcarTodos(valor));
  }

  marcarTodos(valor: boolean) {
    this.store.dispatch(new ToggleAllTodoAction(valor));
  }
}
