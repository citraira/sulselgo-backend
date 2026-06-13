const request = require("supertest");
const { app, mongoose } = require("../index");

describe("GET /api/top-destinasi", () => {

  test("harus mengembalikan status 200", async () => {

    const response = await request(app)
      .get("/api/top-destinasi");

    expect(response.statusCode).toBe(200);

  });

  test("response harus berupa array", async () => {

    const response = await request(app)
      .get("/api/top-destinasi");

    expect(Array.isArray(response.body)).toBe(true);

  });

});
