const request = require("supertest");
const { app, mongoose } = require("../index");

describe("Reset Password Invalid Token", () => {

  test("token tidak valid", async () => {

    const response = await request(app)
      .post("/api/reset-password/tokenpalsu")
      .send({
        newPassword: "12345678"
      });

    expect(response.statusCode).toBe(400);

  });

});
