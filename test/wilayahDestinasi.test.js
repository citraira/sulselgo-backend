const request = require("supertest");
const { app, mongoose } = require("../index");

describe("Destinasi Wilayah", () => {

  test("ambil destinasi berdasarkan wilayah", async () => {

    const response = await request(app)
      .get("/api/destinasi/wilayah/Makassar");

    expect(response.statusCode).toBe(200);

  });

});
