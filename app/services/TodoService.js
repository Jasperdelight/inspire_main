import { AppState } from "../AppState.js"
import { Todo } from "../models/Todo.js"
import { api } from "./AxiosService.js"

class TodoService {

  async createTodo(todoData) {
    const res = await api.post('api/todos', todoData)
    const builtTodo = new Todo(res.data)
    AppState.todoList.push(builtTodo)
    console.log('list of todos??', AppState.todoList)

  }

  async getTodo() {
    const res = await api.get('api/todos')
    // console.log('saved todos', res.data)
    // const todos = res.data
    const builtTodo = res.data.map(t => new Todo(t))
    AppState.todoList = builtTodo
    console.log('my todos in appstate', builtTodo)

  }

}

export const todoService = new TodoService()