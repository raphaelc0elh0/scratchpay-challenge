import request from "supertest";
import { Express } from "express";
import expressApp from "../../app";
import states from "utils/states";

let app: Express;

describe("GET /users", function () {
  beforeAll(async () => {
    app = await expressApp();
  });

  it("successful request", async function () {
    const vetResponse = await request(app)
      .get("/clinics?type=vet")
      .set("Accept", "application/json");

    expect(vetResponse.status).toEqual(200);

    const dentalResponse = await request(app)
      .get("/clinics?type=dental")
      .set("Accept", "application/json");

    expect(dentalResponse.status).toEqual(200);
  });

  it("should throw if not-accepted query param", async function () {
    const vetResponse = await request(app)
      .get("/clinics?other_query_param=something")
      .set("Accept", "application/json");

    expect(vetResponse.status).toEqual(400);
  });

  describe("type validation", () => {
    it("should throw if no type", async function () {
      const vetResponse = await request(app)
        .get("/clinics")
        .set("Accept", "application/json");
  
      expect(vetResponse.status).toEqual(400);
    });
  })

  describe("name validation", ()=>{
    it("should be successful for name", async function () {
      const vetResponse = await request(app)
        .get(`/clinics?type=vet&name=Good`)
        .set("Accept", "application/json");

      expect(vetResponse.status).toEqual(200);
    });
  })

  describe("state validation", ()=>{
    it("should be successful for state", async function () {
      const vetResponse = await request(app)
        .get(`/clinics?type=vet&state=AZ`)
        .set("Accept", "application/json");

      expect(vetResponse.status).toEqual(200);
    });

    it("should throw if incorrect state", async function () {
      const vetResponse = await request(app)
        .get(`/clinics?type=vet&state=ZZ`)
        .set("Accept", "application/json");

      expect(vetResponse.status).toEqual(400);
    });
  })

  describe("available_at validation", ()=>{
    it("should be successful for available_at", async function () {
      const vetResponse = await request(app)
        .get(`/clinics?type=vet&available_at=08:00`)
        .set("Accept", "application/json");
  
      expect(vetResponse.status).toEqual(200);
    });
  
    it("should throw if incorrect available_at time", async function () {
      const vetResponse = await request(app)
        .get(`/clinics?type=vet&available_at=0000`)
        .set("Accept", "application/json");
  
      expect(vetResponse.status).toEqual(400);
    });
  })
});
