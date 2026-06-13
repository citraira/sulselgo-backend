const request = require("supertest");
const { app, mongoose } = require("../index");

describe("POST /api/register SUCCESS", () => {

  test("harus berhasil register user baru", async () => {

    const unique = Date.now();

    const response = await request(app)
      .post("/api/register")
      .send({
        username: `usertest_${unique}`,
        email: `usertest_${unique}@gmail.com`,
        telepon: "08123456789",
        password: "123456"
      });

    console.log("STATUS:", response.statusCode);
    console.log("BODY:", response.body);

    expect(response.statusCode).toBe(201);

  });

});

