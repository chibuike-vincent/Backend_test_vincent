import chai from "chai";
import sinon from "sinon";
import faker from "faker";
import TodoService from "../service/todoService.js"
import { TodoModel } from "../model/index.js";


const expect = chai.expect;

describe("TodoService", function() {
    const stubValue = {
        id: faker.random.uuid(),
        label: faker.random.word(),
        completed: faker.random.boolean(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past()    
      };
  describe("create new todo", function() {
    it("should add a new todo to the db", async function() {
      const stubValue = {
        id: faker.random.uuid(),
        label: faker.random.word(),
        completed: faker.random.boolean(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past()
      };
      const stub = sinon.stub(TodoModel, "create").returns(stubValue);
      const todoService = new TodoService();
      const todo = await todoService.create(stubValue.label);
      

      expect(stub.calledOnce).to.be.true;
      expect(todo.id).to.equal(stubValue.id);
      expect(todo.label).to.equal(stubValue.label);
    });
  });

  describe("get all todos", function() {
    it("should retrieve all todos", async function() {
      const stub = sinon.stub(TodoModel, "find").returns(stubValue);
      const todoService = new TodoService();
      const todos = await todoService.getAll();

      expect(stub.calledOnce).to.be.true;
      expect(todos).to.equal(stubValue);
    });
  });

  describe("delete todo", function() {
    it("should delete a todo by id", async function() {
      const stub = sinon.stub(TodoModel, "findByIdAndDelete").returns(stubValue);
      const todoService = new TodoService();
      const todos = await todoService.delete(stubValue.id);

      expect(stub.calledOnce).to.be.true;
      expect(todos.id).to.equal(stubValue.id);
      expect(todos.label).to.equal(stubValue.label);
    });
  });

  describe("update todo", function() {
    it("should update todo by id", async function() {
      const stub = sinon.stub(TodoModel, "findByIdAndUpdate").returns(stubValue);
      const todoService = new TodoService();
      const todos = await todoService.update(stubValue.id, {label: faker.random.word()});

      expect(stub.calledOnce).to.be.true;
      expect(todos.id).to.equal(stubValue.id);
      expect(todos.label).to.equal(stubValue.label);
    });
  });
});
