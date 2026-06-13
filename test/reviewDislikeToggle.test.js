const request = require("supertest");
const { app, mongoose } = require("../index");
const Destinasi = mongoose.model("Destinasi");

describe("POST /api/reviews/:id/dislike TOGGLE", () => {

  let token;
  let userId;
  let reviewId;
  let destinasiId;

  beforeAll(async () => {

    const unique = Date.now();
    const username = `disliketoggle_${unique}`;

    await request(app)
      .post("/api/register")
      .send({
        username,
        email: `${username}@gmail.com`,
        telepon: "08123456789",
        password: "123456"
      });

    const loginResponse = await request(app)
      .post("/api/login")
      .send({
        username,
        password: "123456"
      });

    token = loginResponse.body.token;
    userId = loginResponse.body.user.id;

    const destinasi = await Destinasi.findOne();
    destinasiId = destinasi._id;

    const reviewResponse = await request(app)
      .post("/api/reviews")
      .set("Authorization", `Bearer ${token}`)
      .send({
        destinasiId,
        userId,
        nama: "Dislike Toggle",
        rating: 5,
        ulasan: "Testing toggle dislike"
      });

    reviewId = reviewResponse.body._id;

  });

  test("dislike pertama", async () => {

    const response = await request(app)
      .post(`/api/reviews/${reviewId}/dislike`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);

  });

  test("dislike kedua (toggle)", async () => {

    const response = await request(app)
      .post(`/api/reviews/${reviewId}/dislike`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);

  });

});
