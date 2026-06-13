const request = require("supertest");
const { app, mongoose } = require("../index");

describe("User Not Found", () => {

  test("user tidak ditemukan", async () => {

    const response = await request(app)
      .get("/api/user/507f1f77bcf86cd799439011");

    expect(response.statusCode).toBe(404);

  });

});
