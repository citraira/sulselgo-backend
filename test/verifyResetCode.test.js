// test/verifyResetCode.test.js

const request = require("supertest");
const { app, mongoose } = require("../index");

describe("POST /api/verify-reset-code", () => {

  test("kode salah", async () => {

    const response = await request(app)
      .post("/api/verify-reset-code")
      .send({
        email: "test@gmail.com",
        code: "999999",
        newPassword: "123456"
      });

    expect(response.statusCode).toBe(400);

  });

});
