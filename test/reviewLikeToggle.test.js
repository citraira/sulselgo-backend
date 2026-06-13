const request = require("supertest");
const { app, mongoose } = require("../index");
const Destinasi = mongoose.model("Destinasi");

describe("POST /api/reviews/:id/like TOGGLE", () => {

  let token;
  let userId;
  let reviewId;
  let destinasiId;

  beforeAll(async () => {

    const unique = Date.now();
    const username = `liketoggle_${unique}`;

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
        nama: "Like Toggle",
        rating: 5,
        ulasan: "Testing toggle like"
      });

    reviewId = reviewResponse.body._id;

  });

  test("like pertama", async () => {

    const response = await request(app)
      .post(`/api/reviews/${reviewId}/like`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);

  });

  test("like kedua (toggle/unlike)", async () => {

    const response = await request(app)
      .post(`/api/reviews/${reviewId}/like`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);

  });

});
