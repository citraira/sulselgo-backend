const request = require("supertest");
const { app, mongoose } = require("../index");

describe("PUT /api/user/:id", () => {

  let token;
  let userId;

  beforeAll(async () => {

    const unique = Date.now();
    const username = `updateuser_${unique}`;

    // REGISTER
    await request(app)
      .post("/api/register")
      .send({
        username,
        email: `${username}@gmail.com`,
        telepon: "08123456789",
        password: "123456"
      });

    // LOGIN
    const loginResponse = await request(app)
      .post("/api/login")
      .send({
        username,
        password: "123456"
      });

    token = loginResponse.body.token;
    userId = loginResponse.body.user.id;

  });

  test("harus berhasil update user", async () => {

    const response = await request(app)
      .put(`/api/user/${userId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        username: `updated_${Date.now()}`,
        email: `updated_${Date.now()}@gmail.com`,
        telepon: "08123456789"
      });

    expect(response.statusCode).toBe(200);

  });

  test("response harus memiliki email", async () => {

    const unique = Date.now();

    const response = await request(app)
      .put(`/api/user/${userId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        username: `updated2_${unique}`,
        email: `updated2_${unique}@gmail.com`
      });

    expect(response.body.email).toBeDefined();

  });

});
