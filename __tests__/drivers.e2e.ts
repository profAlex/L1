import request from "supertest";
import express from "express";
import { app } from "../src"

describe("GET /", () => {
    it("should respond with a 200", async() => {
        const res = await request(app).get("/");
        expect(res.status).toBe(200);
        expect(res.text).toBe("Hello my first BACK-END APP!");
    });
});