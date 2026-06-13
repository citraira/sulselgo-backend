const request = require("supertest");
const { app, mongoose } = require("../index");
const Destinasi = mongoose.model("Destinasi");

describe("POST /api/reviews/:id/like", () => {

  let token;
  let userId;
  let reviewId;
  let destinasiId;

  beforeAll(async () => {

    const unique = Date.now();
    const username = `likeuser_${unique}`;

    // REGISTER
    await request(app)
      .post("/api/register")
      .send({
        username,
        email: `${username}@gmail.com`,
        telepon: "08123456789",
        password: "123456"
      });

    // LOGIN
    const loginResponse = await request(app)
      .post("/api/login")
      .send({
        username,
        password: "123456"
      });

    token = loginResponse.body.token;
    userId = loginResponse.body.user.id;

    // AMBIL DESTINASI
    const destinasi = await Destinasi.findOne();

    if (!destinasi) {
      throw new Error("Tidak ada data destinasi di database");
    }

    destinasiId = destinasi._id;

    // BUAT REVIEW
    const reviewResponse = await request(app)
      .post("/api/reviews")
      .set("Authorization", `Bearer ${token}`)
      .send({
        destinasiId,
        userId,
        nama: "User Test",
        rating: 5,
        ulasan: "Review untuk like test"
      });

    reviewId = reviewResponse.body._id;

  });

  test("harus berhasil melakukan like review", async () => {

    const response = await request(app)
      .post(`/api/reviews/${reviewId}/like`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);

  });

  test("review harus memiliki likes", async () => {

    const response = await request(app)
      .post(`/api/reviews/${reviewId}/like`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.body.likes).toBeDefined();

  });

});
