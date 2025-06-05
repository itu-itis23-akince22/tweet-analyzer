import React, { useState } from "react";
import axios from "axios";

function TweetForm() {
  const [tweetUrl, setTweetUrl] = useState("");
  const [status, setStatus] = useState("");

  const fakeTweetContent =
    "This is a great example tweet for testing our AI tool.";

  const analyzeTweet = (content) => {
    return {
      summary: content.slice(0, 50) + "...",
      sentiment: content.includes("great") ? "Positive" : "Neutral",
      datetime: new Date().toISOString(),
      username: "@dummy_user",
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = fakeTweetContent;
    const analysis = analyzeTweet(content);

    try {
      await axios.post("http://localhost:5000/api/analyze", {
        username: analysis.username,
        content,
        sentiment: analysis.sentiment,
        summary: analysis.summary,
        datetime: analysis.datetime,
      });
      setStatus("Tweet analyzed and saved to the table!");
    } catch (error) {
      setStatus("Error: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tweet URL:
        <input
          type="text"
          value={tweetUrl}
          onChange={(e) => setTweetUrl(e.target.value)}
          placeholder="https://twitter.com/user/status/123456..."
          required
        />
      </label>
      <button type="submit">Analyze</button>
      <p>{status}</p>
    </form>
  );
}

export default TweetForm;
