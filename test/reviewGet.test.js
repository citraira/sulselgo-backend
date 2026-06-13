const request = require("supertest");
const { app, mongoose } = require("../index");
const Destinasi = mongoose.model("Destinasi");

describe("GET /api/reviews/:destinasiId", () => {

  let destinasiId;

  beforeAll(async () => {

    const destinasi = await Destinasi.findOne();

    destinasiId = destinasi._id;

  });

  test("harus berhasil mengambil review", async () => {

    const response = await request(app)
      .get(`/api/reviews/${destinasiId}`);

    expect(response.statusCode).toBe(200);

  });

  test("response harus berupa array", async () => {

    const response = await request(app)
      .get(`/api/reviews/${destinasiId}`);

    expect(Array.isArray(response.body)).toBe(true);

  });

});
