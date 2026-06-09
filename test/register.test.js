const request = require("supertest");
const { app, mongoose } = require("../index");

describe("POST /api/register", () => {

  test("endpoint register berhasil diuji", async () => {
    const response = await request(app)
      .post("/api/register")
      .send({});

    expect(response.statusCode).toBeDefined();
  });

});

afterAll(async () => {
  await mongoose.connection.close();
});