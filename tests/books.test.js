import request from "supertest";
import { app } from "../main.js";

describe("Books API", () => {
  it("should list all books", async () => {
    const res = await request(app).get("/admin/books");
    expect(res.statusCode).toBe(200);
  });
});
