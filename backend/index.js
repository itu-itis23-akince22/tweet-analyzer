const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/analyze", async (req, res) => {
  const { username, content, sentiment, summary, datetime } = req.body;

  try {
    const response = await axios.post(
      `https://api.airtable.com/v0/${
        process.env.AIRTABLE_BASE_ID
      }/${encodeURIComponent(process.env.AIRTABLE_TABLE_NAME)}`,
      {
        fields: {
          username,
          tweet: content,
          sentiment,
          summary,
          datetime,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).send("Tweet analysis saved successfully.");
  } catch (error) {
    console.error("Airtable API Error:", error.response?.data || error.message);
    res.status(500).send("Error saving to Airtable.");
  }
});

app.listen(port, () => {
  console.log(`Backend is running at http://localhost:${port}`);
});
console.log("Using token:", process.env.AIRTABLE_TOKEN);
console.log("Using table:", process.env.AIRTABLE_TABLE_NAME);
