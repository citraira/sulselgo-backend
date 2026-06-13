const request = require("supertest");
const { app, mongoose } = require("../index");

describe("Review Not Found", () => {

  const fakeId = "507f1f77bcf86cd799439011";

  let token;

  beforeAll(async () => {

    const unique = Date.now();

    // REGISTER
    const register = await request(app)
      .post("/api/register")
      .send({
        username: `notfound_${unique}`,
        email: `notfound_${unique}@gmail.com`,
        telepon: "08123456789",
        password: "123456"
      });

    console.log("REGISTER STATUS:", register.statusCode);
    console.log("REGISTER BODY:", register.body);

    // LOGIN
    const login = await request(app)
      .post("/api/login")
      .send({
        username: `notfound_${unique}`,
        password: "123456"
      });

    console.log("LOGIN STATUS:", login.statusCode);
    console.log("LOGIN BODY:", login.body);

    token = login.body.token;

    console.log("TOKEN:", token);

  });

  test("update review yang tidak ada", async () => {

    const response = await request(app)
      .put(`/api/reviews/${fakeId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        rating: 5,
        ulasan: "Review tidak ada"
      });

    console.log("UPDATE STATUS:", response.statusCode);
    console.log("UPDATE BODY:", response.body);

    expect(response.statusCode).toBe(404);

  });

  test("delete review yang tidak ada", async () => {

    const response = await request(app)
      .delete(`/api/reviews/${fakeId}`)
      .set("Authorization", `Bearer ${token}`);

    console.log("DELETE STATUS:", response.statusCode);
    console.log("DELETE BODY:", response.body);

    expect(response.statusCode).toBe(404);

  });

});

