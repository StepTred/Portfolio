import express from "express";
import type { HealthResponse } from "@portfolio/shared";

const app = express();

app.get("/api/v1/health", (_req, res) => {
  const response: HealthResponse = {
    status: "ok",
  };
  res.json(response);
});

export default app;