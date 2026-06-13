const request = require("supertest");
const { app, mongoose } = require("../index");

describe("Verify Token No Header", () => {

  test("tanpa authorization header", async () => {

    const response = await request(app)
      .post("/api/favorit")
      .send({
        userId: "123",
        destinasiId: "123"
      });

    expect(response.statusCode).toBe(401);

  });

});
