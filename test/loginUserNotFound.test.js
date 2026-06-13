const request = require("supertest");
const { app, mongoose } = require("../index");

describe("Login User Not Found", () => {

  test("username tidak ditemukan", async () => {

    const response = await request(app)
      .post("/api/login")
      .send({
        username: "tidak_ada_12345",
        password: "123456"
      });

    expect(response.statusCode).toBe(401);

  });

});

