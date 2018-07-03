import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class TodoService {

  todoList: AngularFireList<any>;

  constructor(private firebasedb: AngularFireDatabase) { }
// obtener tota la lista de tares
  getTodoList() 
  {
    this.todoList = this.firebasedb.list('titles');
    return this.todoList
  }
// agregar
  addTodo(title: string)
  {
    this.todoList.push({
      title: title,
      isChecked: false
    });
  }
//actualizar
  updateTodo($key: string, flag: boolean)
  {
    this.todoList.update($key, { isChecked: flag });
  }
// eliminar
  removeTodo($key)
  {
    this.todoList.remove($key);
  }
}
