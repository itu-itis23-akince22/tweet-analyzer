# 🧠 AI Tweet Analyzer Bot

A full-stack mini app developed for the Swipeline AI Studio internship challenge.  
It analyzes a tweet (mocked) and sends the analysis result to Airtable using REST API.

---

## 🚀 Features

- Tweet URL input
- Simulated tweet content & AI logic
- Generates:
  - Summary (1–2 sentences)
  - Sentiment (Positive / Neutral)
  - Username (mocked)
  - Datetime (ISO format)
- Saves results to Airtable
- Built with React + Node.js + Airtable API

---

## 🧰 Tech Stack

- Frontend: React
- Backend: Node.js (Express)
- Database: Airtable
- Others: Axios, dotenv, body-parser, cors

---

## 💻 How to Run Locallyfrom pathlib import Path

# README.md content
readme_content = """
# 🧠 AI Tweet Analyzer Bot

A full-stack mini app developed for the Swipeline AI Studio internship challenge.  
It analyzes a tweet (mocked) and sends the analysis result to Airtable using REST API.

---

## 🚀 Features

- Tweet URL input
- Simulated tweet content & AI logic
- Generates:
  - Summary (1–2 sentences)
  - Sentiment (Positive / Neutral)
  - Username (mocked)
  - Datetime (ISO format)
- Saves results to Airtable
- Built with React + Node.js + Airtable API

---

## 🧰 Tech Stack

- Frontend: React
- Backend: Node.js (Express)
- Database: Airtable
- Others: Axios, dotenv, body-parser, cors

---

## 💻 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/tweet-analyzer.git
cd tweet-analyzer


### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/tweet-analyzer.git
cd tweet-analyzer
### 2. Backend Setup
cd backend
npm install
### Create a .env file in the backend/ folder:
AIRTABLE_TOKEN=your_token_here
AIRTABLE_BASE_ID=your_base_id_here
AIRTABLE_TABLE_NAME=Table 1
Then run:
node index.js

###3. Frontend Setup
cd ../frontend
npm install
npm start

Frontend runs at http://localhost:3000
