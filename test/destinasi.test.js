const request = require("supertest");
const { app, mongoose } = require("../index");

describe("GET /api/destinasi", () => {

  test("GET destinasi harus merespon", async () => {

    const response = await request(app)
      .get("/api/destinasi");

    expect(response.statusCode).toBe(200);

  });

  test("response body harus berupa array", async () => {

    const response = await request(app)
      .get("/api/destinasi");

    expect(Array.isArray(response.body)).toBe(true);

  });

});

describe("GET /api/destinasi/search", () => {

  test("harus gagal jika query kosong", async () => {

    const response = await request(app)
      .get("/api/destinasi/search");

    expect(response.statusCode).toBe(400);

  });

});
