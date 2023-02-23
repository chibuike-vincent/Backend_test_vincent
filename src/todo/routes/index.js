import express from "express";
import TodoController from "../controller/todoController.js";

const router = express.Router();

const Controller = new TodoController();

router.post("/todo", (req, res) => Controller.createTodo(req, res));
router.get("/todos", (req, res) => Controller.getAllTodos(req, res));
router.put("/todo/update/:id", (req, res) => Controller.updateTodo(req, res));
router.delete("/todo/delete/:id", (req, res) => Controller.deleteTodo(req, res));


export default router;
