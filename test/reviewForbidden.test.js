const request = require("supertest");
const { app, mongoose } = require("../index");
const Destinasi = mongoose.model("Destinasi");

describe("Review Forbidden", () => {

  let tokenA;
  let tokenB;
  let userIdA;
  let reviewId;
  let destinasiId;

  beforeAll(async () => {

    const unique = Date.now();

    await request(app)
      .post("/api/register")
        .send({
        username: `userA_${unique}`,
        email: `userA_${unique}@gmail.com`,
        telepon: "08123456789",
        password: "123456"
        })

    await request(app)
      .post("/api/register")
        .send({
        username: `userB_${unique}`,
        email: `userB_${unique}@gmail.com`,
        telepon: "08123456789",
        password: "123456"
        })

    const loginA = await request(app)
      .post("/api/login")
      .send({
        username: `userA_${unique}`,
        password: "123456"
      });

    const loginB = await request(app)
      .post("/api/login")
      .send({
        username: `userB_${unique}`,
        password: "123456"
      });

    tokenA = loginA.body.token;
    tokenB = loginB.body.token;
    userIdA = loginA.body.user.id;

    const destinasi = await Destinasi.findOne();
    destinasiId = destinasi._id;

    const review = await request(app)
      .post("/api/reviews")
      .set("Authorization", `Bearer ${tokenA}`)
      .send({
        destinasiId,
        userId: userIdA,
        nama: "User A",
        rating: 5,
        ulasan: "Review milik user A"
      });

    reviewId = review.body._id;

  });

  test("user lain tidak boleh update review", async () => {

    const response = await request(app)
      .put(`/api/reviews/${reviewId}`)
      .set("Authorization", `Bearer ${tokenB}`)
      .send({
        rating: 1,
        ulasan: "Hacked"
      });

    expect(response.statusCode).toBe(403);

  });

  test("user lain tidak boleh delete review", async () => {

    const response = await request(app)
      .delete(`/api/reviews/${reviewId}`)
      .set("Authorization", `Bearer ${tokenB}`);

    expect(response.statusCode).toBe(403);

  });

});

