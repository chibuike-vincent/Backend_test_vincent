import {TodoModel} from "../model/index.js";
import mongoose from "mongoose"

class TodoService {
  constructor() {
    this.todo = TodoModel;
  }

  async create(label) {
    const res =  await this.todo.create({
        id: 1,
        label
      });
      return res
  }

  async getAll() {
    return await this.todo.find({});
  }
  async delete(id) {
    return await this.todo.findByIdAndDelete({_id: id})
  }
  async update(id, data) {
    return await this.todo.findByIdAndUpdate({_id: id}, {...data})
  }
}

export default TodoService;
