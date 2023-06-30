import { AppState } from "../AppState.js";
import { api } from "../services/AxiosService.js";
import { todoService } from "../services/TodoService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";


function _showTodoList() {
  const account = AppState.account
  if (!account) {
    return
  }
  const todoList = document.getElementById('myList')
  todoList.classList.remove('d-none')
}

function _drawTodoList() {
  let todoList = AppState.todoList
  let template = ''
  todoList.forEach(td => template += `
  <li class="selectable text-light">
  <input ${td.completed ? 'checked' : ''} onchange="app.TodoController.toggleChecked('${td.id}')" type="checkbox" id="todoChecked">
  ${td.description} 
  <i onclick="app.TodoController.deleteTodo('${td.id}')" class="mdi mdi-delete"></i>
  </li>
  `)
  setHTML('myList', template)

  const completedTodos = todoList.filter(td => td.completed)
  setText('tasksTodo', completedTodos.length)

}

export class TodoController {
  constructor() {
    console.log('todo controller');

    AppState.on('account', this.getTodo)
    AppState.on('account', _showTodoList)
    AppState.on('account', _drawTodoList)
    AppState.on('todoList', _drawTodoList)
  }

  async toggleChecked(tdId) {
    try {
      await todoService.toggleChecked(tdId)
    } catch (error) {
      console.error(error);
      Pop.error(error.message)

    }
  }

  async getTodo() {
    try {
      await todoService.getTodo()
    } catch (error) {
      console.error(error);
      Pop.error(error.message)

    }
  }

  async deleteTodo(tdId) {
    try {
      // console.log('item ID', tdId)
      const wantsToDelete = await Pop.confirm('Are you sure you want to delete this?')

      if (!wantsToDelete) {
        return
      }
      await todoService.deleteTodo(tdId)

    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }

  }

  async createTodo(event) {
    try {
      event.preventDefault()
      console.log("submitted");
      const form = event.target
      const todoData = getFormData(form)
      console.log('form data', todoData)
      await todoService.createTodo(todoData)


    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }
}