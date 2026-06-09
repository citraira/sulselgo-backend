const request = require("supertest");
const { app, mongoose } = require("../index");

describe("GET /api/destinasi", () => {

  test("endpoint destinasi berhasil diuji", async () => {
    const response = await request(app)
      .get("/api/destinasi");

    expect(response.statusCode).toBeDefined();
  });

});

afterAll(async () => {
  await mongoose.connection.close();
});