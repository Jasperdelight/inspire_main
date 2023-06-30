import { AppState } from "../AppState.js"
import { Todo } from "../models/Todo.js"
import { api } from "./AxiosService.js"

class TodoService {

  async createTodo(todoData) {
    const res = await api.post('api/todos', todoData)
    const builtTodo = new Todo(res.data)
    AppState.todoList.push(builtTodo)
    console.log('list of todos??', AppState.todoList)
    AppState.emit('todoList')
  }

  async getTodo() {
    const res = await api.get('api/todos')
    // console.log('saved todos', res.data)
    // const todos = res.data
    const builtTodo = res.data.map(t => new Todo(t))
    AppState.todoList = builtTodo
    console.log('my todos in appstate', builtTodo)

  }

  async toggleChecked(tdId) {
    const foundTodoIndex = AppState.todoList.findIndex(td => td.id == tdId)
    const foundTodo = AppState.todoList[foundTodoIndex]
    if (!foundTodo) {
      throw new Error('invalid id');
    }

    const todoData = { checked: !foundTodo.checked }
    const res = await api.put(`api/todos/${tdId}`, todoData)
    console.log('checked todo', res.data)
  }

  async deleteTodo(tdId) {
    const res = await api.delete(`api/todos/${tdId}`)
    console.log(res)
    const todoIndex = AppState.todoList.findIndex(td => td.id == tdId)
    if (todoIndex == -1) {
      throw new Error('invalid Id')
    }
    AppState.todoList.splice(todoIndex, 1)
    AppState.emit('todoList')
  }

}

export const todoService = new TodoService()