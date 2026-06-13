const request = require("supertest");
const { app, mongoose } = require("../index");

describe("POST /api/login SUCCESS", () => {

  let username;
  let password = "123456";

  beforeAll(async () => {

    const unique = Date.now();

    username = `loginuser_${unique}`;

    await request(app)
      .post("/api/register")
      .send({
        username,
        email: `${username}@gmail.com`,
        telepon: "08123456789",
        password
      });

  });

  test("harus berhasil login", async () => {

    const response = await request(app)
      .post("/api/login")
      .send({
        username,
        password
      });

    expect(response.statusCode).toBe(200);

  });

  test("harus mengembalikan token", async () => {

    const response = await request(app)
      .post("/api/login")
      .send({
        username,
        password
      });

    expect(response.body.token).toBeDefined();

  });

});

