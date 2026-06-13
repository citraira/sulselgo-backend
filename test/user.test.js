const request = require("supertest");
const { app, mongoose } = require("../index");

describe("GET /api/user/:id", () => {

  test("harus gagal jika id tidak valid", async () => {

    const response = await request(app)
      .get("/api/user/123");

    expect(response.statusCode).toBe(500);

  });

  test("response memiliki message ketika gagal", async () => {

    const response = await request(app)
      .get("/api/user/123");

    expect(response.body.message).toBeDefined();

  });

});

