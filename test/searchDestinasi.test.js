// test/searchDestinasi.test.js

const request = require("supertest");
const { app, mongoose } = require("../index");

describe("GET /api/destinasi/search", () => {

  test("query kosong harus gagal", async () => {

    const response = await request(app)
      .get("/api/destinasi/search");

    expect(response.statusCode).toBe(400);

  });

  test("query terlalu panjang harus gagal", async () => {

    const response = await request(app)
      .get(`/api/destinasi/search?q=${"a".repeat(51)}`);

    expect(response.statusCode).toBe(400);

  });

});
