// test/forgotPassword.test.js

const request = require("supertest");
const { app, mongoose } = require("../index");

describe("POST /api/forgot-password", () => {

  test("email tidak ditemukan", async () => {

    const response = await request(app)
      .post("/api/forgot-password")
      .send({
        email: "tidakada@gmail.com"
      });

    expect(response.statusCode).toBe(404);

  });

});

