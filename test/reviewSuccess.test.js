const request = require("supertest");
const { app, mongoose } = require("../index");
const Destinasi = mongoose.model("Destinasi");

describe("POST /api/reviews SUCCESS", () => {

  let token;
  let userId;
  let destinasiId;

  beforeAll(async () => {

    const unique = Date.now();
    const username = `reviewuser_${unique}`;

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

  });

  test("harus berhasil membuat review", async () => {

    const response = await request(app)
      .post("/api/reviews")
      .set("Authorization", `Bearer ${token}`)
      .send({
        destinasiId,
        userId,
        nama: "User Test",
        rating: 5,
        ulasan: "Tempat wisata sangat bagus"
      });

    expect(response.statusCode).toBe(201);

  });

  test("review harus memiliki rating", async () => {

    const response = await request(app)
      .post("/api/reviews")
      .set("Authorization", `Bearer ${token}`)
      .send({
        destinasiId,
        userId,
        nama: "User Test",
        rating: 4,
        ulasan: "Bagus"
      });

    expect(response.body.rating).toBe(4);

  });

});
