const request = require("supertest");
const { app, mongoose } = require("../index");

describe("POST /api/favorit", () => {

  test("harus gagal jika token tidak diberikan", async () => {

    const response = await request(app)
      .post("/api/favorit")
      .send({
        userId: "123",
        destinasiId: "123"
      });

    expect(response.statusCode).toBe(401);

  });

  test("harus mengembalikan pesan token tidak ada", async () => {

    const response = await request(app)
      .post("/api/favorit")
      .send({
        userId: "123",
        destinasiId: "123"
      });

    expect(response.body.message).toBe("Token tidak ada");

  });

});

describe("GET /api/favorit/:userId", () => {

  test("harus gagal mengambil favorit tanpa token", async () => {

    const response = await request(app)
      .get("/api/favorit/123");

    expect(response.statusCode).toBe(401);

  });

  test("response harus memiliki message", async () => {

    const response = await request(app)
      .get("/api/favorit/123");

    expect(response.body.message).toBeDefined();

  });

});
