import cors from "cors";
import express from "express";



const app = express();
app.use(cors());
app.use(express.json());

/**
 * SCREEN A — Overview
 */
app.get("/overview", (_req, res) => {
  res.json({
    sectionTitle: "Strategy in Action",
    score: 54,
    status: "Strong", // Critical | Average | Strong
    comparison: {
      value: -15,
      label: "below benchmark"
    }
  });
});

/**
 * SCREEN B — Insights
 */
app.get("/insights", (_req, res) => {
  res.json({
    headline: "Execution is lagging behind strategic clarity",
    insights: [
      {
        title: "Alignment",
        text: "Teams understand the direction, but priorities drift in execution.",
        value: 62
      },
      {
        title: "Cadence",
        text: "Execution rhythm is inconsistent across teams.",
        value: 48
      },
      {
        title: "Ownership",
        text: "Decisions stall without clearly defined owners.",
        value: 51
      }
    ],
    visual: {
      type: "bar", // chart / bar / sparkline
      values: [62, 48, 51]
    },
    navigation: {
      prev: null,
      next: "Operational Excellence"
    }
  });
});


app.listen(3688, () => {
  console.log("Backend running on http://localhost:3688");
});