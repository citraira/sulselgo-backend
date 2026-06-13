const request = require("supertest");
const { app, mongoose } = require("../index");

describe("Review Destinasi Not Found", () => {

  let token;
  let userId;

  beforeAll(async () => {

    const unique = Date.now();

    await request(app)
      .post("/api/register")
        .send({
        username: `review404_${unique}`,
        email: `review404_${unique}@gmail.com`,
        telepon: "08123456789",
        password: "123456"
        })

    const login = await request(app)
      .post("/api/login")
      .send({
        username: `review404_${unique}`,
        password: "123456"
      });

    token = login.body.token;
    userId = login.body.user.id;

  });

  test("destinasi tidak ditemukan", async () => {

    const response = await request(app)
      .post("/api/reviews")
      .set("Authorization", `Bearer ${token}`)
      .send({
        destinasiId: "507f1f77bcf86cd799439011",
        userId,
        nama: "Tester",
        rating: 5,
        ulasan: "Test"
      });

    expect(response.statusCode).toBe(404);

  });

});

