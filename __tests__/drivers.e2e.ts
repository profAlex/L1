import request = require('supertest');
//import request from 'supertest';

//import express from "express";
import { app } from "../src"
import { HttpStatus } from "../src/core/http-statuses";

describe("Test API", () => {

    it("GET / - should respond with a 200", async() => {
        const res = await request(app).get("/");
        expect(res.status).toBe(HttpStatus.Ok);
        expect(res.text).toBe("Hello my first BACK-END APP!");
    });

    //it("GET /drivers")

});