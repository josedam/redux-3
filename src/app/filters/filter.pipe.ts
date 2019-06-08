import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import * as fromFilter from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: fromFilter.filtrosValidos): Todo[] {
    switch (filtro) {
      case 'completados':
        return todos.filter(item => item.completado);

      case 'pendientes':
        return todos.filter(item => !item.completado);

      default:
        return todos;
    }
  }

}
