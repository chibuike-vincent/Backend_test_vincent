import TodoService from "../service/todoService.js"

class TodoController {
    constructor() {
      this.todoService = new TodoService();
    }
  
    async createTodo(req, res, next) {
      const { label } = req.body;
  
      if (
        !label || typeof label !== "string" 
      ) {
        return res.status(400).json({
          message: "Invalid Params"
        });
      }
      const todo = await this.todoService.create(label);
      return res.status(201).json({
        data: todo
      });
    }
  
    async getAllTodos(req, res, next) {
  
      const todo = await this.todoService.getAll();
      return res.json({
        data: todo
      });
    }

    async updateTodo(req, res, next) {
        const {id} = req.params
        const data = req.body
        const todo = await this.todoService.update(id, data);
        return res.json({
            data: todo
        });
    }

    async deleteTodo(req, res, next) {
        const {id} = req.params
        const todo = await this.todoService.delete(id);
        return res.json({
            data: todo
        });
    }
  }
  
  export default TodoController;
  