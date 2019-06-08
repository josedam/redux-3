import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { ToggleTodoAction, EditarTodoAction, BorrarTodoAction } from '../todo.actions';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})

export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;

  chkField: FormControl;
  txtInput: FormControl;
  editando: boolean;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.chkField = new FormControl( this.todo.completado);
    this.txtInput = new FormControl( this.todo.texto, Validators.required);

    this.chkField.valueChanges.subscribe( valor => {
      this.store.dispatch(new ToggleTodoAction(this.todo.id));
    });
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  actualizarTexto() {
    if (this.txtInput.valid && this.txtInput.value !== this.todo.texto) {
      this.store.dispatch(new EditarTodoAction(this.todo.id, this.txtInput.value));
    }
  }

  terminarEdicion() {
    this.editando = false;
    this.actualizarTexto();
  }

  borrarTodo() {
    console.log('borrar');
    this.store.dispatch(new BorrarTodoAction(this.todo.id));
  }
}
