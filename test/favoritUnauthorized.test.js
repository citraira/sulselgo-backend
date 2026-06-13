const request = require("supertest");
const { app, mongoose } = require("../index");

describe("GET /api/favorit unauthorized", () => {

  test("akses favorit tanpa token", async () => {

    const response = await request(app)
      .get("/api/favorit/123");

    expect(response.statusCode).toBe(401);

  });

});

