const request = require("supertest");
const { app, mongoose } = require("../index");

describe("Login Password Wrong", () => {

  let username;

  beforeAll(async () => {

    username = `wrongpass_${Date.now()}`;

    await request(app)
      .post("/api/register")
      .send({
        username,
        email: `${username}@gmail.com`,
        telepon: "08123456789",
        password: "123456"
      });

  });

  test("password salah", async () => {

    const response = await request(app)
      .post("/api/login")
      .send({
        username,
        password: "SALAH123"
      });

    expect(response.statusCode).toBe(401);

  });

});

