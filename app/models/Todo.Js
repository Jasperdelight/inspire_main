export class Todo {
  constructor(data) {
    this.description = data.description
    this.id = data.id
    this.checked = data.checked || false
  }
}