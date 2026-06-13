const request = require("supertest");
const { app, mongoose } = require("../index");

describe("GET /api/health", () => {

  test("health endpoint harus mengembalikan status 200", async () => {

    const response = await request(app)
      .get("/api/health");

    expect(response.statusCode).toBe(200);

  });

  test("health endpoint harus mengembalikan status ok", async () => {

    const response = await request(app)
      .get("/api/health");

    expect(response.body.status).toBe("ok");

  });

});

