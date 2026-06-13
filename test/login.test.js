const request = require("supertest");
const { app, mongoose } = require("../index");

describe("POST /api/login", () => {

  test("harus gagal login jika data kosong", async () => {

    const response = await request(app)
      .post("/api/login")
      .send({
        username: "",
        password: ""
      });

    expect(response.statusCode).toBe(401);

  });

  test("harus gagal jika username tidak ditemukan", async () => {

    const response = await request(app)
      .post("/api/login")
      .send({
        username: "userTidakAda",
        password: "123456"
      });

    expect(response.statusCode).toBe(401);

  });

  test("response login gagal memiliki message", async () => {

    const response = await request(app)
      .post("/api/login")
      .send({
        username: "",
        password: ""
      });

    expect(response.body.message).toBeDefined();

  });

});

