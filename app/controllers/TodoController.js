import { AppState } from "../AppState.js";
import { api } from "../services/AxiosService.js";
import { todoService } from "../services/TodoService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawTodoList() {
  let todoList = AppState.todoList
  let template = ''
  todoList.forEach(td => template += `
  <li>chips</li>
  `)
  setHTML('myList', template)
}

export class TodoController {
  constructor() {
    console.log('todo controller');


    AppState.on('todoList', _drawTodoList)
  }

  async getTodo() {
    try {
      await todoService.getTodo()
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