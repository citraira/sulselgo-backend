const request = require("supertest");
const { app, mongoose } = require("../index");

describe("POST /api/login wrong password", () => {

  test("password salah", async () => {

    const response = await request(app)
      .post("/api/login")
      .send({
        username: "user_tidak_ada",
        password: "password_salah"
      });

    expect([400, 401]).toContain(response.statusCode);

  });

});

