import { rest } from "msw";

const handlers = [
  rest.get(
    "http://localhost/undefinedmartayluis/comments",
    async (req, res, ctx) => {
      const response = res(ctx.json([{ id: "1" }, { id: "2" }]));
      return response;
    }
  ),
  rest.post(
    "https://proyectofinal-martayluis.herokuapp.com/user/login",
    async (req, res, ctx) => {
      const response = res(ctx.json({ id: "regalo1" }));
      return response;
    }
  ),
];

export default handlers;
