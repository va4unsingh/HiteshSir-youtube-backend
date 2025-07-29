import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// ✅ Get list of 5 jokes
const jokes = [
  {
    id: 1,
    title: "Why don't scientists trust atoms?",
    content: "Because they make up everything!",
  },
  {
    id: 2,
    title: "Why did the chicken go to the seance?",
    content: "To talk to the other side.",
  },
  {
    id: 3,
    title: "Why don’t programmers like nature?",
    content: "It has too many bugs.",
  },
  {
    id: 4,
    title: "Why did the scarecrow win an award?",
    content: "Because he was outstanding in his field!",
  },
  {
    id: 5,
    title: "How do you comfort a JavaScript bug?",
    content: "You console it.",
  },
];

app.get("/api/jokes", (req, res) => {
  res.json(jokes);
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
