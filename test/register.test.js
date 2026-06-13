const request = require("supertest");
const { app, mongoose } = require("../index");

describe("POST /api/register", () => {

  test("harus gagal jika data kosong", async () => {

    const response = await request(app)
      .post("/api/register")
      .send({});

    expect(response.statusCode).toBe(400);

  });

  test("harus gagal jika email tidak valid", async () => {

    const response = await request(app)
      .post("/api/register")
      .send({
        username: "citra",
        email: "email-salah",
        telepon: "08123456789",
        password: "123456"
      });

    expect(response.statusCode).toBe(400);

  });

  test("harus gagal jika password kurang dari 6 karakter", async () => {

    const response = await request(app)
      .post("/api/register")
      .send({
        username: "citra",
        email: "citra@gmail.com",
        telepon: "08123456789",
        password: "123"
      });

    expect(response.statusCode).toBe(400);

  });

});

