const request = require("supertest");
const { app, mongoose } = require("../index");
const Destinasi = mongoose.model("Destinasi");

describe("PUT /api/reviews/:id", () => {

  let token;
  let userId;
  let reviewId;
  let destinasiId;

  beforeAll(async () => {

    const unique = Date.now();

    // REGISTER USER BARU
    await request(app)
      .post("/api/register")
      .send({
        username: `reviewuser_${unique}`,
        email: `reviewuser_${unique}@gmail.com`,
        telepon: "08123456789",
        password: "123456"
      });

    // LOGIN
    const loginResponse = await request(app)
      .post("/api/login")
      .send({
        username: `reviewuser_${unique}`,
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
        nama: "Review Tester",
        rating: 5,
        ulasan: "Review sebelum update"
      });

    reviewId = reviewResponse.body._id;

  });

  test("harus berhasil update review", async () => {

    const response = await request(app)
      .put(`/api/reviews/${reviewId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        rating: 4,
        ulasan: "Review setelah update"
      });

    expect(response.statusCode).toBe(200);

  });

  test("ulasan harus berubah", async () => {

    const response = await request(app)
      .put(`/api/reviews/${reviewId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        rating: 3,
        ulasan: "Update kedua"
      });

    expect(response.body.review.ulasan).toBe("Update kedua");

  });

});
