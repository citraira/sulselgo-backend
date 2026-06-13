const request = require("supertest");
const { app, mongoose } = require("../index");

describe("Verify Token Invalid", () => {

  test("token tidak valid", async () => {

    const response = await request(app)
      .post("/api/favorit")
      .set("Authorization", "Bearer token_palsu")
      .send({
        userId: "123",
        destinasiId: "123"
      });

    expect(response.statusCode).toBe(401);

  });

});
