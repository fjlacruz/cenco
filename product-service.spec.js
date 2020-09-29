const app = require("./index.js");
const request = require('supertest');
const url = 'http://localhost:3000';


describe("product", () => {
  it("sRetorna lista de productos", async () => {
    const response = await request(`${url}`).get('/product');
    expect(response.error).toBe(false);
    expect(response.status).toBe(200);
    expect(response.body.productos.length).toBe(5);
    expect(response.body).not.toBeNull();
    expect(Array.isArray(response.body.productos)).toBe(true);
  });
});

describe("Productos por codigo", () => {
  it("Retorno de productos por codigo", async () => {
    let code = 'BT'
    const response = await request(`${url}`).get(`/product/${code}`);
    expect(response.error).toBe(false);
    expect(response.status).toBe(200);
    expect(response.text).not.toBeNull();

  });
});

describe("Checkout", () => {
  it("Retorno del checkout", async () => {
    const response = await request(`${url}`).get('/checkout');
    expect(response.error).toBe(false);
    expect(response.status).toBe(200);
    expect(response.text).not.toBeNull();

  });
});