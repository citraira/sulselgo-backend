const request = require("supertest");
const { app, mongoose } = require("../index");

describe("POST /api/register DUPLICATE", () => {

  const unique = Date.now();

  const userData = {
    username: `duplicate_${unique}`,
    email: `duplicate_${unique}@gmail.com`,
    telepon: "08123456789",
    password: "123456"
  };

  beforeAll(async () => {

    await request(app)
      .post("/api/register")
      .send(userData);

  });

  test("harus gagal jika email atau username sudah digunakan", async () => {

    const response = await request(app)
      .post("/api/register")
      .send(userData);

    expect([400, 409]).toContain(response.statusCode);

  });

});

