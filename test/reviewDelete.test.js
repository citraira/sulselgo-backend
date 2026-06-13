const request = require("supertest");
const { app, mongoose } = require("../index");
const Destinasi = mongoose.model("Destinasi");

describe("DELETE /api/reviews/:id", () => {

  let token;
  let userId;
  let reviewId;
  let destinasiId;

  beforeAll(async () => {

    const unique = Date.now();
    const username = `deleteuser_${unique}`;

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

    // DESTINASI
    const destinasi = await Destinasi.findOne();

    destinasiId = destinasi._id;

    // BUAT REVIEW
    const reviewResponse = await request(app)
      .post("/api/reviews")
      .set("Authorization", `Bearer ${token}`)
      .send({
        destinasiId,
        userId,
        nama: "Delete Tester",
        rating: 5,
        ulasan: "Review untuk delete test"
      });

    reviewId = reviewResponse.body._id;

  });

  test("harus berhasil menghapus review", async () => {

    const response = await request(app)
      .delete(`/api/reviews/${reviewId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);

  });

});
