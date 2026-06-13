const request = require("supertest");
const { app, mongoose } = require("../index");

describe("POST /api/reviews unauthorized", () => {

  test("buat review tanpa token", async () => {

    const response = await request(app)
      .post("/api/reviews")
      .send({
        destinasiId: "507f1f77bcf86cd799439011",
        userId: "507f1f77bcf86cd799439011",
        nama: "Tester",
        rating: 5,
        ulasan: "Review tanpa token"
      });

    expect(response.statusCode).toBe(401);

  });

});
