const request = require("supertest");
const { app, mongoose } = require("../index");

describe("Search Valid", () => {

  test("query valid", async () => {

    const response = await request(app)
      .get("/api/destinasi/search?q=makassar");

    expect(response.statusCode).toBe(200);

  });

});
