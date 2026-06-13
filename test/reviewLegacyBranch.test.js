const request = require("supertest");
const { app, mongoose } = require("../index");

describe("GET /api/reviews legacy branch", () => {

  test("destinasi tidak ditemukan", async () => {

    const response = await request(app)
      .get("/api/reviews/507f1f77bcf86cd799439011");

    expect(response.statusCode).toBe(200);

  });

});
