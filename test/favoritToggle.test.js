const request = require("supertest");
const { app, mongoose } = require("../index");
const Destinasi = mongoose.model("Destinasi");

describe("Favorit Toggle", () => {

  let token;
  let userId;
  let destinasiId;

  beforeAll(async () => {

    const unique = Date.now();

    await request(app)
      .post("/api/register")
        .send({
        username: `favorittoggle_${unique}`,
        email: `favorittoggle_${unique}@gmail.com`,
        telepon: "08123456789",
        password: "123456"
        })

    const login = await request(app)
      .post("/api/login")
      .send({
        username: `favorittoggle_${unique}`,
        password: "123456"
      });

    token = login.body.token;
    userId = login.body.user.id;

    const destinasi = await Destinasi.findOne();
    destinasiId = destinasi._id;

  });

  test("favorit pertama menambah data", async () => {

    const response = await request(app)
      .post("/api/favorit")
      .set("Authorization", `Bearer ${token}`)
      .send({
        userId,
        destinasiId
      });

    expect([200, 201]).toContain(response.statusCode);

  });

  test("favorit kedua menghapus data", async () => {

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

