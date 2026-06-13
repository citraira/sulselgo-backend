const request = require("supertest");
const { app, mongoose } = require("../index");

describe("POST /api/favorit SUCCESS", () => {

  let token;
  let userId;

  beforeAll(async () => {

    const unique = Date.now();

    const username = `favorituser_${unique}`;

    // REGISTER USER BARU
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

  test("harus bisa mengambil daftar favorit dengan token", async () => {

    const response = await request(app)
      .get(`/api/favorit/${userId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);

  });

  test("response favorit harus berupa array", async () => {

    const response = await request(app)
      .get(`/api/favorit/${userId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(Array.isArray(response.body)).toBe(true);

  });

});
