const request = require("supertest");
const { app, mongoose } = require("../index");

describe("POST /api/login", () => {

  test("harus gagal login jika data kosong", async () => {
    const response = await request(app)
      .post("/api/login")
      .send({
        email: "",
        password: ""
      });

    expect(response.statusCode).toBe(401);
  });

});

afterAll(async () => {
  await mongoose.connection.close();
});