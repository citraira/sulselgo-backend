const request = require("supertest");
const { app, mongoose } = require("../index");
const Destinasi = mongoose.model("Destinasi");

describe("POST /api/favorit ADD", () => {

  let token;
  let userId;
  let destinasiId;

  beforeAll(async () => {

    const unique = Date.now();
    const username = `favoritadd_${unique}`;

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

  test("harus berhasil menambahkan favorit", async () => {

    const response = await request(app)
      .post("/api/favorit")
      .set("Authorization", `Bearer ${token}`)
      .send({
        userId,
        destinasiId
      });

    expect([200, 201]).toContain(response.statusCode);

  });

});

