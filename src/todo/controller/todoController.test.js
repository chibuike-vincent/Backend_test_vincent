import chai from "chai";
import sinon from "sinon";
import TodoController from "./todoController.js";
import TodoService from "../service/todoService.js";

const expect = chai.expect;

describe("TodoController", function() {
  describe("Create", function() {
    let status, json, res,todoService;
    beforeEach(() => {
      status = sinon.stub();
      json = sinon.spy();
      res = { json, status };
      status.returns(res);
      const todoRepo = sinon.spy();
      todoService = new TodoService(todoRepo);
    });
    it("should not create todo when label param is not provided", async function() {
      const req = { body: {} };
      await new TodoController().createTodo(req, res);

      expect(status.calledOnce).to.be.true;
      expect(status.args[0][0]).to.equal(400);
      expect(json.calledOnce).to.be.true;
      expect(json.args[0][0].message).to.equal("Invalid Params");
    });
  });
});
