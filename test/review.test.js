const request = require("supertest");
const { app, mongoose } = require("../index");

describe("POST /api/reviews", () => {

  test("harus gagal jika tidak ada token", async () => {

    const response = await request(app)
      .post("/api/reviews")
      .send({});

    expect(response.statusCode).toBe(401);

  });

});

describe("POST /api/reviews/:id/like", () => {

  test("harus gagal like tanpa token", async () => {

    const response = await request(app)
      .post("/api/reviews/123/like");

    expect(response.statusCode).toBe(401);

  });

});

describe("POST /api/reviews/:id/dislike", () => {

  test("harus gagal dislike tanpa token", async () => {

    const response = await request(app)
      .post("/api/reviews/123/dislike");

    expect(response.statusCode).toBe(401);

  });

});

describe("PUT /api/reviews/:id", () => {

  test("harus gagal update review tanpa token", async () => {

    const response = await request(app)
      .put("/api/reviews/123")
      .send({
        rating: 5,
        ulasan: "Bagus"
      });

    expect(response.statusCode).toBe(401);

  });

});

describe("DELETE /api/reviews/:id", () => {

  test("harus gagal hapus review tanpa token", async () => {

    const response = await request(app)
      .delete("/api/reviews/123");

    expect(response.statusCode).toBe(401);

  });

});

