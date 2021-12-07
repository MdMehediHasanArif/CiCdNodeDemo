const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("responds with Hello World!", (done) => {
        request(app).get("/").expect("Hello World!", done);
    })
});

describe("GET /multiply/12/4", () => {
    it("The product is : 48", (done) => {
        request(app).get("/multiply/12/4").expect("The product is : 48", done);
    })
});

describe("GET /division/12/4", () => {
    it("The result is : 3", (done) => {
        request(app).get("/division/12/4").expect("The result is : 3", done);
    })
});